<script>
import axios from 'axios'
export default {
  name: 'AppContacts',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: {},
      loading: false,
      success: false
    }
  },
  methods: {
    sendMessage() {
      // prepare the request payload 
      const data = {
        'name': this.name,
        'email': this.email,
        'message': this.message,
      }
      console.log(data);
      // sent the ajax post request
      axios
        .post('http://127.0.0.1:8000/api/lead', data)
        .then(response => {
          console.log(response);
          if (response.data.success) {
            // show a success message
            this.success = true;
            this.errors = null;
            this.name = '';
            this.email = '';
            this.message = '';
          } else {
            // there are valdation errors
            this.success = false;
            this.errors = response.data.errors
          }
        })
      // handle the response accordingly
    }
  }
}
</script>

<template>
  <div>
    
    <div class="container">

    <form @submit.prevent="sendMessage()">
     
      <template v-if="success">
        <div class="alert alert-success" role="alert">
          <strong>Message received</strong> We will get back to you asap
        </div>
      </template>

      

        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" name="name" id="name" aria-describedby="nameHelper"
            placeholder="Type your name"v-model="name" />
          <small id="nameHelper" class="form-text text-muted">Scrivi il tuo nome</small>
          <p class="text-danger" v-for="(error, index) in errors.name" :key="`name-error-${index}`">
            {{ error }}
          </p>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="text" class="form-control" :class="{ 'is-invalid': errors.email }" name="email" id="email"
            aria-describedby="emailHelp" placeholder="abc@mail.com" v-model="email" />
            <small id="emailHelp" class="form-text text-muted">Scrivi la tua mail</small>
          <p class="text-danger" v-for="(error, index) in errors.email" :key="`email-error-${index}`">

            {{ error }}

          </p>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea class="form-control" :class="{ 'is-invalid': errors.message }" name="message" id="message" rows="3" aria-describedby="messageHelp" v-model="message"></textarea>
            <small id="messageHelp" class="form-text text-muted">Scrivi un testo di minimo 30 caratteri</small>  
          <p class="text-danger" v-for="(error, index) in errors.message" :key="`message-error-${index}`">

            {{ error }}

          </p>
        </div>


        <button type="submit" class="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<style scoped></style>