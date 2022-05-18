import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div id="app-div"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <h2 className='main-title'>Recently added dragons:</h2>
      <div className='bordered-main'>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      </div>
      <p>show all</p>

      <h2 className='main-title'>Recently added schemes:</h2>
      <div className='bordered-main'>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      </div>
      <p>show all</p>
    </motion.div>
  );
}

export default App;
