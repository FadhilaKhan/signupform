import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Infinity Runner. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
