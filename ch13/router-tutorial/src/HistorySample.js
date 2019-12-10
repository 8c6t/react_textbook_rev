import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

const HistorySample = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  const handleGoHome = () => {
    history.push('/');
  };

  useEffect(() => {
    const unblock = history.block('정말 떠나실건가요?');
    return () => {
      if (unblock) { unblock(); }
    }
  }, [history]);

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
