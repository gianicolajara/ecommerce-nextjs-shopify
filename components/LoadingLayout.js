import Router from "next/router";
import { useState } from "react";
import { ImSpinner10 } from "react-icons/im";
import P from "./P";

const loadingInitial = false;

const LoadingLayout = ({ children }) => {
  const [loading, setLoading] = useState(loadingInitial);

  Router.onRouteChangeStart = () => {
    setLoading(true);
    document.body.style.overflowY = "hidden";
  };

  Router.onRouteChangeComplete = () => {
    setLoading(false);
    document.body.style.overflowY = "auto";
  };

  Router.onRouteChangeError = () => {
    setLoading(false);
  };

  return (
    <div>
      <div
        className={`w-screen h-screen sticky top-0 left-0 bg-[rgba(0,0,0,0.8)] z-[9999999999999]  justify-center items-center ${
          loading ? "z-[99999] flex" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <ImSpinner10 size={50} className="text-white animate-spin" />
          <P>Wait a Moment...</P>
        </div>
      </div>
      {children}
    </div>
  );
};

export default LoadingLayout;
