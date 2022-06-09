import { 
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../routes/home/Home";
import Sell from "../routes/sell/Sell";
import Search from "../routes/search/Search";
import Schemes from "../routes/schemes/Schemes";
import Dragons from "../routes/dragons/Dragons";
import DragonDisplay from "../components/dragon-display/DragonDisplay";
import SchemeDisplay from "../components/scheme-display/SchemeDisplay";

function AnimatedRoutes() {
    const location = useLocation();
    return (
            <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="sell" element={<Sell />} />
                <Route path="search" element={<Search />} />
                <Route path="schemes" element={<Schemes />} />
                <Route path="dragons" element={<Dragons />} />
                <Route path="dragons/:id" element={<DragonDisplay />}/>
                <Route path="schemes/:id" element={<SchemeDisplay />}/>
            </Routes>
            </AnimatePresence>
    )
}

export default AnimatedRoutes;