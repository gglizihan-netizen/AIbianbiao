import React from 'react';
import { Home, RefreshCw, Diamond, Check, Edit3, ChevronRight, ChevronDown, Settings, Sparkles, Edit2, Trash2, MoreHorizontal, FileText, Info, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GenerateContent() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#F5F7FA] font-sans flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white px-6 py-3 flex items-center justify-between border-b border-gray-100 flex-shrink-0 relative">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="p-2 hover:bg-gray-50 rounded-lg text-gray-500">
            <Home size={20} />
          </button>
          <div className="h-8 w-px bg-gray-200"></div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-gray-800 truncate max-w-[200px]">项目名称项目名称项目名称项目名称...</h1>
              <Edit3 size={14} className="text-blue-500 cursor-pointer" />
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
              <div className="flex items-center gap-1">
                <FileText size={12} />
                <span>已生成字数: 128800字</span>
              </div>
              <div className="w-px h-3 bg-gray-300"></div>
              <div className="flex items-center gap-1">
                <FileText size={12} />
                <span>预计导出页数: 488页</span>
                <Info size={12} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Stepper */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div onClick={() => navigate('/create-technical-bid')} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
            <div className="w-6 h-6 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center text-xs font-medium">
              <Check size={14} />
            </div>
            <span className="text-sm text-gray-600">创建投标方案</span>
          </div>
          <div className="w-8 border-t border-dashed border-gray-300 mx-1"></div>
          <div onClick={() => navigate('/confirm-requirements')} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
            <div className="w-6 h-6 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center text-xs font-medium">
              <Check size={14} />
            </div>
            <span className="text-sm text-gray-600">确认招标要求</span>
          </div>
          <div className="w-8 border-t border-dashed border-gray-300 mx-1"></div>
          <div onClick={() => navigate('/generate-directory')} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
            <div className="w-6 h-6 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center text-xs font-medium">
              <Check size={14} />
            </div>
            <span className="text-sm text-gray-600">生成目录</span>
          </div>
          <div className="w-8 border-t border-dashed border-gray-300 mx-1"></div>
          <div onClick={() => navigate('/generate-content')} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-medium">4</div>
            <span className="text-sm font-medium text-blue-600">生成正文</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600 flex items-center gap-1">
            剩余 <span className="text-orange-500 font-bold">24000字</span> <RefreshCw size={14} className="text-gray-400 cursor-pointer" />
          </div>
          <button className="flex items-center gap-1 bg-orange-50 text-orange-500 px-3 py-1.5 rounded text-sm font-medium border border-orange-200">
            <Diamond size={14} className="fill-orange-500" />
            充值
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 flex gap-4 overflow-hidden">
        {/* Left Column - Directory */}
        <div className="flex-[2] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-white flex-shrink-0">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-gray-800">目录大纲</h2>
              <Settings size={14} className="text-blue-500 cursor-pointer" />
            </div>
            <div className="flex items-center gap-3">
              <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">设置页数</button>
              <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">设置序号</button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs flex items-center gap-1 transition-colors shadow-sm">
                <Sparkles size={12} />
                生成全文
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2">
            {/* Directory Items Mock */}
            <div className="space-y-0.5">
              {/* Level 1 */}
              <div className="flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded group cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <ChevronDown size={14} className="text-gray-400" />
                  <span className="text-sm font-bold text-gray-800">第一章 名称名称名称名称名称...</span>
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>

              {/* Level 2 */}
              <div className="flex items-center justify-between px-2 py-2 pl-6 hover:bg-gray-50 rounded group cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <ChevronDown size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-700">2.1 名称名称名称</span>
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>

              {/* Level 3 */}
              <div className="flex items-center justify-between px-2 py-2 pl-10 hover:bg-gray-50 rounded group cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">2.1 名称名称名称</span>
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>

              {/* Level 3 - Active */}
              <div className="flex items-center justify-between px-2 py-2 pl-10 bg-blue-50 rounded group cursor-pointer border border-blue-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-800 font-medium">2.1 名称名称名称</span>
                  <span className="text-[10px] text-gray-500 bg-white border border-gray-200 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>

              {/* Level 3 */}
              <div className="flex items-center justify-between px-2 py-2 pl-10 hover:bg-gray-50 rounded group cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">2.1 名称名称名称</span>
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>

              {/* Level 2 */}
              <div className="flex items-center justify-between px-2 py-2 pl-6 hover:bg-gray-50 rounded group cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <ChevronDown size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-700">2.1 名称名称名称</span>
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>

              {/* Level 3 */}
              <div className="flex items-center justify-between px-2 py-2 pl-10 hover:bg-gray-50 rounded group cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">2.1 名称名称名称</span>
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>
              
              {/* Level 3 */}
              <div className="flex items-center justify-between px-2 py-2 pl-10 hover:bg-gray-50 rounded group cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">2.1 名称名称名称</span>
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>

              {/* Level 1 */}
              <div className="flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded group cursor-pointer mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <ChevronDown size={14} className="text-gray-400" />
                  <span className="text-sm font-bold text-gray-800">第二章 名称名称名称名称名称...</span>
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>

              {/* Level 2 */}
              <div className="flex items-center justify-between px-2 py-2 pl-6 hover:bg-gray-50 rounded group cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <ChevronDown size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-700">2.1 名称名称名称</span>
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>

              {/* Level 3 */}
              <div className="flex items-center justify-between px-2 py-2 pl-10 hover:bg-gray-50 rounded group cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">2.1 名称名称名称</span>
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>

              {/* Level 3 */}
              <div className="flex items-center justify-between px-2 py-2 pl-10 hover:bg-gray-50 rounded group cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">2.1 名称名称名称</span>
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded ml-1">9页，约4500字</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 size={14} className="text-gray-400 hover:text-blue-600" />
                  <Trash2 size={14} className="text-gray-400 hover:text-red-500" />
                  <MoreHorizontal size={14} className="text-gray-400 hover:text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Editor */}
        <div className="flex-[3] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
          <div className="px-6 py-3 border-b border-gray-100 flex items-center gap-4 bg-white flex-shrink-0">
            <h2 className="text-sm font-bold text-gray-800">第一节 施工部署</h2>
            <span className="text-xs text-orange-400 bg-orange-50 px-2 py-0.5 rounded">字数: 0字</span>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-50/30 overflow-y-auto">
            <div className="w-64 h-48 mb-6 relative">
              {/* Illustration placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-32">
                  {/* Clouds */}
                  <div className="absolute top-4 left-0 w-12 h-4 bg-blue-50 rounded-full opacity-80"></div>
                  <div className="absolute top-0 left-4 w-8 h-8 bg-blue-50 rounded-full opacity-80"></div>
                  
                  <div className="absolute top-2 right-0 w-16 h-6 bg-blue-50 rounded-full opacity-80"></div>
                  <div className="absolute -top-2 right-4 w-10 h-10 bg-blue-50 rounded-full opacity-80"></div>

                  <div className="absolute bottom-4 -right-8 w-20 h-8 bg-blue-50 rounded-full opacity-80"></div>
                  <div className="absolute bottom-0 -right-4 w-12 h-12 bg-blue-50 rounded-full opacity-80"></div>

                  {/* Box */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-20">
                    {/* Box Back */}
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-blue-100/50 rounded-sm"></div>
                    {/* Box Flaps */}
                    <div className="absolute top-0 left-0 w-12 h-6 bg-blue-100/80 -skew-x-[30deg] origin-bottom-left transform -translate-y-full"></div>
                    <div className="absolute top-0 right-0 w-12 h-6 bg-blue-100/80 skew-x-[30deg] origin-bottom-right transform -translate-y-full"></div>
                    {/* Box Front */}
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-blue-100 rounded-sm border-t border-blue-200/50"></div>
                    {/* Sparkles coming out */}
                    <Sparkles size={20} className="absolute -top-8 left-1/2 -translate-x-1/2 text-blue-400" />
                    <Sparkles size={14} className="absolute -top-4 left-4 text-blue-300" />
                    <Sparkles size={12} className="absolute -top-2 right-4 text-blue-300" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">暂无内容，点击生成本章节内容</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm flex items-center gap-2 transition-colors shadow-sm">
              <Sparkles size={16} />
              生成章节
            </button>
          </div>
        </div>
      </main>

      {/* Footer Actions */}
      <footer className="bg-white border-t border-gray-200 py-3 px-6 flex justify-center gap-4 flex-shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button 
          className="px-8 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          onClick={() => navigate('/generate-directory')}
        >
          上一步
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-medium transition-colors">
          整份导出
        </button>
      </footer>
    </div>
  );
}
