import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers, GET_POST, GET_USERS } from '../modules/sample';

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log(e);
      }
    };

    fn();
  }, [getPost, getUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

const mapStateToProps = ({ sample, loading }) => ({
  post: sample.post,
  users: sample.users,
  loadingPost: loading[GET_POST],
  loadingUsers: loading[GET_USERS],
});

const mapDispatchToProps = {
  getPost,
  getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SampleContainer);
