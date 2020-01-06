const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// get api
router.get('/',async (req,res) => {
  const posts = await loadPostsCollections();
  res.send(await posts.find({}).toArray());
})

async function loadPostsCollections() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://amitkadam:9552015542@amitkadam-cm1du.mongodb.net/vue2020', {
    useNewUrlParser: true
  });
  console.log("done");
  return client.db('vue2020').collection('users');
}


module.exports = router;
