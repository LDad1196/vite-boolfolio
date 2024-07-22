<script>





export default {
  name: 'ContactsView',

  components: {
    
    
    

  }
}

</script>

<template>
  <div class="container">
    <h2 class="text-center">Submit your Contact</h2>
    <form>
      <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder=""
        />
        <small id="helpId" class="form-text text-muted">Type your name</small>
      </div>
      
      
      <div class="mb-3">
          <label for="" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
          />
          <small id="emailHelpId" class="form-text text-muted"
            >Type your email</small
          >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit

      </button>
      

    </form>
  </div>    
</template>