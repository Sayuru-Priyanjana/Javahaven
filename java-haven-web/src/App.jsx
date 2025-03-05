// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import NavBar from './components/Navbar/navbar';
import HeroHeader from './components/HeroHeader/HeroHeader';
import Intro from './components/Intro/intro';
import Services from './components/Services/Services';
import Offer from './components/Offer/Offer';
import Reserve from './components/reserve/reserve';
import Recomended from './components/Recomended/recomended';
import Menu from './components/Menu/menu';
import Review from './components/Review/review';
import Footer from './components/Footer/footer';
import SignIn from './components/Signin/Signin';
import SignUp from './components/Signin/Signup';
import ViewAllCoffees from './components/ViewAllCoffiee/ViewAllCoffee';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

// Alert Context
export const AlertContext = React.createContext();

const AlertProvider = ({ children }) => {
  const showAlert = (message, type = 'info') => {
    toast[type](message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      <ToastContainer theme="colored" />
      {children}
    </AlertContext.Provider>
  );
};

function Layout() {
  const location = useLocation();
  const hideNavAndFooter = ['/signin', '/signup'].includes(location.pathname);

  return (
    <AlertProvider>
      <AnimatePresence mode='wait'>
        <div className="app-layout">
          {!hideNavAndFooter && <NavBar />}
          
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="main-content"
          >
            <ScrollToTop />
            <Routes>
              <Route path="/" element={
                <>
                  <HeroHeader />
                  <Intro />
                  <Services />
                  <Offer />
                  <Reserve />
                  <Recomended />
                  <ViewAllCoffees />
                  <Menu />
                  <Review />
                </>
              }/>
              <Route path="/intro" element={<Intro />} />
              <Route path="/services" element={<Services />} />
              <Route path="/offer" element={<Offer />} />
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/recommended" element={<Recomended />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/review" element={<Review />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/viewall" element={<ViewAllCoffees />} />
            </Routes>
          </motion.main>

          {!hideNavAndFooter && <Footer />}
        </div>
      </AnimatePresence>
      
      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </AlertProvider>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;