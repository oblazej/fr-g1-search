import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import colors from "../../constants/colors";
import { deleteColor } from "../../features/SelectedColors";

function SelectedRange(props) {
    const dispatch = useDispatch();
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="selected-range"
            onClick={(e) =>
                dispatch(deleteColor({ color: props.range, colorOrder: props.colorOrder }))
            }>
            <div className={[colors[props.rangeIDs[0]][1], "selected-range-first"].join(" ")}>{colors[props.rangeIDs[0]][1]}</div>
            <div className={[colors[props.rangeIDs[1]][1], "selected-range-last"].join(" ")}>{colors[props.rangeIDs[1]][1]}</div>
        </motion.div>
    );
}

export default SelectedRange;

