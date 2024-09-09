import { NavLink } from "react-router-dom";
import React from 'react'; 
import {
  Visa,
  MasterCard,
  Rupay,
  AmericanExpress,
} from "./../Pages/PaymentSVG";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto flex flex-col bg-gray-800 md:flex-row p-4 items-center justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Section 1 */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h2 className="text-xl font-bold mb-4">About MovieRatings</h2>
            <p className="mb-4">
              Your trusted source for authentic movie reviews and ratings.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <NavLink to="/visa" className="flex items-center gap-2 hover:underline">
                <Visa className="w-8 h-8" />
                <span>Visa</span>
              </NavLink>
              <NavLink to="https://www.rupay.co.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <Rupay className="w-8 h-8" />
                <span>Rupay</span>
              </NavLink>
              <NavLink to="/mastercard" className="flex items-center gap-2 hover:underline">
                <MasterCard className="w-8 h-8" />
                <span>MasterCard</span>
              </NavLink>
              <NavLink to="/americanexpress" className="flex items-center gap-2 hover:underline">
                <AmericanExpress className="w-8 h-8" />
                <span>American Express</span>
              </NavLink>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h2 className="text-xl font-bold mb-4">Movie Categories</h2>
            <ul className="space-y-2">
              <li>
                <NavLink to="/top-rated" className="hover:underline">
                  Top Rated Movies
                </NavLink>
              </li>
              <li>
                <NavLink to="/upcoming" className="hover:underline">
                  Upcoming Movies
                </NavLink>
              </li>
              <li>
                <NavLink to="/genres" className="hover:underline">
                  Movie Genres
                </NavLink>
              </li>
              <li>
                <NavLink to="/recent-releases" className="hover:underline">
                  Recent Releases
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h2 className="text-xl font-bold mb-4">Help & Support</h2>
            <ul className="space-y-2">
              <li>
                <NavLink to="/contact" className="hover:underline">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="hover:underline">
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" className="hover:underline">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy" className="hover:underline">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="md:w-1/4">
            <h2 className="text-xl font-bold mb-4">Subscribe for Updates</h2>
            <p className="mb-4">
              Get the latest movie ratings and reviews delivered straight to your inbox.
            </p>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
