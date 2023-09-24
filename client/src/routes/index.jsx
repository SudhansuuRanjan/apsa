import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ScrollToTop from '../hooks/useScrollToTop';
import { Home, About, Error, Blog, Newsletter, Gallery, Team, Activities, Committee } from "../pages";
import Layout from "../utils/Layout";


const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Team />} />
                    <Route path="/blogs" element={<Newsletter />} />
                    <Route path="/blog/:topicSlug" element={<Blog />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/committee" element={<Committee />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRoutes;