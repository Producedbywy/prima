import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLink = (path, label) => (
    <Link
      to={path}
      className={`hover:underline transition ${
        location.pathname === path ? 'font-bold underline' : ''
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-forest text-ivory p-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide">YawHaus</div>
      <div className="space-x-6 text-lg">
        {navLink('/', 'Home')}
        {navLink('/hauslabs', 'Haus Labs')}
        {navLink('/yawthentic', 'Yawthentic')}
        {navLink('/hausstudios', 'Haus Studios')}
        {navLink('/hausspring', 'Haus Spring')}
        {navLink('/hausharvest', 'Haus Harvest')}
        {navLink('/contact', 'Contact')}
      </div>
    </nav>
  );
}
