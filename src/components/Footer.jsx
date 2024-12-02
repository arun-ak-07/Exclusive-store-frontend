import React from "react";
import { RxPaperPlane } from "react-icons/rx";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-5 justify-evenly text-white px-16 py-8 mt-0 md:mt-16">
        <div className="space-y-4 p-8">
          <h4 className="text-xl tracking-wider">Exclusive</h4>
          <p className="texl-xl">Subscribe</p>
          <p className="text-sm">Get 10% off your first order</p>
          <div className="border h-[44px] w-[217px] flex justify-center items-center">
            <input
              className="text-sm outline-none bg-black"
              type="text"
              placeholder="Enter your email"
            />
            <RxPaperPlane />
          </div>
        </div>

        <div className="space-y-4 p-8">
          <h4 className="text-xl">Support</h4>
          <p className="texl-xl">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        <div className="space-y-4 p-8">
          <h4 className="text-xl">Account</h4>
          <p className="texl-xl">My Account</p>
          <p className="text-sm">Login / Register</p>
          <p className="texl-xl">Cart</p>
          <p className="texl-xl">Wishlist</p>
          <p className="texl-xl">Shop</p>
        </div>

        <div className="space-y-4 p-8">
          <h4 className="text-xl">Quick Link</h4>
          <p className="texl-xl">Privacy Policy</p>
          <p className="texl-xl">Terms Of Use</p>
          <p className="texl-xl">FAQ</p>
          <p className="texl-xl">Contact</p>
        </div>

        <div className="space-y-4 p-8">
          <h4 className="text-xl">Download App</h4>
          <p className="text-xs">Save $3 with App New User Only</p>
          <p className="text-sm">Get 10% off your first order</p>
          <div className="flex space-x-6">
          <FaFacebookF />
          <FiTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-sm flex justify-center items-center space-x-2 p-8">
        <FaRegCopyright />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
