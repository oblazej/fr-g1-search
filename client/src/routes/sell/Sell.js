import React from 'react';
import { motion } from "framer-motion";
import PreviewBox from "../../components/preview-box/PreviewBox";
import SellForm from '../../components/sell-form/SellForm';

//should this section autofill?
function Sell() {
    return (
      <motion.div id="search-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h2 className="search-title">Sell a dragon</h2>
      <div className="flexit">
        <PreviewBox type="sell"/>
        <SellForm />
      </div>
    </motion.div>
    );
  }

  export default Sell;