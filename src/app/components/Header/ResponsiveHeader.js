
"use client";
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
const MobileHeader = dynamic(() => import('./MobileHeader'), { ssr: false });
const DesktopHeader = dynamic(() => import('./DesktopHeader'), { ssr: false });

const ResponsiveHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Initial check on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default ResponsiveHeader;
