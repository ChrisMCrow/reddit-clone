import React from 'react';
import Feed from './Feed';
import Sidebar from './Sidebar';

function MainContent() {
  return(
    <div className='row main-body'>
      <style jsx>{`
        .main-body {
          min-height: 100vh;
          background-color: #dae0e6;
          padding: 50px 100px;
        }
      `}</style>
      <div className='col-md-9'>
        <Feed />
      </div>
      <div className='col-md-3'>
        <Sidebar />
      </div>
    </div>
  )
}

export default MainContent;