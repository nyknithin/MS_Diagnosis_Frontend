import { NavLink } from "react-router-dom"
import { Brain } from "lucide-react"

import { appName, navLinks } from "@/lib/constants"

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-semibold text-slate-900">{appName}</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {navLinks.map(({ path, label }) => {
              return <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? "text-teal-600 bg-teal-50" : "text-slate-600 hover:text-teal-600 hover:bg-slate-50"
                  }`
                }
              >
                {label}
              </NavLink>
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
