"use client"

import Link from "next/link";
import { Home, Menu, Users, Folder, Info, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function NavigationBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue/70 backdrop-blur shadow-sm fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="flex items-center text-gray-300 hover:bg-blue-800 px-3 py-2 rounded">
              <Menu className="h-5 w-5 mr-2" />
              <span>Menu</span>
            </button>
          </div>

          <div className="flex items-center space-x-4 relative">
            <Link href="/" className="flex items-center text-gray-300 hover:bg-blue-800 px-3 py-2 rounded">
              <Home className="h-5 w-5 mr-2" />
              <span>Home</span>
            </Link>

            <Link href="/usuarios" className="flex items-center text-gray-300 hover:bg-blue-800 px-3 py-2 rounded">
              <Users className="h-5 w-5 mr-2" />
              <span>Usuarios</span>
            </Link>

            {/* Menú Maestro con subitems */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-300 hover:bg-blue-800 px-3 py-2 rounded"
              >
                <Folder className="h-5 w-5 mr-2" />
                <span>Maestro</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-20">
                  <Link href="/maestro/modulos" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Módulos</Link>
                  <Link href="/maestro/actividades" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Actividades</Link>
                  <Link href="/maestro/proyectos" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Proyectos</Link>
                </div>
              )}
            </div>

            <Link href="/about" className="flex items-center text-gray-300 hover:bg-blue-800 px-3 py-2 rounded">
              <Info className="h-5 w-5 mr-2" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
