<template>
  <button :type="type"> {{ label }} </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String,
    type: String,
  }
}
</script>