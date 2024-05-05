import Link from "next/link";

function Navbar() {

  return (
    <header>
      <nav className="bg-gray-800">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link href="#" className="text-white font-semibold text-lg">
            Navi Varta
          </Link>

          <div className="flex space-x-4">
            <Link href="#" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              About
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
