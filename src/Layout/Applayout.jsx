import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";
const Applayout = () => {
  const navigation = useNavigation(); ///for loading state in react for all the pages ....


  if (navigation.state === "loading") {
    return <Loading />;
  }
  return (
    <>
      <Header />

      <Outlet />
      {/* An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.  */}
      <Footer />
    </>
  );
};

export default Applayout;
