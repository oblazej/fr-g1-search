import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteElement } from "../../features/SelectedElements";

function SelectedElement(props) {
    const dispatch = useDispatch();

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="selected-element-div"
            onClick={(e) =>
                dispatch(deleteElement(props.elementID))
            }>
            {props.element}
        </motion.div>
    );
}

export default SelectedElement;