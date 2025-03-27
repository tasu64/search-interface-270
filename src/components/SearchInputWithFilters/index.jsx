import React, { useState } from 'react';

const SearchInputWithFilters = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Stock Search</h1>
        <p className="text-gray-600">Search for stocks using keywords and filters</p>
      </div>

      <div className="w-full rounded-[30px] bg-black shadow p-6">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Tap your words..."
            className="w-full text-lg bg-transparent text-white outline-none placeholder-gray-400"
          />
          <div className="flex justify-between items-center">
            <button
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
              Run Results
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-gray-700 font-medium">Active Filters:</span>
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Volatility Factor</span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Active Penny Stock</span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Top Losers</span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Gap Rally + Sector</span>
        </div>
      </div>
    </div>
  );
};

export default SearchInputWithFilters;
