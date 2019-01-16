import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

//naive approach
const App = () => {
  return (
    <div className='ui container comments'>


      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={faker.image.avatar()}/>
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Malind
          </a>
          <div className='metadata'>
            <span className='date'>Today at 2:45pm</span>
          </div>
          <div className='text'>Nice blog article</div>
        </div>
      </div>

      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={faker.image.avatar()}/>
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Malind
          </a>
          <div className='metadata'>
            <span className='date'>Today at 2:45pm</span>
          </div>
          <div className='text'>Nice blog article</div>
        </div>
      </div>
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
