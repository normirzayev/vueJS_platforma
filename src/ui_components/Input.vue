<template>
  <div class="input-group">
    <div class="input-group-text">
      <i :class="icon"> </i>
    </div>
    <input :type="type" class="form-control" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    icon: String,
    type: String,
    placeholder: String
  }
}
</script>