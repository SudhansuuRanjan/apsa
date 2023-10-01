import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../hooks/useScrollToTop';
import { Loading } from '../components/Loader';
import Layout from '../utils/Layout';

// Use separate import statements for each lazy-loaded component
const Home = lazy(() => import('../pages/Home/HomePage'));
const About = lazy(() => import('../pages/About/AboutPage'));
const Error = lazy(() => import('../pages/Error/Error'));
const Blog = lazy(() => import('../pages/Newsletter/Blog'));
const Newsletter = lazy(() => import('../pages/Newsletter/Newsletter'));
const Gallery = lazy(() => import('../pages/Gallery/Gallery'));
const Team = lazy(() => import('../pages/Team/Team'));
const Activities = lazy(() => import('../pages/Activities/Activities'));
const Committee = lazy(() => import('../pages/Comittee/Committee'));
const Academics = lazy(() => import('../pages/Academics/Academics'));
const Publications = lazy(() => import('../pages/Publications/Publications'));
const StudentCell = lazy(() => import('../pages/StudentCell/StudentCell'));

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Suspense fallback={<Loader />} ><Home /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<Loader />} ><About /></Suspense>} />
          <Route path="/blogs" element={<Suspense fallback={<Loader />} ><Newsletter /></Suspense>} />
          <Route path="/blog/:topicSlug" element={<Suspense fallback={<Loader />} ><Blog /></Suspense>} />
          <Route path="/gallery" element={<Suspense fallback={<Loader />} ><Gallery /></Suspense>} />
          <Route path="/team" element={<Suspense fallback={<Loader />} ><Team /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<Loader />} ><Error /></Suspense>} />
          <Route path="/activities" element={<Suspense fallback={<Loader />} ><Activities /></Suspense>} />
          <Route path="/committee" element={<Suspense fallback={<Loader />} ><Committee /></Suspense>} />
          <Route path="/academics" element={<Suspense fallback={<Loader />} ><Academics /></Suspense>} />
          <Route path="/publications" element={<Suspense fallback={<Loader />} ><Publications /></Suspense>} />
          <Route path="/student-cell" element={<Suspense fallback={<Loader />} ><StudentCell /></Suspense>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;


const Loader = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center absolute'>
            <Loading/>
        </div>
    )
}


