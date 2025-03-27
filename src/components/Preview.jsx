

import React, { useState } from 'react';
import SearchInputWithFilters from './SearchInputWithFilters';

/**
 * StockSearchPage - 股票搜索页面组件
 * 
 * 功能：展示股票搜索界面，允许用户输入搜索条件和过滤器进行股票查询
 * 技术栈：React 18.2, TailwindCSS
 * 适用场景：股票搜索入口页面
 * 
 * 使用示例：
 * jsx
 * <StockSearchPage />
 * ```
 */
const StockSearchPage = () => {
  // 状态管理
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  // 处理输入变化
  const handleInputChange = (value) => {
    setSearchQuery(value);
  };
  
  // 处理添加过滤器
  const handleAddFilter = (filter) => {
    setSelectedFilters([...selectedFilters, filter]);
  };
  
  // 处理运行结果
  const handleRunResults = (query, filters) => {
    console.log("Search query:", query);
    console.log("Applied filters:", filters);
    // 这里可以添加导航到结果页面的逻辑
    // 例如：navigate(`/results?query=${encodeURIComponent(query)}&filters=${encodeURIComponent(JSON.stringify(filters))}`);
    alert(`Searching for: ${query} with filters: ${filters.join(', ')}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[1647px] mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Stock Search</h1>
        <p className="text-gray-600 mb-8 text-center">
          Search for stocks using keywords and filters
        </p>
        
        <SearchInputWithFilters
          placeholder="Search for stocks by name, symbol, industry..."
          addFilterText="Add Filters"
          runResultsText="Run Results"
          onInputChange={handleInputChange}
          onAddFilter={handleAddFilter}
          onRunResults={handleRunResults}
        />
        
        {/* Display active filters if any */}
        {selectedFilters.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-medium mb-2">Active Filters:</h2>
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockSearchPage;
