import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function Home() {
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
      <Link to="/dragons">show all</Link>

      <h2 className='main-title'>Recently added schemes:</h2>
      <div className='bordered-main'>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      <div className='bordered'></div>
      </div>
      <Link to="/schemes">show all</Link>
    </motion.div>
  );
}

export default Home;