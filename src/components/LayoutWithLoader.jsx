import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutWithLoader = () => {
  const location = useLocation();
  const [loadingKey, setLoadingKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLoadingKey(prev => prev + 1);
    setIsLoading(true);
  }, [location.pathname]);

  return (
    <>
      <LoadingScreen key={loadingKey} onFinish={() => setIsLoading(false)} />
      <Navbar />
      <Outlet context={{ isLoading }} />
      <Footer />
    </>
  );
};

export default LayoutWithLoader;
