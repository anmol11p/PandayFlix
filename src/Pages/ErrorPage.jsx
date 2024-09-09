import React, { memo } from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = memo(() => {
  const error = useRouteError();
  const navigate=useNavigate()   
const handleGoBack=()=>{
navigate(-1);
}
  if (error.status === 404) {
    return (
      <section className="h-screen w-screen flex flex-col justify-center items-center bg-black text-white">
        <video
          src="https://cdn.dribbble.com/userupload/15144569/file/large-e48730ae7dae70ce0e8ec1517a2c48a6.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 text-center ">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg mb-8">The page you are looking for does not exist.</p>
          <span className="flex gap-2 justify-center items-center flex-wrap">
            <button  className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300" onClick={handleGoBack}>Go back</button>
          <NavLink
            to="/"
            className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300"
          >
            Back to Home
          </NavLink>
          </span>
        </div>
      </section>
    );
  }

  return null;
});

export default ErrorPage;
