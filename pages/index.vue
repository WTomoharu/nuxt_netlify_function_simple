<template>
  <v-layout>
    <v-flex class="text-center">
      <h1>{{ timeText }}</h1>
      <!-- <h1>{{ xmlText }}</h1> -->
      <NoteItem
        v-for="item in noteItems"
        :key="item.link"
        :data="item"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import xml2js from 'xml2js'

import NoteItem from '~/components/NoteItem.vue'

export default {
  components: {
    NoteItem
  },
  async asyncData (context) {
    const timeUrl = 'https://friendly-yalow-4a2e2c.netlify.app/.netlify/functions/hello'
    const timeText = await axios.get(timeUrl)
      .then((res) => { return res.data })
      .catch(() => { return '' })

    const xmlUrl = 'https://friendly-yalow-4a2e2c.netlify.app/.netlify/functions/note'
    const xmlText = await axios.get(xmlUrl)
      .then((res) => { return res.data })
      .catch(() => { return '' })

    const parser = new xml2js.Parser({
      async: false,
      explicitArray: false
    })

    let xmlObj = null
    parser.parseString(xmlText, (_, json) => {
      xmlObj = json
    })

    const noteItems = xmlObj ? xmlObj.rss.channel.item.map((v) => {
      return {
        title: v.title,
        img: v['media:thumbnail'],
        link: v.link,
        description: v.description
      }
    }).slice(5) : []

    return { timeText, xmlText, noteItems }
  }
}
</script>
