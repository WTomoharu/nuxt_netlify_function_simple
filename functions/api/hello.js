exports.handler = async (event, context) => {
  const timeText = new Date().toLocaleString()
  return {
    statusCode: 200,
    body: `Hello, World ${timeText}`
  }
}