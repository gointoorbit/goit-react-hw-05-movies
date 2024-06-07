import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.headerContainer}>
          <nav className={css.nav}>
            <NavLink className={css.navLink} to="/" end>
              Home
            </NavLink>
            <NavLink className={css.navLink} to="/movies">
              Movies
            </NavLink>
          </nav>
        </div>
      </header>
      <Suspense fallback={<div className={css.loading}>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
