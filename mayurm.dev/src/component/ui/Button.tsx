import React from 'react';

// Define the props interface for the Button component
interface ButtonProps {
  children: React.ReactNode; // The content inside the button (e.g., text)
  icon?: React.ReactNode; // Optional: Can be any React node (e.g., an icon component, an SVG, or an emoji string)
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Click event handler
  className?: string; // Optional: Additional Tailwind CSS classes or custom classes
  type?: 'button' | 'submit' | 'reset'; // Optional: HTML button type
}

// Button component defined as a functional component with TypeScript
const Button: React.FC<ButtonProps> = ({ children, icon, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      // Apply Tailwind CSS classes for styling
      className={`
        flex items-center justify-center
        bg-[red]
        px-6 py-3 rounded-lg shadow-md
        text-white font-semibold text-base
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:red
        transition ease-in-out duration-150
        ${icon ? 'space-x-2' : ''} /* Adds spacing if an icon is present */
        ${className} /* Allows for custom overrides */
      `}
    >
      {/* Render the icon if provided. The icon prop can now be any ReactNode. */}
      {icon}
      {/* Render the main content (e.g., button text) */}
      {children}
    </button>
  );
};

export default Button;
