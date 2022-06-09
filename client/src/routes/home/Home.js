import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllDragons, fetchDragons } from '../../features/Dragons';
import { selectAllSchemes, fetchSchemes } from '../../features/Schemes';
import Loader from '../../components/loader/Loader';
import ListPreviewBox from '../../components/list-preview-box/ListPreviewBox';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const dragons = useSelector(selectAllDragons);
  const dragonStatus = useSelector(state => state.dragons.status);
  const dragonError = useSelector(state => state.dragons.error);
  const schemes = useSelector(selectAllSchemes);
  const schemesStatus = useSelector(state => state.schemes.status);
  const schemesError = useSelector(state => state.schemes.error);

  useEffect(() => {
    if (dragonStatus === "idle") {
      dispatch(fetchDragons())
    }
    if (schemesStatus === "idle") {
      dispatch(fetchSchemes())
    }
  }, [schemesStatus, dispatch])

  let dragonsList;
  let schemesList;

  if (dragonStatus === 'loading') {
    dragonsList = <Loader />
  } else if (dragonStatus === 'succeeded') {
    let trim = dragons.dragons.slice(0, 4);
    dragonsList = trim.map(drag => (
      <ListPreviewBox type="dragons" key={drag.id} id={drag.id}/>
    ))
  } else if (dragonStatus === 'failed') {
    dragonsList = <div>{dragonError}</div>
  }

  if (schemesList === 'loading') {
    schemesList = <Loader />
  } else if (schemesStatus === 'succeeded') {
    let trim = schemes.schemes.slice(0, 4);
    schemesList = trim.map(drag => (
      <ListPreviewBox type="schemes" key={drag.id} id={drag.id}/>
    ))
  } else if (schemesStatus === 'failed') {
    schemesList = <div>{schemesError}</div>
  }

  return (
    <motion.div id="app-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h2 className='main-title'>Recently added dragons:</h2>
      <div className='recent-dragons'>
      {dragonsList ? dragonsList : <div className="no-schemes"><p>There are no dragons to show.</p></div>}
      </div>
      <Link to="/dragons">show all</Link>

      <h2 className='main-title'>Recently added schemes:</h2>
      <div className="recent-dragons">
      {schemesList ? schemesList : <div className="no-schemes"><p>There are no schemes to show.</p></div>}
      </div>
      <Link to="/schemes">show all</Link>
    </motion.div>
  );
}

export default Home;