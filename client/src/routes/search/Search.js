import { useState } from "react";
import { motion } from "framer-motion";
import PreviewBox from '../../components/preview-box/PreviewBox';
import SearchForm from '../../components/search-form/SearchForm';
import "./Search.css";

function Search() {
  const [previewColors, setPreviewColors] = useState({primaryColor: "", secondaryColor: "", tertiaryColor: "", element: ""});

  return (
    <motion.div id="search-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h2 className="search-title">Add a color scheme</h2>
      <div className="flexit">
        <PreviewBox title="Preview" primaryColor={previewColors.primaryColor} secondaryColor={previewColors.secondaryColor} tertiaryColor={previewColors.tertiaryColor} element={previewColors.element}/>
        <SearchForm previewHandler={setPreviewColors}/>
      </div>
    </motion.div>
  );
}


export default Search;