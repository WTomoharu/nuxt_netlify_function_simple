const getPage = require('./getPage.js')
const url = 'https://note.com/info/rss'

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: await getPage(url)
  }
}