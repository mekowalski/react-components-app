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
        avatar={faker.image.avatar()} //reference to a javascript variable
      />
      <CommentDetail
        author='Ryan'
        timeAgo='Today at 4:00AM'
        commentText='I am learning so much React'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Kristopher'
        timeAgo='Yesterday at 11:15PM'
        commentText='What the heck is React?'
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
