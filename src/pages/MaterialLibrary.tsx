import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Folder, ChevronDown, MoreVertical, Plus, Sparkles, 
  Search, Edit2, Trash2, ChevronLeft, ChevronRight, 
  Loader2, Diamond, User 
} from 'lucide-react';

export default function MaterialLibrary() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('文档素材');
  const [activeDir, setActiveDir] = useState(0);

  return (
    <div className="h-screen bg-[#F5F7FA] font-sans flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white px-[100px] py-0 flex items-center justify-between border-b border-gray-100 flex-shrink-0 z-50">
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
            <button onClick={() => navigate('/my-projects')} className="h-full flex items-center text-gray-600 hover:text-[#4F6BFF]">
              我的项目
            </button>
            <div className="h-full flex items-center text-[#4F6BFF] font-medium relative">
              我的素材库
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#4F6BFF]"></span>
            </div>
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

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden px-[100px] py-6 pb-8">
        <div className="flex flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-[200px] border-r border-gray-100 flex-shrink-0 py-4 flex flex-col bg-white">
          <div className="px-4 py-2 flex items-center justify-between text-blue-600 cursor-pointer">
            <div className="flex items-center gap-2">
              <Folder size={18} />
              <span className="font-medium">技术标素材</span>
            </div>
            <ChevronDown size={16} />
          </div>
          <div className="flex flex-col mt-2">
            <div 
              className={`px-10 py-3 cursor-pointer text-sm ${activeMenu === '图片素材' ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'}`}
              onClick={() => setActiveMenu('图片素材')}
            >
              图片素材
            </div>
            <div 
              className={`px-10 py-3 cursor-pointer text-sm ${activeMenu === '文档素材' ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600' : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'}`}
              onClick={() => setActiveMenu('文档素材')}
            >
              文档素材
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden bg-white">
          {/* Card Header */}
          <div className="px-6 py-4 border-b border-gray-100 font-bold text-gray-800">
            文档素材
          </div>
            
            {/* Card Body */}
            <div className="flex flex-1 overflow-hidden">
              {/* Directory Tree */}
              <div className="w-[240px] border-r border-gray-100 p-4 flex flex-col">
                <button className="w-full py-2 border border-gray-200 rounded-lg text-sm text-gray-600 flex items-center justify-center gap-1 hover:bg-gray-50 transition-colors mb-4">
                  <Plus size={16} /> 新增目录
                </button>
                <div className="flex-1 overflow-y-auto space-y-1">
                  {[0, 1, 2, 3, 4].map((dir) => (
                    <div 
                      key={dir}
                      onClick={() => setActiveDir(dir)}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer group ${activeDir === dir ? 'text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <span className="text-sm">目录名称</span>
                      <MoreVertical size={16} className={`text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ${activeDir === dir ? 'opacity-100' : ''}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Material List */}
              <div className="flex-1 p-6 flex flex-col overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1.5 transition-colors">
                      <Plus size={16} /> 新增素材
                    </button>
                    <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-md text-sm flex items-center gap-1.5 transition-colors">
                      <Sparkles size={16} /> 文档抽图
                    </button>
                  </div>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-200 rounded-md py-2 pl-3 pr-8 text-sm text-gray-600 focus:outline-none focus:border-blue-500 w-48">
                      <option>请选择标签</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Table */}
                <div className="flex-1 overflow-y-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50/50 sticky top-0 z-10">
                      <tr>
                        <th className="py-3 px-4 w-12 border-b border-gray-100">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        </th>
                        <th className="py-3 px-4 text-sm font-medium text-gray-600 border-b border-gray-100">素材名称</th>
                        <th className="py-3 px-4 text-sm font-medium text-gray-600 border-b border-gray-100 w-48">素材标签</th>
                        <th className="py-3 px-4 text-sm font-medium text-gray-600 border-b border-gray-100 w-32">状态</th>
                        <th className="py-3 px-4 text-sm font-medium text-gray-600 border-b border-gray-100 w-32 text-right">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Row 1 - 解析中 */}
                      <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                        <td className="py-3 px-4">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">素材名称素材名称素材名称素材名称素材名称</td>
                        <td className="py-3 px-4 text-sm text-gray-500">企业介绍</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-50 text-blue-600 text-xs font-medium">
                            <Loader2 size={12} className="animate-spin" /> 解析中
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-3 text-gray-400">
                            <button className="hover:text-blue-600 transition-colors"><Search size={16} /></button>
                            <button className="hover:text-blue-600 transition-colors"><Edit2 size={16} /></button>
                            <button className="hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                          </div>
                        </td>
                      </tr>
                      
                      {/* Rows 2-8 - 可用 */}
                      {[1, 2, 3, 4, 5, 6, 7].map((idx) => (
                        <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                          <td className="py-3 px-4">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-700">素材名称素材名称素材名称素材名称素材名称</td>
                          <td className="py-3 px-4 text-sm text-gray-500">{idx < 2 ? '历史投标文件' : '售后服务'}</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center px-2 py-1 rounded bg-green-50 text-green-600 text-xs font-medium">
                              可用
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-3 text-gray-400">
                              <button className="hover:text-blue-600 transition-colors"><Search size={16} /></button>
                              <button className="hover:text-blue-600 transition-colors"><Edit2 size={16} /></button>
                              <button className="hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded text-gray-500 hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">
                    <ChevronLeft size={16} />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-blue-500 text-blue-600 rounded bg-white font-medium">1</button>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">2</button>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">3</button>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">4</button>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">5</button>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded text-gray-500 hover:border-blue-500 hover:text-blue-600 transition-colors bg-white">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
