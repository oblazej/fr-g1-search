import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import PreviewBox from "../../components/preview-box/PreviewBox";
import SellForm from '../../components/sell-form/SellForm';

function Sell() {
    const soldDragon = useSelector((state) => state.soldDragon.value.img);
    console.log(soldDragon)
    return (
      <motion.div id="search-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h2 className="search-title">Sell a dragon</h2>
      <div className="flexit">
        <PreviewBox title="Preview" dragonImage={soldDragon}/>
        <SellForm />
      </div>
    </motion.div>
    );
  }

  export default Sell;