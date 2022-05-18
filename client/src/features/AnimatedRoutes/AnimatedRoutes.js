import React from "react";
import { 
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import App from '../../App';
import Sell from "../../routes/Sell";
import Search from "../../routes/Search";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
    return (
            <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<App />} />
                <Route path="sell" element={<Sell />} />
                <Route path="search" element={<Search />} />
            </Routes>
            </AnimatePresence>
    )
}

export default AnimatedRoutes;