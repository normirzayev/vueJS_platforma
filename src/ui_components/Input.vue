<template>
  <div class="input-group">
    <div class="input-group-text">
      <i :class="icon"> </i>
    </div>
    <input :type="type" class="form-control" :placeholder="placeholder" @input="getInputValue" :value="modelValue">
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    icon: String,
    type: String,
    placeholder: String,
    modelValue: [String, Number]
  },
  methods: {
    getInputValue(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>