import { signIn, signOut, useSession } from 'next-auth/react';
import { FC } from 'react';
import { BellIcon, BurgerIcon, SearchIcon } from 'src/theme/icons';

const Navbar: FC = () => {
  const { data: session, status } = useSession();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <BurgerIcon />
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <button className="btn" onClick={() => (session ? signOut() : signIn('github'))}>
                {session ? 'Logout' : 'Login'}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Weblinks</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <SearchIcon />
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <BellIcon />
            <span className="badge badge-xs badge-primary indicator-item" />
          </div>
        </button>
        {session && (
          <button>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={session.user?.image ?? ''} alt="User" />
              </div>
            </label>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
