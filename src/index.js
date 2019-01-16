import React from 'react';
import ReactDOM from 'react-dom';

//naive approach
const App = () => {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' />
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
