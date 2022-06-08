import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from "react-router-dom";
import Axios from 'axios';
import colors from "../../constants/colors";
import elements from "../../constants/elements";
import PreviewBox from '../preview-box/PreviewBox';
import Loader from '../loader/Loader';

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
                // always executed
            });
        Axios.get(`http://localhost:3001/dragons/img/${id}`)
            .then(function (response) {
                setImg(`https://www1.flightrising.com${response.data.img}`)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [id, img]);

    return (
        <motion.div id="dragons-div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
                <PreviewBox dragonImage={img}/>
            <h2>#{dragonID}</h2>
            <div className={primaryColor}>{primaryColor}</div>
            <div className={secondaryColor}>{secondaryColor}</div>
            <div className={tertiaryColor}>{tertiaryColor}</div>
            <p>{element}</p>
            <p>{sex}</p>
            <p>{price}</p>
            <p>{owner}</p>
        </motion.div>
    );
}

export default DragonDisplay;