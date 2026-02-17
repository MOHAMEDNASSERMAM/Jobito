import { Link, useLocation } from "react-router-dom";
import Style from "./NavBar.module.css";

export const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Find Jobs", href: "/Find Jobs" },
    { name: "Browse Companies", href: "/Browse Companies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={Style.Navbar}>
      <ul>
        {navLinks.map((link) => (
          <li key={link.href} className="relative">
            <Link
              to={link.href}
              className={`no-underline relative pb-1 cursor-pointer text-lg transition-colors duration-300
                ${
                  pathname === link.href
                    ? "text-orange-500 font-semibold after:w-full"
                    : "text-white  hover:text-orange-400 after:w-0 hover:after:w-full"
                }
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
                after:bg-orange-500 after:transition-all after:duration-500`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
