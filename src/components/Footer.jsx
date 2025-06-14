import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory text-center p-4 mt-8 shadow-inner">
      &copy; {new Date().getFullYear()} YawHaus. All rights reserved.
    </footer>
  );
}
