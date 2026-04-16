import React from 'react';
import { Clock, Eye, ChevronDown, ArrowRightCircle, Diamond, User, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans">
      {/* Header */}
      <header className="bg-white px-[100px] py-0 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 mr-12">
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
            <a href="#" className="h-full flex items-center text-[#4F6BFF] font-medium relative">
              首页
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#4F6BFF]"></span>
            </a>
            <a href="#" className="h-full flex items-center text-gray-600 hover:text-[#4F6BFF]">我的项目</a>
            <a href="#" className="h-full flex items-center text-gray-600 hover:text-[#4F6BFF]">素材库</a>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#E8F0FF] to-[#F3F7FF] py-24 px-[100px] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
          <div className="absolute right-[-10%] top-[-20%] w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute right-[10%] top-[20%] w-[600px] h-[400px] bg-white/40 backdrop-blur-md transform rotate-12 rounded-3xl shadow-xl border border-white/50 flex items-center justify-center">
             <div className="w-[500px] h-[300px] bg-blue-50/50 rounded-2xl border border-white/60 shadow-inner flex flex-col p-6 gap-4">
                <div className="w-1/2 h-4 bg-white/80 rounded"></div>
                <div className="w-3/4 h-4 bg-white/80 rounded"></div>
                <div className="w-full h-4 bg-white/80 rounded"></div>
                <div className="w-5/6 h-4 bg-white/80 rounded"></div>
             </div>
          </div>
          <div className="absolute right-[5%] bottom-[-10%] w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-[44px] font-bold text-[#4F6BFF] mb-6 tracking-wide">标桥快速编标</h1>
          <p className="text-xl text-gray-700 mb-10 tracking-widest font-light">
            智能匹配资信标 / 精准定制技术标 / 零门槛流程引导
          </p>
          <div className="flex gap-4">
            <button className="bg-[#4F6BFF] hover:bg-[#3B59FF] text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md shadow-blue-500/20">
              创建资信标
            </button>
            <button 
              onClick={() => navigate('/create-technical-bid')}
              className="bg-[#4F6BFF] hover:bg-[#3B59FF] text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md shadow-blue-500/20"
            >
              创建技术标
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-[100px] py-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-[#4F6BFF] rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-800 tracking-wide">最近项目</h2>
          </div>
          <a href="#" className="flex items-center gap-1.5 text-sm text-[#4F6BFF] hover:text-[#3B59FF] transition-colors bg-blue-50 px-3 py-1 rounded-full">
            查看更多 <ArrowRightCircle size={16} />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="mt-1 text-[#4F6BFF] bg-blue-50 p-1.5 rounded-lg shrink-0">
                <FileText size={20} />
              </div>
              <h3 className="font-bold text-gray-800 leading-snug line-clamp-2 text-[15px]">
                项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-6">
              <Clock size={14} />
              <span>开标时间: 2025-04-11</span>
            </div>

            {/* 资信标 */}
            <div className="bg-[#F8FAFC] rounded-xl p-4 mb-4">
              <div className="text-xs text-gray-500 mb-3 font-medium">资信标</div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-[2px] border-[#10B981] flex items-center justify-center text-[#10B981] font-bold text-lg shrink-0">
                  100
                </div>
                <div className="min-w-0">
                  <div className="text-gray-800 font-medium text-sm mb-1 truncate">资信方案2602271701</div>
                  <div className="text-gray-400 text-xs truncate">最近修改: 2026-03-11 05:36</div>
                </div>
              </div>
            </div>

            {/* 技术标 */}
            <div className="bg-[#F8FAFC] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-500 font-medium">技术标</span>
                <span className="bg-gray-200 text-gray-600 text-[10px] px-2 py-0.5 rounded-full">5份</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-full border-[2px] border-[#10B981] flex items-center justify-center text-[#10B981] font-bold text-lg shrink-0">
                    100
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#4F6BFF] font-medium text-sm truncate">技术方案2602271701</span>
                      <span className="bg-blue-100 text-[#4F6BFF] text-[10px] px-1.5 py-0.5 rounded shrink-0">首</span>
                    </div>
                    <div className="text-[#4F6BFF] text-xs truncate opacity-80">最近修改: 2026-03-11 05:36</div>
                  </div>
                </div>
                <button className="bg-[#4F6BFF] text-white flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs hover:bg-[#3B59FF] transition-colors shrink-0 shadow-sm">
                  <Eye size={14} />
                  查看
                </button>
              </div>
              <div className="mt-4 text-center">
                <button className="text-[#4F6BFF] text-xs flex items-center justify-center gap-1 w-full hover:text-[#3B59FF] transition-colors">
                  展开全部技术标 <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="mt-1 text-[#4F6BFF] bg-blue-50 p-1.5 rounded-lg shrink-0">
                <FileText size={20} />
              </div>
              <h3 className="font-bold text-gray-800 leading-snug line-clamp-2 text-[15px]">
                项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-6">
              <Clock size={14} />
              <span>开标时间: 2025-04-11</span>
            </div>

            {/* 资信标 */}
            <div className="bg-[#F8FAFC] rounded-xl p-4 mb-4">
              <div className="text-xs text-gray-500 mb-3 font-medium">资信标</div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-[2px] border-[#10B981] flex items-center justify-center text-[#10B981] font-bold text-lg shrink-0">
                  100
                </div>
                <div className="min-w-0">
                  <div className="text-gray-800 font-medium text-sm mb-1 truncate">资信方案2602271701</div>
                  <div className="text-gray-400 text-xs truncate">最近修改: 2026-03-11 05:36</div>
                </div>
              </div>
            </div>

            {/* 技术标 */}
            <div className="bg-[#F8FAFC] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-500 font-medium">技术标</span>
                <span className="bg-gray-200 text-gray-600 text-[10px] px-2 py-0.5 rounded-full">1份</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-full border-[2px] border-[#10B981] flex items-center justify-center text-[#10B981] font-bold text-lg shrink-0">
                    100
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-800 font-medium text-sm truncate">技术方案2602271701</span>
                      <span className="bg-blue-100 text-[#4F6BFF] text-[10px] px-1.5 py-0.5 rounded shrink-0">首</span>
                    </div>
                    <div className="text-gray-400 text-xs truncate">最近修改: 2026-03-11 05:36</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button className="text-gray-400 text-xs flex items-center justify-center gap-1 w-full hover:text-gray-600 transition-colors">
                  点击再写一份添加更多方案
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="mt-1 text-[#4F6BFF] bg-blue-50 p-1.5 rounded-lg shrink-0">
                <FileText size={20} />
              </div>
              <h3 className="font-bold text-gray-800 leading-snug line-clamp-2 text-[15px]">
                项目名称项目名称项目名称项目名称项目名称项目名称项目名称项目名称
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-6">
              <Clock size={14} />
              <span>开标时间: 2025-04-11</span>
            </div>

            {/* 资信标 */}
            <div className="bg-[#F8FAFC] rounded-xl p-4 mb-4">
              <div className="text-xs text-gray-500 mb-3 font-medium">资信标</div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-[2px] border-[#10B981] flex items-center justify-center text-[#10B981] font-bold text-lg shrink-0">
                  100
                </div>
                <div className="min-w-0">
                  <div className="text-gray-800 font-medium text-sm mb-1 truncate">资信方案2602271701</div>
                  <div className="text-gray-400 text-xs truncate">最近修改: 2026-03-11 05:36</div>
                </div>
              </div>
            </div>

            {/* 技术标 */}
            <div className="bg-[#F8FAFC] rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-500 font-medium">技术标</span>
                <span className="bg-gray-200 text-gray-600 text-[10px] px-2 py-0.5 rounded-full">0份</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-full border-[2px] border-gray-200 flex items-center justify-center text-gray-400 font-bold text-lg shrink-0 bg-white">
                    0
                  </div>
                  <div className="min-w-0">
                    <div className="text-gray-800 font-medium text-sm mb-1 truncate">暂未创建</div>
                    <div className="text-gray-400 text-xs truncate">最近修改: 无</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button className="text-gray-400 text-xs flex items-center justify-center gap-1 w-full hover:text-gray-600 transition-colors">
                  点击创建开始编写技术标
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
