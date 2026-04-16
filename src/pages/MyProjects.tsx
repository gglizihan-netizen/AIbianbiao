import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Clock, Trash2, ChevronDown, ChevronRight, Eye, Edit2, Plus, Diamond, User, FileText } from 'lucide-react';

export default function MyProjects() {
  const navigate = useNavigate();
  const [expandedProjects, setExpandedProjects] = useState<number[]>([0]);

  const toggleProject = (index: number) => {
    if (expandedProjects.includes(index)) {
      setExpandedProjects(expandedProjects.filter(i => i !== index));
    } else {
      setExpandedProjects([...expandedProjects, index]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white px-[100px] py-0 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 mr-12 cursor-pointer" onClick={() => navigate('/')}>
            <div className="text-blue-600 flex items-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4L4 12V28H28V12L16 4Z" fill="#EBF0FF" />
                <path d="M16 8L8 13.3333V24H24V13.3333L16 8Z" fill="#4F6BFF" />
                <path d="M16 12L12 14.6667V20H20V14.6667L16 12Z" fill="white" />
              </svg>
              <div className="ml-2 flex flex-col justify-center">
                <span className="text-[10px] leading-none font-bold text-blue-800 tracking-wider">BOPOINT</span>
                <span className="text-lg font-bold text-gray-900 leading-tight">AI编标</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex items-center h-full gap-8 text-[15px]">
            <button onClick={() => navigate('/')} className="h-full flex items-center text-gray-600 hover:text-[#4F6BFF]">
              首页
            </button>
            <div className="h-full flex items-center text-[#4F6BFF] font-medium relative">
              我的项目
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#4F6BFF]"></span>
            </div>
            <button onClick={() => navigate('/material-library')} className="h-full flex items-center text-gray-600 hover:text-[#4F6BFF]">素材库</button>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#4F6BFF] group-hover:bg-blue-200 transition-colors">
              <User size={18} />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-gray-900">用户名称较长...</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <button className="flex items-center gap-1.5 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-500 px-4 py-1.5 rounded-full text-sm font-medium hover:from-orange-200 hover:to-orange-100 transition-all border border-orange-200">
            <Diamond size={14} className="fill-orange-500" />
            充值
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-[100px] py-8">
        {/* Top Actions */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-[320px]">
            <input 
              type="text" 
              placeholder="请输入关键词" 
              className="w-full pl-3 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 cursor-pointer" />
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
              创建资信标
            </button>
            <button 
              onClick={() => navigate('/create-technical-bid')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
            >
              创建技术标
            </button>
          </div>
        </div>

        {/* Project List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          {[0, 1, 2, 3, 4, 5].map((projectIdx) => {
            const isExpanded = expandedProjects.includes(projectIdx);
            return (
              <div key={projectIdx} className="border-b border-gray-100 last:border-0">
                {/* Project Header */}
                <div 
                  className={`flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors ${isExpanded ? 'bg-gray-50/50' : ''}`}
                  onClick={() => toggleProject(projectIdx)}
                >
                  <div className="flex items-center gap-2">
                    {isExpanded ? (
                      <ChevronDown size={18} className="text-gray-400" />
                    ) : (
                      <ChevronRight size={18} className="text-gray-400" />
                    )}
                    <h3 className="text-base font-bold text-gray-800">项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称</h3>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-blue-500" />
                      <span>开始时间: 2022-03-11</span>
                    </div>
                    <button className="hover:text-red-500 transition-colors" onClick={(e) => e.stopPropagation()}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-12 py-4 bg-white">
                    {/* 资信标 */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center text-white">
                          <FileText size={12} />
                        </div>
                        <span className="text-sm font-bold text-gray-800">资信标</span>
                      </div>
                      <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg group">
                        <span className="text-sm text-gray-700 w-[240px]">资信方案2602271701</span>
                        <div className="flex items-center gap-3 w-[300px]">
                          <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden flex">
                            <div className="h-full bg-[#22C55E] w-full"></div>
                          </div>
                          <span className="text-sm text-gray-600 w-12">100%</span>
                        </div>
                        <span className="text-sm text-gray-500 w-[240px]">最近修改: 2026-03-11 05:36</span>
                        <button className="text-gray-400 hover:text-blue-600 transition-colors">
                          <Eye size={16} />
                        </button>
                      </div>
                    </div>

                    {/* 技术标 */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center text-white">
                            <FileText size={12} />
                          </div>
                          <span className="text-sm font-bold text-gray-800">技术标</span>
                          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">4 份</span>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium">
                          <Plus size={14} /> 再写一份
                        </button>
                      </div>
                      
                      <div className="space-y-1">
                        {/* Item 1 */}
                        <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg group">
                          <div className="flex items-center gap-2 w-[240px]">
                            <span className="text-sm text-gray-700">技术方案2602271701</span>
                            <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">首</span>
                          </div>
                          <div className="flex items-center gap-3 w-[300px]">
                            <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden flex">
                              <div className="h-full bg-[#22C55E] w-full"></div>
                            </div>
                            <span className="text-sm text-gray-600 w-12">100%</span>
                          </div>
                          <span className="text-sm text-gray-500 w-[240px]">最近修改: 2026-03-13 12:00</span>
                          <button className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Eye size={16} />
                          </button>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg group">
                          <div className="flex items-center gap-2 w-[240px]">
                            <span className="text-sm text-gray-700">技术方案2602271701</span>
                            <span className="text-[10px] bg-blue-50 text-blue-400 px-1.5 py-0.5 rounded border border-blue-100">副1</span>
                          </div>
                          <div className="flex items-center gap-3 w-[300px]">
                            <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden flex">
                              <div className="h-full bg-[#4F6BFF] w-[55%]"></div>
                            </div>
                            <span className="text-sm text-gray-600 w-12">55%</span>
                          </div>
                          <span className="text-sm text-gray-500 w-[240px]">最近修改: 2026-03-13 11:00</span>
                          <button className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Edit2 size={16} />
                          </button>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg group">
                          <div className="flex items-center gap-2 w-[240px]">
                            <span className="text-sm text-gray-700">技术方案2602271701</span>
                            <span className="text-[10px] bg-blue-50 text-blue-400 px-1.5 py-0.5 rounded border border-blue-100">副2</span>
                          </div>
                          <div className="flex items-center gap-3 w-[300px]">
                            <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden flex">
                              <div className="h-full bg-[#4F6BFF] w-[55%]"></div>
                            </div>
                            <span className="text-sm text-gray-600 w-12">55%</span>
                          </div>
                          <span className="text-sm text-gray-500 w-[240px]">最近修改: 2026-03-13 10:00</span>
                          <button className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Edit2 size={16} />
                          </button>
                        </div>

                        {/* Item 4 */}
                        <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg group">
                          <div className="flex items-center gap-2 w-[240px]">
                            <span className="text-sm text-gray-700">技术方案2602271701</span>
                            <span className="text-[10px] bg-blue-50 text-blue-400 px-1.5 py-0.5 rounded border border-blue-100">副3</span>
                          </div>
                          <div className="flex items-center gap-3 w-[300px]">
                            <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden flex">
                              <div className="h-full bg-[#4F6BFF] w-[55%]"></div>
                            </div>
                            <span className="text-sm text-gray-600 w-12">55%</span>
                          </div>
                          <span className="text-sm text-gray-500 w-[240px]">最近修改: 2026-03-13 09:00</span>
                          <button className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Edit2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <span>共 123 条</span>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-blue-500 text-blue-600 rounded bg-white font-medium">1</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">2</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">3</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">4</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">5</button>
            <button className="px-3 h-8 flex items-center justify-center border border-gray-200 rounded hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">下一页</button>
            <button className="px-3 h-8 flex items-center justify-center border border-gray-200 rounded hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">尾页</button>
          </div>
          <div className="flex items-center gap-2">
            <span>前往</span>
            <input type="text" className="w-12 h-8 border border-gray-200 rounded text-center focus:outline-none focus:border-blue-500" />
            <span>页</span>
          </div>
        </div>
      </main>
    </div>
  );
}
