import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllDragons, fetchDragons } from '../../features/Dragons';
import { motion } from "framer-motion";

function Dragons() {

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
    content = <p>Loading</p>
  } else if (dragonStatus === 'succeeded') {
    content = dragons.dragons.map(drag => (
      <div key={drag.id}>{drag.id}</div>
    ))
  } else if (dragonStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <motion.div id="dragons-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h2 className="search-title">All dragons</h2>
      {content ? content : <div className="no-schemes"><p>There are no dragons to show.</p></div>}
    </motion.div>
  );
}

export default Dragons;