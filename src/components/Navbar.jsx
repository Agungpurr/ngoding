import { useState, useEffect } from "react";
import {
  FaHome,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaUserFriends,
  FaImages,
} from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMenuOpen(true); // buka otomatis saat mobile
      } else {
        setMenuOpen(false); // tutup saat desktop
      }
    };

    handleResize(); // panggil langsung saat load pertama kali

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        // console.log("testing");
        setScroll(true);
        // setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-blue-600 text-xl md:text-2xl font-bold">
              Ngoding.
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12">
            <li>
              <a href="#home" className="text-blue-600 font-medium opacity-75">
                Beranda
              </a>
            </li>
            <li>
              <a href="#about" className="text-blue-600 font-medium opacity-75">
                Tentang kami
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-blue-600 font-medium opacity-75"
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#proyek"
                className="text-blue-600 font-medium opacity-75"
              >
                Proyek
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex social">
            <ul className="flex gap-4 text-xl">
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-600">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-pink-500">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-gray-800">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-500">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          {/* Hamburger menu */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <HiX className="text-3xl" />
              ) : (
                <HiMenuAlt3 className="text-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-blue-100 shadow-lg rounded-lg px-6 py-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#home"
                  className=" flex items-center gap-3 text-blue-600 font-medium opacity-75"
                >
                  <FaHome />
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center gap-3 text-blue-600 font-medium opacity-75"
                >
                  <FaUserFriends />
                  Tentang kami
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="flex items-center gap-3 text-blue-600 font-medium opacity-75"
                >
                  <AiFillSetting />
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#proyek"
                  className=" flex items-center gap-3 text-blue-600 font-medium opacity-75"
                >
                  <FaImages /> Proyek
                </a>
              </li>
              <li>
                <div className="flex gap-4 text-xl mt-2">
                  <a href="#" className="text-blue-600 hover:text-blue-600">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-pink-500">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-gray-800">
                    <FaGithub />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    <FaLinkedinIn />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
