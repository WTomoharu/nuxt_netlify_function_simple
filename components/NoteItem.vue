<template>
  <div>
    <h2
      class="text-over"
      style="text-align: left;"
    >
      {{ data.title }}
    </h2>
    <div style="text-align: left; white-space: nowrap">
      <img
        :src="data.img"
        style="width: 300px; display: inline-block;"
      >
      <div
        style="display: inline-block; vertical-align: top; max-width: 800px; white-space: normal"
      >
        <p
          style="text-align: left;"
          v-html="data.description"
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
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
