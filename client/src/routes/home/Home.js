import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllDragons, fetchDragons } from '../../features/Dragons';
import Loader from '../../components/loader/Loader';
import ListPreviewBox from '../../components/list-preview-box/ListPreviewBox';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const dragons = useSelector(selectAllDragons);
  const dragonStatus = useSelector(state => state.dragons.status);
  const error = useSelector(state => state.dragons.error)

  useEffect(() => {
    if (dragonStatus === "idle") {
      dispatch(fetchDragons())
    }
  }, [dragonStatus, dispatch])

  let content;

  if (dragonStatus === 'loading') {
    content = <Loader />
  } else if (dragonStatus === 'succeeded') {
    let trim = dragons.dragons.slice(0, 4);
    content = trim.map(drag => (
      <ListPreviewBox key={drag.id} id={drag.id}/>
    ))
  } else if (dragonStatus === 'failed') {
    content = <div>{error}</div>
  }


  return (
    <motion.div id="app-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h2 className='main-title'>Recently added dragons:</h2>
      <div className='recent-dragons'>
      {content ? content : <div className="no-schemes"><p>There are no dragons to show.</p></div>}
      </div>
      <Link to="/dragons">show all</Link>

      <h2 className='main-title'>Recently added schemes:</h2>
      <div className="recent-dragons">
      {content ? content : <div className="no-schemes"><p>There are no dragons to show.</p></div>}
      </div>
      <Link to="/schemes">show all</Link>
    </motion.div>
  );
}

export default Home;