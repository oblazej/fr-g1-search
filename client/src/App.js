import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* todo: nice looking header and navbar */}
      <h2>Recently added dragons:</h2>
      <div className='bordered-main'>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      </div>
      <p>show all</p>

      <h2>Recently added schemes:</h2>
      <div className='bordered-main'>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      </div>
      <p>show all</p>
    </div>
  );
}

export default App;
