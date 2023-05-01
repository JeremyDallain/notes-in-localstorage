import { useState } from "react";
import { Link } from "react-router-dom";
import IconBurger from "./components/IconBurger";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-blue-700 p-4 text-white fixed w-full z-20 top-0">
      <div className="container mx-auto  max-w-6xl">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold py-2">
            Notes
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden block focus:outline-none"
          >
            <IconBurger />
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:flex sm:space-x-4 space-y-2 sm:space-y-0 absolute left-0 mt-1 bg-blue-700 w-full sm:static sm:bg-transparent sm:w-auto z-10 top-14 pb-4 sm:pb-0`}
          >
            <Link
              to="/create"
              className="block p-2 hover:text-blue-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Ajouter une note
            </Link>
            <Link
              to="/tags"
              className="block p-2 hover:text-blue-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Gestion des Tags
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
