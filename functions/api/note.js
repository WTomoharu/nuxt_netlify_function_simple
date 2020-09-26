const axios = require('axios')
const url = 'https://note.com/info/rss'

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: await axios.get(url).then((res) => res.data ).catch(() => "")
  }
}