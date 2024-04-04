// serverless function to handle comment submissions and WebSocket connections
/*
const { ServerApiVersion } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const WebSocket = require('ws');
const Ably = require("ably/callbacks");

exports.handler = async (event, context) => {
  const uri = process.env.MONGO_URI;
  var ably = new Ably.Realtime(process.env.ABLY_API_KEY);
  var channel = ably.channels.get('com');
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    const db = client.db('ac12p');
    const collection = db.collection('comments');
    // parse incoming data
    const { codeId, content, uEmail, uName } = JSON.parse(event.body);
    // insert comment into database
    const result = await collection.insertOne({
      cmt: {
        codeId: `${codeId}`,
        content: `${content}`,
        uEmail: `${uEmail}`,
        uName: `${uName}`,
      },
    });
    console.log(`Comment ${result.insertedId} added to database`);
    channel.publish('comment','added');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Comment added successfully' }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: `${JSON.stringify({ message: 'Error adding comment' })}`,
    };
  } finally {
    await client.close();
  }
};
*/