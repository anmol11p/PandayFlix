import { NavLink} from "react-router-dom";

const Home = () => {
 
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-black my-5 mx-4 lg:mx-16 text-white py-10 rounded-lg shadow-lg">
      {/* Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-10 lg:w-1/2">
        <span className="text-sm lg:text-lg mb-2">
          Explore the latest in movie industries
        </span>
        <span className="text-2xl lg:text-4xl font-bold mb-4">
          Unlimited Movies, TV Shows, & More.
        </span>
        <span className="text-sm lg:text-lg mb-4">
          Discover the top best Movies and Dramas with catchy subtitles — your ultimate guide to must-watch content.
        </span>
        <NavLink to="/movie">
          <button className="bg-red-500 hover:bg-white hover:text-black font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            Explore Now
          </button>
        </NavLink>
      </div>

      {/* Image Section */}
      <div className="mt-6 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src="https://www.movieposters.com/cdn/shop/files/scan_78cface5-e199-4a21-b714-4c1a6d2b20ca_480x.progressive.jpg?v=1718312413"
          alt="Movie Poster"
          className="rounded-lg w-full max-w-sm lg:max-w-md shadow-md p-4"
        />
      </div>
    </div>
  );
};

export default Home;
