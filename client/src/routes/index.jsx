import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ScrollToTop from '../hooks/useScrollToTop';
import { Home, About, Error, Blog, Newsletter, Gallery, Team } from "../pages";
import Layout from "../utils/Layout";


const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<Newsletter />} />
                    <Route path="/news/:topicSlug" element={<Blog />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRoutes;