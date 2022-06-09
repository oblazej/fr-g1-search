import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteColor } from "../../features/SelectedColors";

function SelectedColor(props) {
    const dispatch = useDispatch();

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={[props.color, "selected-color-div"].join(" ")}
            onClick={(e) =>
                dispatch(deleteColor({ color: props.colorID, colorOrder: props.colorOrder }))
            }>
            {props.color}
        </motion.div>
    );
}

export default SelectedColor;