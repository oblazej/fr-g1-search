import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from "react-router-dom";
import Axios from 'axios';
import Loader from '../loader/Loader';

function DragonDisplay() {
    const { id } = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:3001/dragons/${id}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [id]);


    console.log(id)
    return (
        <motion.div id="dragons-div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
           
        </motion.div>
    );
}

export default DragonDisplay;