<template>
  <form class="row row-cols-lg-auto g-3 align-items-center p-2 w-50 mx-auto my-5 border rounded-3" @submit="handleSubmit">
    <div class="col-12">
      <Input :icon="`fa-regular fa-envelope`" :type="'text'" :placeholder="'UserName'" v-model="email" />
    </div>
    <div class="col-12">
      <Input :icon="`fa-solid fa-lock`" v-model="password" :type="'password'" :placeholder="'Email'" />
    </div>
    <div class="col-12 d-flex justify-content-end ">
      <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
      <button class="btn btn-primary" type="submit" :disabled="isLoading">send </button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
        .then(userData => {
          console.log('user', userData);
        })
        .catch(err => {
          console.log('errors', err);
        })
    }
  }
}
</script>
<style></style>