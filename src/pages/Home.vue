<template>
  <div>
    <div>
    </div>
    <div v-for="item in $store.state.data" class="border m-2 p-3 ">
      <h2> name: {{ item.name }} </h2>
      <div class="d-flex gap-2 align-items-center">
        <button class="btn btn-danger" @click="handleMinus(item.id)"> minus </button>
        <h1>Count: {{ item.soni }}</h1>
        <button class="btn btn-success" @click="handelPlus(item.id)"> plus </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handelPlus(id) {
      this.$store.commit("plus", id)
    },
    handleMinus(id) {
      this.$store.commit("minus", id)
    },
  }
}
</script>
<style></style>