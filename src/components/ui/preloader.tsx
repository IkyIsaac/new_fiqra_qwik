"use client";
import React from "react";
// import { useState, useEffect } from "react";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const Loader = () => {
    return (
      <>
        <div id="preloader">
          <div className="preloader">
            <span></span>
            <span></span>
          </div>
        </div>
      </>
    );
  };

  return <>{isLoading ? <Loader /> : <div>{children}</div>}</>;
}
