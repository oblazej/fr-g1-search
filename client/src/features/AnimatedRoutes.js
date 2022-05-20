import React from "react";
import { 
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../routes/home/Home";
import Sell from "../routes/sell/Sell";
import Search from "../routes/search/Search";

function AnimatedRoutes() {
    const location = useLocation();
    return (
            <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="sell" element={<Sell />} />
                <Route path="search" element={<Search />} />
            </Routes>
            </AnimatePresence>
    )
}

export default AnimatedRoutes;