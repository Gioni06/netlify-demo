exports.handler = async function (event, context) {
  const d = Date.now()
  const currentDate = new Date(d)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World", date: currentDate.toUTCString() }),
  };
}
