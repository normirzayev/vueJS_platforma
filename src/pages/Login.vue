<template>
  <form class="row row-cols-lg-auto g-3 align-items-center p-2 w-50 mx-auto my-5 border rounded-3" @click="handleSubmit">
    <div class="col-12">
      <Input :icon="`fa-solid fa-user`" :type="'text'" :placeholder="'UserName'" />
    </div>
    <div class="col-12">
      <Input :icon="`fa-regular fa-envelope`" :type="'email'" :placeholder="'Email'" />
    </div>
    <div class="col-12 d-flex justify-content-end ">
      <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
      <Button :label="'send'" :type="'submit'" :disabled="isLoading" class="btn btn-primary"></Button>
    </div>
  </form>
</template>
<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$store.commit('setLoading')
    }
  }

}
</script>
<style></style>