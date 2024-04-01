import React from 'react';

export const Card = ({ children }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="border-b p-4 flex justify-between items-center">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="font-semibold text-xl">{children}</h2>
);

export const Button = ({ className, size, children, onClick }) => (
  <button
    onClick={onClick}
    className={`rounded-full p-2 focus:outline-none focus:ring ${className}`}
  >
    {children}
  </button>
);

export const PlusIcon = ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
  