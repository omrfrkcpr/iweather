import { Info } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev === 0 ? prev : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (count === 0) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Info size={32} color="#8fb2f5" />
      <h1
        className="text-product font-sans"
        style={{ height: "calc(100vh - 145px)" }}
      >
        Page Not Found
      </h1>
      <p>
        Within <strong>{count}</strong> seconds, you will be redirected to the
        home page!
      </p>
    </>
  );
};

export default NotFound;
