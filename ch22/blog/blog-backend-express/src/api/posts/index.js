import express from 'express';
import * as postsCtrl from './posts.ctrl';

const posts = express.Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

posts
  .route('/:id')
  .all(postsCtrl.checkObjectId)
  .get(postsCtrl.read)
  .delete(postsCtrl.remove)
  .patch(postsCtrl.update);

export default posts;
