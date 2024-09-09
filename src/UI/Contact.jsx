//Handle contact form by the help of React-Router

import React from "react";
import { Form } from "react-router-dom";


export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const formData = Object.fromEntries(res); //get array into object
    console.log(formData);
        return null;
  } catch (error) {
    console.error(error);
  }
};
const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-wrap my-10">
      <Form
        method="POST"
        action="/contact"
        className="flex flex-col bg-white shadow-lg p-5 rounded-md"
      >
        <span className="flex flex-col">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <h2> get in touch with us,we're here to help you</h2>
        </span>
        <label htmlFor="fullname" className="grid my-2">
          FullName
          <input
            type="text"
            className="p-1 rounded-md my-1 bg-gray-300"
            name="fullname"
            required
          />
        </label>
        <label htmlFor="Email" className="grid my-2">
          Email Address
          <input
            type="email"
            className="p-1 rounded-md my-1 bg-gray-300"
            name="email"
            required
          />
        </label>
        <label htmlFor="msg" className="grid">
          Message
          <textarea
            className="p-1 rounded-md my-1 bg-gray-300"
            placeholder="Enter Your Message !! "
            name="msg"
          ></textarea>
        </label>
        <button className="bg-red-600 py-1 my-2 text-white rounded-md hover:bg-red-800">
          send message
        </button>
      </Form>
    </div>
  );
};

export default Contact;
