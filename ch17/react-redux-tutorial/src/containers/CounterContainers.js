import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';

import Counter from '../components/Counter';

const CounterContainers = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = state => ({
  number: state.counter.number,
});

// const mapDispatchToProps = dispatch => ({
//   increase() {
//     dispatch(increase());
//   },
//   decrease() {
//     dispatch(decrease());
//   },
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ increase, decrease }, dispatch);

// mapDispatchToProps 대신 액션 생성 함수를 담은 객체를 인자로 사용
// connect 함수가 내부적으로 bindActionCreators 처리
export default connect(
  mapStateToProps,
  { increase, decrease },
)(CounterContainers);
