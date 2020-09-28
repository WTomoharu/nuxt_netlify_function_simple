<template>
  <v-layout>
    <v-flex class="text-center">
      <h1>{{ timeText }}</h1>
      <!-- <h1>{{ xmlText }}</h1> -->
      <ul>
        <li
          v-for="item in xmlTitleItems"
          :key="item"
          style="text-align: left;"
        >
          {{ item }}
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import xml2js from 'xml2js'

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

    const parser = new xml2js.Parser({
      async: false,
      explicitArray: false
    })

    let xmlObj = null
    parser.parseString(xmlText, (_, json) => {
      xmlObj = json
    })

    const xmlTitleItems = xmlObj.rss.channel.item.map(v => v.title)

    return { timeText, xmlText, xmlTitleItems }
  }
}
</script>
