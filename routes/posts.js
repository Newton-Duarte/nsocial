const router = require('express').Router();
const Post = require('../models/Post');
const verify = require('./verifyToken');

// Create a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Read all the posts
router.get('/', verify, async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Read a specific post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Update a post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: {
        title: req.body.title,
        description: req.body.description
      }});
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Delete a post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;