import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllSchemes, fetchSchemes } from '../../features/Schemes';
import { motion } from "framer-motion";
import Loader from '../../components/loader/Loader';
import ListPreviewBox from '../../components/list-preview-box/ListPreviewBox';
import "./Schemes.css";

function Schemes() {
  const dispatch = useDispatch();
  const schemes = useSelector(selectAllSchemes);
  const schemesStatus = useSelector(state => state.schemes.status);
  const error = useSelector(state => state.schemes.error)

  useEffect(() => {
    if (schemesStatus === "idle") {
      dispatch(fetchSchemes())
    }
  }, [schemesStatus, dispatch])

  let content;

  if (schemesStatus === 'loading') {
    content = <Loader />
  } else if (schemesStatus === 'succeeded') {
    let trim = schemes.schemes.slice(0, 12);
    content = trim.map(drag => (
      <ListPreviewBox type="schemes" key={drag.id} id={drag.id} />
    ))
  } else if (schemesStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <motion.div id="dragons-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h2 className="search-title">All schemes</h2>
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

export default Schemes;