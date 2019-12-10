import React from 'react';
import { useLocation, useHistory } from "react-router-dom";

const WithRouterSample = ({ match }) => {
  const location = useLocation();
  const history = useHistory();

  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push('/')}>홈으로</button>
    </div>
  );
};

export default WithRouterSample;
// export default withRouter(WithRouterSample);
