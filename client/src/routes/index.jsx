import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ScrollToTop from '../hooks/useScrollToTop';
import { Home, About,Error } from "../pages";
import Layout from "../utils/Layout";


const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRoutes;