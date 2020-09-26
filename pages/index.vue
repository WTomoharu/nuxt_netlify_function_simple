<template>
  <v-layout>
    <v-flex class="text-center">
      <h1>{{ timeText }}</h1>
      <h1>{{ xmlText }}</h1>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData (context) {
    const timeUrl = 'https://friendly-yalow-4a2e2c.netlify.app/.netlify/functions/hello'
    const timeText = await axios.get(timeUrl)
      .then((res) => { return res.data })
      .catch(() => { return '' })
    const xmlUrl = 'https://friendly-yalow-4a2e2c.netlify.app/.netlify/functions/note'
    const xmlText = await axios.get(xmlUrl)
      .then((res) => { return res.data })
      .catch(() => { return '' })
    return { timeText, xmlText }
  }
}
</script>
