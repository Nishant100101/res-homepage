"use client";

import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { TiMinus, TiPlus } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <header className="text-xl z-[100] w-full justify-center pt-[30px] flex items-center sticky bg-opacity-90 top-0 left-0 bg-[#0f1212]">
      <nav className="relative w-[100vw] px-4 md:px-12 flex items-start justify-between h-[91px] bg-transparent border-b-[1.5px] border-[#272a2a] mx-auto my-0">
        <div className="flex items-center justify-between">
          <div className="w-[219px] h-fit">
            <Image
              src="/assets/img/logo/logo.png"
              width={219}
              height={50}
              alt="site-logo"
            />
          </div>

          <div className="flex w-fit h-10 items-center pl-[55px] ml-[65px] font-black space-x-3 border-l-2 border-[#272a2a] max-xl-1451:hidden">
            <div className="flex justify-center items-center rounded-full border-[1.5px]">
              <LiaPhoneVolumeSolid
                width={20}
                height={20}
                className="text-white m-2"
              />
            </div>
            <div className="items-center flex w-full">
              <a
                href="tel:+125895658"
                className="text-white text-xl hover:underline"
              >
                Hotline +125 (895) 658
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-start pt-4 h-full -mt-4 lg:hidden">
          <button
            className="text-white p-4 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <span className="text-2xl">&#10005;</span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
        </div>

        {isOpen && (
          <ul className="bg-white w-full left-0 absolute top-20 text-lg text-[#272a2a] shadow-lg">
            <li className="relative border-b border-[#e7e7e7]">
              <button
                className="flex justify-between items-center w-full p-4"
                onClick={() => toggleSubMenu("home")}
              >
                <span>Home</span>
                {activeMenu === "home" ? (
                  <TiMinus className="text-customGold" />
                ) : (
                  <TiPlus className="text-customGold" />
                )}
              </button>
              {/* Dropdown */}
              {activeMenu === "home" && (
                <ul className="bg-white border-t text-[#272a2a]">
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Home 01</a>
                  </li>
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Home 02</a>
                  </li>
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Home 03</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative border-b border-[#e7e7e7]">
              <button
                className="flex justify-between items-center w-full p-4"
                onClick={() => toggleSubMenu("pages")}
              >
                <span>Pages</span>
                {activeMenu === "pages" ? (
                  <TiMinus className="text-customGold" />
                ) : (
                  <TiPlus className="text-customGold" />
                )}
              </button>

              {activeMenu === "pages" && (
                <ul className="bg-white border-t text-[#272a2a]">
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">About</a>
                  </li>
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Price</a>
                  </li>
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Team</a>
                  </li>
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Services</a>
                  </li>
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Services Details</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative border-b border-[#e7e7e7]">
              <button
                className="flex justify-between items-center w-full p-4"
                onClick={() => toggleSubMenu("shop")}
              >
                <span>Shop</span>
                {activeMenu === "shop" ? (
                  <TiMinus className="text-customGold" />
                ) : (
                  <TiPlus className="text-customGold" />
                )}
              </button>

              {activeMenu === "shop" && (
                <ul className="bg-white border-t text-[#272a2a]">
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Product Page</a>
                  </li>
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Product Details</a>
                  </li>
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Cart</a>
                  </li>
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Checkout</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative border-b border-[#e7e7e7]">
              <button
                className="flex justify-between items-center w-full p-4"
                onClick={() => toggleSubMenu("blog")}
              >
                <span>Blog</span>
                {activeMenu === "blog" ? (
                  <TiMinus className="text-customGold" />
                ) : (
                  <TiPlus className="text-customGold" />
                )}
              </button>

              {activeMenu === "blog" && (
                <ul className="bg-white border-t text-[#272a2a]">
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Blog Grid</a>
                  </li>
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Blog Standard</a>
                  </li>
                  <li className="border-b pl-10 hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Blog Details</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="border-b border-[#e7e7e7]">
              <a href="#" className="w-full p-4 block">
                Contact
              </a>
            </li>
          </ul>
        )}

        <div
          className={`lg:flex max-lg:hidden w-full lg:w-auto lg:flex-grow items-center justify-between`}
        >
          <ul className="flex  flex-col lg:flex-row text-lg lg:w-[472px] lg:justify-between ml-auto items-center space-y-4 lg:space-y-0">
            <li className="relative group">
              <a href="#" className="text-customGold flex gap-1 items-center">
                Home <TiPlus />
              </a>

              <div className="group-hover:block hidden w-fit h-fit absolute pt-12 min-w-60 z-10 left-0">
                <ul className="bg-white text-[#272a2a] shadow-lg">
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Home 01</a>
                  </li>
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Home 02</a>
                  </li>
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Home 03</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <a href="#" className="text-white flex gap-1 items-center">
                Pages <TiPlus />
              </a>

              <div className="group-hover:block hidden w-fit h-fit absolute pt-12 min-w-60 z-10 left-0">
                <ul className="bg-white text-[#272a2a] shadow-lg">
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">About</a>
                  </li>
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Price</a>
                  </li>
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Team</a>
                  </li>
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Services</a>
                  </li>
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Services Details</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <a href="#" className="text-white flex gap-1 items-center">
                Shop <TiPlus />
              </a>

              <div className="group-hover:block hidden w-fit h-fit absolute pt-12 min-w-60 z-10 left-0">
                <ul className="bg-white text-[#272a2a] shadow-lg">
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Product Page</a>
                  </li>
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Product Details</a>
                  </li>
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Cart</a>
                  </li>
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Checkout</a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <a href="#" className="text-white flex gap-1 items-center">
                Blog <TiPlus />
              </a>

              <div className="group-hover:block hidden w-fit h-fit absolute pt-12 min-w-60 z-10 left-0">
                <ul className="bg-white text-[#272a2a] shadow-lg">
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Blog Grid</a>
                  </li>
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Blog Standard</a>
                  </li>
                  <li className="border-b hover:bg-slate-100 border-[#e7e7e7] p-4">
                    <a href="#">Blog Details</a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href="#" className="text-white flex">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex flex-col lg:flex-row items-center gap-5 space-x-6 lg:ml-10">
            <div className="relative flex gap-10">
              <span className="text-white cursor-pointer text-lg">
                <FaSearch />
              </span>

              <div className="text-white cursor-pointer text-lg relative max-xl-1451:hidden">
                <span className="absolute w-5 h-5 text-xs flex items-center justify-center rounded-full bg-customGold -top-4 -right-1">
                  0
                </span>
                <FaBasketShopping />
              </div>
            </div>

            <div className="flex h-[60px] py-[17px] px-[41px] text-white bg-customGold items-center">
              <span className="min-w-fit">BOOKING NOW</span>
              <span className="inline-flex ml-2 items-start mb-1">
                <i className="fas fa-chevron-right text-white text-[16px]"></i>
                <i className="fas fa-chevron-right -ml-[2px] text-white text-[16px]"></i>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
