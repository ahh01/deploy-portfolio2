 // components/Header.js
import Link from "next/link";


function Header() {
  return (
    <header className="bg-slate-900 text-white p-4 w-full top-0 left-0 z-10 shadow-lg">
      <nav className="flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Portfolio
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
           
          </li>
        </ul> 
        
      </nav>
    </header>
  );
}

export default Header;
 

