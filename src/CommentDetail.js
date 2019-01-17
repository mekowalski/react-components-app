import React from 'react';
import faker from 'faker';

//step 2 for passing props for Child to consume!!!!!!
const CommentDetail = props => {
  console.log(props)
  return (

    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={faker.image.avatar()}/>
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>Today at 2:45pm</span>
        </div>
        <div className='text'>Nice blog article</div>
      </div>
    </div>
  );
};

export default CommentDetail;
