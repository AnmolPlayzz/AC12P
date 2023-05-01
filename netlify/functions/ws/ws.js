const WebSocket = require('ws');

exports.handler = async (event, context) => {
  const wss = new WebSocket.Server({ noServer: true });

  context.callbackWaitsForEmptyEventLoop = false;

  wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Sec-WebSocket-Accept': event.headers['sec-websocket-key']
    },
    body: '',
    isBase64Encoded: false
  };
};
