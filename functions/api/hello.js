exports.handler = async (event, context) => {
  const timeText = new Date().toLocaleString()
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: `Hello, World ${timeText}`
  }
}