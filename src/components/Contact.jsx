import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <p className="text-xl mb-4">
        📧 Email: <a href="mailto:manovarmaofficial@gmail.com" className="text-blue-400 hover:text-blue-300">manovarmaofficial@gmail.com</a>
      </p>

      <p className="text-xl">
        📞 Phone: <span className="text-green-400">+49 17665119010</span>
      </p>
    </div>
  );
};

export default Contact;
