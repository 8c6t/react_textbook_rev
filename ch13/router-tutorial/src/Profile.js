import React from 'react';
import { useParams, useRouteMatch } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";

const data = {
  hachicore: {
    name: '하치코어',
    description: 'react',
  },
  rokuthread: {
    name: '로쿠스레드',
    description: 'spring'
  }
}

const Profile = ({ match }) => {
  const { username } = useParams();
  const profile = data[username];
  const routeMatch = useRouteMatch({
    path: match.path
  });

  if (!profile) {
    return <div>존재하지 않는 사용자입니다</div>
  }

  return (
    <div>
      <h3>{username} ({profile.name})</h3>
      <p>{profile.description}</p>
      {routeMatch && <WithRouterSample match={routeMatch} />}
    </div>
  );
};

export default Profile;
