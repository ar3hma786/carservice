import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4"> {/* Changed background to grey */} 
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 text-center md:text-left"> {/* Center align on mobile */}
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm">Address: 123 Example St, City, Country</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          <p className="text-sm">Email: info@example.com</p>
        </div>
        <div className="col-span-1 text-center md:text-left"> {/* Center align on mobile */}
          <h3 className="text-xl font-bold mb-4">Lexolent</h3>
          <ul className="text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="col-span-1 text-center md:text-left"> {/* Center align on mobile */}
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4"> {/* Center align on mobile */}
            <a href="#" className="text-sm hover:underline">Facebook</a>
            <a href="#" className="text-sm hover:underline">Twitter</a>
            <a href="#" className="text-sm hover:underline">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">© 2024 Lexolent. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
