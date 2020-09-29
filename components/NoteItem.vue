<template>
  <div>
    <h2
      class="text-over"
      style="text-align: left;"
    >
      {{ title }}
    </h2>
    <div style="text-align: left; white-space: nowrap">
      <img
        :src="img"
        style="width: 300px; display: inline-block;"
      >
      <div
        style="display: inline-block; vertical-align: top; max-width: 800px; white-space: normal"
      >
        <p
          style="text-align: left;"
          v-html="description"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-over {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
