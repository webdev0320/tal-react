import React from 'react';
import Link from './NextLinkShim';

const AccountsServiceGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="bg-[#f28e35] text-white font-bold py-3 px-4 rounded shadow-lg shadow-orange-500/20 hover:bg-[#d2601a] transition-colors text-center"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default AccountsServiceGrid;
