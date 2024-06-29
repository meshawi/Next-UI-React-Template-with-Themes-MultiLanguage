import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="mb-6 flex justify-center gap-4">
      <NavLink to="/" className="mr-4" activeClassName="font-bold">{t('showcase')}</NavLink>
      <NavLink to="/settings" className="mr-4" activeClassName="font-bold">{t('settings')}</NavLink>
    </nav>
  );
};

export default Navbar;
