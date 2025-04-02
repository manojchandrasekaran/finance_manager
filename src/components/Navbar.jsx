import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("Transactions");
  const pages = [
    { name: "Transactions", path: "/" },
    { name: "Goals", path: "/goals" },
    { name: "Investments", path: "/investments" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-4">Financial Manager</h1>
      <nav className="bg-red-600 p-5 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-6 mx-auto">
            {pages.map((item) => (
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
