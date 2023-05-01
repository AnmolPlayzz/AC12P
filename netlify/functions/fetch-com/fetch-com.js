const { MongoClient, ServerApiVersion } = require('mongodb');
exports.handler = async (event, context) => {
  require('dotenv').config();

  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    const db = client.db('ac12p');
    const collection = db.collection('comments');

    // retrieve all comments from database
    const comments = await collection.find().toArray();
    console.log(`Retrieved ${comments.length} comments`);

    return {
      statusCode: 200,
      body: JSON.stringify(comments),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error retrieving comments' }),
    };
  } finally {
    await client.close();
  }
};
