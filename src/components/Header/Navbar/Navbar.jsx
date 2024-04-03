import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="flex justify-between items-center py-8 w-10/12 mx-auto">
          <div>
            <img className=" w-52 h-14" src="/public/images/Logo.png" alt="" />
          </div>
          <div>
            <ul className="flex gap-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 font-semibold underline" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donation"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 font-semibold underline" : ""
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 font-semibold underline" : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
