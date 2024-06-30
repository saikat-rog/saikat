import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-deepdark text-white p-4 md:p-28 flex flex-col items-center justify-center font-inter">
      <h1 className="text-6xl font-semibold mb-8 text-primarygreen">Contact</h1>
      
      <form className="max-w-lg w-full bg-lightdark rounded-sm shadow-lg p-8 mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-medium mb-2">Your Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:border-primarygreen bg-deepdark" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-medium mb-2">Your Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:border-primarygreen bg-deepdark" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-none rounded-md focus:outline-none focus:border-primarygreen bg-deepdark text-gray-400"></textarea>
        </div>

        <button type="submit" className="bg-primarygreen text-white py-2 px-4 rounded-sm hover:bg-opacity-80 transition duration-300">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
