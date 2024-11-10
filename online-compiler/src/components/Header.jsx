import React from "react";

const Header = ({ onRun, onToggleTheme }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <button
        onClick={onRun}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
      >
        Run Code
      </button>
    </header>
  );
};

export default Header;
