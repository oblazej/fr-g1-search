import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Axios from "axios";
import elements from "../../constants/elements";
import colors from "../../constants/colors";
import SchemeDisplayColors from "./scheme-display-colors/SchemeDisplayColors";
import SchemeDisplayElements from "./scheme-display-elements/SchemeDIsplayElements";
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
    const [previewPrimary, setPreviewPrimary] = useState("");
    const [previewSecondary, setPreviewSecondary] = useState("");
    const [previewTertiary, setPreviewTertiary] = useState("");
    const [previewElement, setPreviewElement] =  useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [recentPrimary, setRecentPrimary] = useState("");
    const [recentSecondary, setRecentSecondary] = useState("");
    const [recentTertiary, setRecentTertiary] = useState("");
    const [recentElement, setRecentElement] = useState("");

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
                scheme.primaryColors.length > 0 ? setPreviewPrimary(colors[scheme.primaryColors[0]][1]) : setPreviewPrimary("Maize");
                scheme.primaryColors.length > 0 ? setRecentPrimary(colors[scheme.primaryColors[0]][1]) : setRecentPrimary("Maize");
                scheme.secondaryColors.length > 0 ? setPreviewSecondary(colors[scheme.secondaryColors[0]][1]) : setPreviewSecondary("Maize");
                scheme.secondaryColors.length > 0 ? setRecentSecondary(colors[scheme.secondaryColors[0]][1]) : setRecentSecondary("Maize");
                scheme.tertiaryColors.length > 0 ? setPreviewTertiary(colors[scheme.tertiaryColors[0]][1]) : setPreviewTertiary("Maize");
                scheme.tertiaryColors.length > 0 ? setRecentTertiary(colors[scheme.tertiaryColors[0]][1]) : setRecentTertiary("Maize");
                scheme.elements.length > 0 ? setPreviewElement(elements[scheme.elements[0] - 1][1]) : setPreviewElement("Light");
                scheme.elements.length > 0 ? setRecentElement(elements[scheme.elements[0] - 1][1]) : setRecentElement("Light");
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                setIsLoaded(true);
            });
    }, [id]);

    return (
        <motion.div id="dragons-div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h2 className="search-title">#{id}</h2>
            <div className="flexit">
                <PreviewBox title="Preview" primaryColor={previewPrimary} secondaryColor={previewSecondary} tertiaryColor={previewTertiary} element={previewElement}/>
                <div className="column">
                    <h2 className="scheme-name"><strong>{name}</strong> created by <strong>{creator}</strong></h2>
                    {isLoaded ? <>
                        <SchemeDisplayColors title="primary colors:" colors={primaryColors} setPrev={setPreviewPrimary} recentColor={recentPrimary} setRecentColor={setRecentPrimary}/>
                        <SchemeDisplayColors title="secondary colors:" colors={secondaryColors} setPrev={setPreviewSecondary} recentColor={recentSecondary} setRecentColor={setRecentSecondary}/>
                        <SchemeDisplayColors title="tertiary colors:" colors={tertiaryColors} setPrev={setPreviewTertiary} recentColor={recentTertiary} setRecentColor={setRecentTertiary}/>
                        <SchemeDisplayElements title="elements:" elements={schemeElements} setPrev={setPreviewElement} recentElement={recentElement} setRecentElement={setRecentElement}/>
                        </> : <Loader />}
                </div>
            </div>
        </motion.div>
    )
}

export default SchemeDisplay;