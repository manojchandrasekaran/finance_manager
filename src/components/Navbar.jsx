import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("Expenses");
  return (
    <div>
      <nav className="bg-red-600 p-5 shadow-md">
        <span className="bg-amber-400">
          <h1 className="text-3xl font-bold text-center p-4">
            Financial Manager
          </h1>
        </span>
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-6 mx-auto">
            {[
              { name: "Expenses", path: "/" },
              { name: "Goals", path: "/goals" },
              { name: "Investments", path: "/investments" },
              { name: "Reports", path: "/reports" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`text-black px-3 py-2 rounded-lg transition-all ${
                    active === item.name
                      ? "bg-black text-white"
                      : "hover:bg-white"
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
