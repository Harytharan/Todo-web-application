import React from 'react';

const EmptyCard = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="w-1/2 text-lg font-bold text-slate-900 text-center">
        {message || "Add Your Notes Here."}
      </p>
    </div>
  );
}

export default EmptyCard;
