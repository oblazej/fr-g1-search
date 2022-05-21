import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteColor } from "../../features/SelectedColors";

function SelectedColor(props) {
    const dispatch = useDispatch();
    const [colorID, setColorID] = useState(props.colorID);

    return (
        <motion.div 
        initial={{scale: 0}}
       animate={{scale: 1}}
        className={[props.color, "selected-color-div"].join(" ")}
            onClick={(e) =>
                dispatch(deleteColor({color: colorID, colorOrder: props.colorOrder}))
            }>
            {colorID} {props.color}
        </motion.div>
    );
}

export default SelectedColor;