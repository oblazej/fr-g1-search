import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Axios from "axios";
import colors from "../../constants/colors";
import elements from "../../constants/elements";
import PreviewBox from "../preview-box/PreviewBox";
import DragonDisplayColor from "./dragon-display-color/DragonDisplayColor";
import DragonDisplayText from "./dragon-display-text/DragonDisplayText";
import Loader from "../loader/Loader";

function DragonDisplay() {
    const { id } = useParams();

    const [dragonID, setDragonID] = useState(id);
    const [primaryColor, setPrimaryColor] = useState("");
    const [secondaryColor, setSecondaryColor] = useState("");
    const [tertiaryColor, setTertiaryColor] = useState("");
    const [element, setElement] = useState("");
    const [sex, setSex] = useState("");
    const [price, setPrice] = useState("");
    const [owner, setOwner] = useState("");
    const [img, setImg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:3001/dragons/${id}`)
            .then(function (response) {
                const dragon = response.data[0];
                setPrimaryColor(colors[dragon.primaryColor][1]);
                setSecondaryColor(colors[dragon.secondaryColor][1]);
                setTertiaryColor(colors[dragon.tertiaryColor][1]);
                setElement(elements[dragon.element - 1][1]);
                setSex(dragon.sex);
                setPrice(dragon.price);
                setOwner(dragon.owner);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // Axios.get(`http://localhost:3001/dragons/img/${id}`)
                // .then(function (response) {
                //     setImg(`https://www1.flightrising.com${response.data.img}`)
                // })
                // .catch(function (error) {
                //     // handle error
                //     console.log(error);
                // })
                // .then(function () {
                //     // always executed
                // });
            });
    }, [id, img]);

    return (
        <motion.div id="dragons-div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h2 className="search-title"> <a href={`https://www1.flightrising.com/dragon/${id}`}>#{dragonID}</a></h2>
            <div className="flexit">
                <PreviewBox primaryColor={primaryColor} secondaryColor={secondaryColor} tertiaryColor={tertiaryColor} element={element} />
                <div className="dragon-description">
                    <DragonDisplayColor color={primaryColor} description="primary color:" />
                    <DragonDisplayColor color={secondaryColor} description="secondary color:" />
                    <DragonDisplayColor color={tertiaryColor} description="tertiary color:" />
                    <DragonDisplayText text={element} description="element:" />
                    <DragonDisplayText text={sex} description="sex:" />
                    <DragonDisplayText text={price} description="price:" />
                    <DragonDisplayText text={owner} description="owner:" />
                </div>
            </div>
        </motion.div>
    );
}

export default DragonDisplay;