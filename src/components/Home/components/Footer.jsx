const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 rounded-lg shadow-sm mt-8 m-3">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold text-gray-900 dark:text-white">
              Richico
            </span>
          </a>

          {/* Links */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="hover:underline mr-4 md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mr-4 md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline mr-4 md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="mailto:rchic900@gmail.com" className="hover:underline">
                rchic900@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2025{" "}
          <a href="#" className="hover:underline">
            Richico
          </a>
          . All Rights Reserved. Power By{" "}
          <a target="_blank" href="https://justlwint.com">justlwint.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
