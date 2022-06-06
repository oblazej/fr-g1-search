import React from 'react';
import { motion } from "framer-motion";
import "./Schemes.css";

function Schemes() {
    return (
      <motion.div id="schemes-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h2 className="search-title">All schemes</h2>
      <div className='no-schemes'><p>There are no schemes to show.</p></div>
    </motion.div>
    );
  }

  export default Schemes;