import React from 'react';

//step 2 for passing props for Child to consume!!!!!!
const CommentDetail = props => {
  return (

    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.avatar}/>
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>{props.timeAgo}</span>
        </div>
        <div className='text'>{props.commentText}</div>
      </div>
    </div>

  );
};
//can add a bit more JSX to show wrapping outline idea
//but the purpose of PROPs is to create resuable Components

export default CommentDetail;
