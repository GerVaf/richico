import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
const NavBar = () => {
  return (
    <nav
      className={`w-full sticky top-0 z-50 border-b-2 border-red-700 bg-white/30 backdrop-blur-md p-4 flex justify-center items-center shadow-sm`}
    >
      <div className="flex justify-between items-center w-full gap-10 mx-10">
        <Link
          to="/"
          className="flex gap-10 items-center select-none"
          aria-label="Richico Home"
        >
          <img
            src={logo}
            alt="Store Logo"
            className="w-20 h-14  rounded-full overflow-hidden object-cover shadow-md"
          />
        </Link>
        <span className="text-2xl font-semibold dark:text-gray-800 text-white tracking-wide">
          Richico
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
