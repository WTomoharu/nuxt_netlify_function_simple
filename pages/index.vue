<template>
  <v-layout>
    <v-flex class="text-center">
      <h1>{{ timeText }}</h1>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData (context) {
    const url = 'https://friendly-yalow-4a2e2c.netlify.app/.netlify/functions/hello'
    const timeText = await axios.get(url)
      .then((res) => { return res.data })
      .catch(() => { return '' })
    return { timeText }
  }
}
</script>
