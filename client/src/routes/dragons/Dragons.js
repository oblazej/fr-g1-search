import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllDragons, fetchDragons } from '../../features/Dragons';
import { motion } from "framer-motion";
import Loader from '../../components/loader/Loader';
import ListPreviewBox from '../../components/list-preview-box/ListPreviewBox';
import "./Dragons.css";

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
    content = <Loader />
  } else if (dragonStatus === 'succeeded') {
    let trim = dragons.dragons.slice(0, 12);
    content = trim.map(drag => (
      <ListPreviewBox type="dragons" key={drag.id} id={drag.id} />
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
      <div className="dragons-list-div">      <button className="search-submit">&lt;	&lt;	</button>
        <div className="wrapper">
          <div className="all-dragons-list">
            {content ? content : <div className="no-schemes"><p>There are no dragons to show.</p></div>}
          </div>
        </div>
        <button className="search-submit">&gt;	&gt;	</button>
      </div>

    </motion.div>
  );
}

export default Dragons;