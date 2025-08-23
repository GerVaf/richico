import { Link } from "react-router-dom";

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
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Richoco.png"
            alt="Store Logo"
            className="w-14 h-14 overflow-visible rounded-full object-cover shadow-md"
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
