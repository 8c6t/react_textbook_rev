let postId = 1;

const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

exports.write = (req, res) => {
  const { title, body } = req.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);

  res.json(post);
};

exports.list = (req, res) => {
  res.json(posts);
};

exports.read = (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    return res.status(404).json({
      message: '포스트가 존재하지 않습니다',
    });
  }

  res.json(post);
};

exports.remove = (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    return res.status(404).json({
      message: '포스트가 존재하지 않습니다',
    });
  }
  posts.splice(index, 1);

  res.status(204).send();
};

exports.replace = (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    return res.status(404).json({
      message: '포스트가 존재하지 않습니다',
    });
  }

  posts[index] = {
    id,
    ...req.body,
  };

  res.json(posts[index]);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    return res.status(404).json({
      message: '포스트가 존재하지 않습니다',
    });
  }

  posts[index] = {
    ...posts[index],
    ...req.body,
  };

  res.json(posts[index]);
};
