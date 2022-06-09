import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Axios from "axios";
import colors from "../../constants/colors";
import elements from "../../constants/elements";
import SchemeDisplayColor from "./scheme-display-color/SchemeDisplayColor";
import PreviewBox from "../preview-box/PreviewBox";
import Loader from "../loader/Loader";

function SchemeDisplay() {
    const { id } = useParams();

    const [schemeID, setschemeID] = useState(id);
    const [name, setName] = useState("");
    const [creator, setCreator] = useState("");
    const [primaryColors, setPrimaryColors] = useState("");
    const [secondaryColors, setSecondaryColors] = useState("");
    const [tertiaryColors, setTertiaryColors] = useState("");
    const [schemeElements, setSchemeElements] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:3001/colorschemes/${id}`)
            .then(function (response) {
                const scheme = response.data[0];
                setName(scheme.name);
                setCreator(scheme.creator);
                setPrimaryColors(scheme.primaryColors.map((color) => colors[color][1]));
                setSecondaryColors(scheme.secondaryColors.map((color) => colors[color][1]));
                setTertiaryColors(scheme.tertiaryColors.map((color) => colors[color][1]));
                setSchemeElements(scheme.elements.map((element) => elements[element - 1][1]));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
             
            });
    }, [id]);

    return(
        <motion.div id="dragons-div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <h2 className="search-title">#{id}</h2>
            <p>{name}</p>
            <p>{creator}</p>
            <p>{secondaryColors}</p>
            <p>{tertiaryColors}</p>
            <p>{schemeElements}</p>
        </motion.div>
    )
}

export default SchemeDisplay;