import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { isValidObjectId } = mongoose;

export const checkObjectId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).send();
  }
  next();
};

export const write = async (req, res) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  });

  const result = schema.validate(req.body);

  if (result.error) {
    return res.status(400).send();
  }

  const { title, body, tags } = req.body;
  const post = new Post({ title, body, tags });

  try {
    await post.save();
    res.json(post);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const list = async (req, res) => {
  const page = parseInt(req.query.page || '1', 10);
  if (page < 1) {
    return res.status(400).send();
  }

  try {
    let posts = await Post.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    const postCount = await Post.countDocuments().exec();
    res.set('Last-Page', Math.ceil(postCount / 10));

    posts = posts
      .map((post) => post.toJSON())
      .map((post) => ({
        ...post,
        body:
          post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
      }));

    res.json(posts);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const read = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      return res.status(404).send();
    }
    res.json(post);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    await Post.findByIdAndDelete(id).exec();
    res.status(204).send();
  } catch (e) {
    res.status(500).send(e);
  }
};

export const update = async (req, res) => {
  const { id } = req.params;

  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error);
  }

  try {
    const post = await Post.findOneAndUpdate(id, req.body, {
      new: true,
    }).exec();

    if (!post) {
      return res.status(404).send();
    }

    res.json(post);
  } catch (e) {
    res.status(500).send(e);
  }
};
