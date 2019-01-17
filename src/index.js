import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail author='Malind' /> //key='value' pair
      <CommentDetail author='Ryan' />
      <CommentDetail author='Kristopher' />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
