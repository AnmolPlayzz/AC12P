// serverless function to handle comment submissions and WebSocket connections
const { ServerApiVersion } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const WebSocket = require('ws');

exports.handler = async (event, context) => {
  const uri = process.env.MONGO_URI;
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
    // push new comment over WebSocket connection

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
