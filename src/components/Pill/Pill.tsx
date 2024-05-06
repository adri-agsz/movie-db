import React from 'react';

interface PillProps {
  genre: any; 
}

const Pill: React.FC<PillProps> = ({ genre }) => {
  return (
    <div>
      <span className="text-red-100 bg-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400 overflow-hidden whitespace-nowrap">{genre}</span>
    </div>
  );
};

export default Pill;