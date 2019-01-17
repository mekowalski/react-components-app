import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Malind'
        timeAgo='Today at 1:15PM'
        commentText='This was a good read'
      />
      <CommentDetail
        author='Ryan'
        timeAgo='Today at 4:00AM'
        commentText='I am learning so much React'
      />
      <CommentDetail
        author='Kristopher'
        timeAgo='Yesterday at 11:15PM'
        commentText='What the heck is React?'
      />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
