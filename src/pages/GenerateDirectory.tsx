import React from 'react';
import { Home, RefreshCw, Diamond, Check, Edit3, Info, ChevronRight, FileText, Settings, ChevronUp, ChevronDown, MoreHorizontal, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GenerateDirectory() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#F5F7FA] font-sans flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white px-6 py-3 flex items-center justify-between border-b border-gray-100 flex-shrink-0">
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
            <p className="text-xs text-gray-400">最近修改: 12月20日 09:09</p>
          </div>
        </div>

        {/* Stepper */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center text-xs font-medium">
              <Check size={14} />
            </div>
            <span className="text-sm text-gray-600">创建投标方案</span>
          </div>
          <div className="w-8 border-t border-dashed border-gray-300 mx-1"></div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center text-xs font-medium">
              <Check size={14} />
            </div>
            <span className="text-sm text-gray-600">确认招标要求</span>
          </div>
          <div className="w-8 border-t border-dashed border-gray-300 mx-1"></div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-medium">3</div>
            <span className="text-sm font-medium text-blue-600">生成目录</span>
          </div>
          <div className="w-8 border-t border-dashed border-gray-300 mx-1"></div>
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center text-xs font-medium">4</div>
            <span className="text-sm text-gray-500">生成正文</span>
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
        {/* Left Column */}
        <div className="flex-[2] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-100 px-6 pt-4 flex-shrink-0">
            <button className="pb-3 px-2 text-sm text-gray-500 mr-6 hover:text-gray-800 transition-colors">招标文件</button>
            <button className="pb-3 px-2 text-sm font-bold text-gray-800 border-b-[3px] border-blue-600 relative">
              目录推荐
            </button>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-sm font-bold text-gray-800">其他建议章节</span>
              <Info size={14} className="text-gray-400" />
            </div>
            
            <div className="space-y-3">
              {[
                "第一章 工程概况",
                "第二章 施工总体部署",
                "第三章 季节性施工措施",
                "第四章 应急预案",
                "第五章 工程验收与移交",
                "第六章 技术资料管理"
              ].map((chapter, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-700">{chapter}</span>
                  </div>
                  <button className="text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    添加至目录
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-[3] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50 flex-shrink-0">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-orange-400 to-blue-500 rounded-full"></div>
                <h2 className="text-base font-bold text-gray-800">标书目录</h2>
              </div>
              <div className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs flex items-center gap-1.5 shadow-sm">
                <FileText size={14} />
                <span>全文预计页数: <span className="font-bold text-sm">1860页</span></span>
                <span className="opacity-80 ml-1">约消耗930000字</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Info size={14} />
              <span>若对当前目录不满意，可尝试 <a href="#" className="text-blue-600 hover:underline">修改项目信息</a>，再次重新生成目录</span>
            </div>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50/30">
            {/* Card 1 (Hovered State) */}
            <div className="bg-[#F8FAFC] border border-blue-200 rounded-xl p-6 mb-4 relative group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900">第一章 工程质量通病防控措施</h3>
                <div className="bg-blue-500 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  28页 <span className="opacity-50">|</span> <Settings size={12} />
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-gray-700 pl-2">
                <div>第一节 道路工程质量通病防治</div>
                <div className="pl-6 space-y-2">
                  <div>一、路基沉降防治措施</div>
                  <div>二、路面裂缝预防措施</div>
                  <div>三、检查井周边下沉处理</div>
                </div>
                <div>第二节 装饰装修质量通病防治</div>
                <div className="pl-6 space-y-2">
                  <div>一、墙面空鼓开裂防治</div>
                  <div>二、地面起砂空鼓处理</div>
                  <div>三、防水层渗漏预防</div>
                </div>
              </div>

              {/* Hover Toolbar */}
              <div className="absolute bottom-4 right-6 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600 px-2 transition-colors">
                  <ChevronUp size={14} /> 上移
                </button>
                <div className="w-px h-3 bg-gray-300"></div>
                <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600 px-2 transition-colors">
                  <ChevronDown size={14} /> 下移
                </button>
                <div className="w-px h-3 bg-gray-300"></div>
                <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600 px-2 transition-colors">
                  <MoreHorizontal size={14} /> 更多
                </button>
                <button className="flex items-center gap-1 text-xs text-blue-600 border border-blue-200 bg-blue-50 rounded-full px-3 py-1 ml-1 hover:bg-blue-100 transition-colors">
                  <Sparkles size={12} /> <span className="font-medium">优化目录</span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors relative group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-900">第二章 工程质量通病防控措施</h3>
                <div className="bg-blue-500 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  28页 <span className="opacity-50">|</span> <Settings size={12} />
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-gray-700 pl-2">
                <div>第一节 道路工程质量通病防治</div>
                <div className="pl-6 space-y-2">
                  <div>一、路基沉降防治措施</div>
                  <div>二、路面裂缝预防措施</div>
                  <div>三、检查井周边下沉处理</div>
                  <div className="pl-6 space-y-2 text-gray-600">
                    <div>(一) 检查井周边下沉处理</div>
                    <div>(二) 检查井周边下沉处理</div>
                    <div>(三) 检查井周边下沉处理</div>
                  </div>
                </div>
                <div>第二节 装饰装修质量通病防治</div>
                <div className="pl-6 space-y-2">
                  <div>一、墙面空鼓开裂防治</div>
                  <div>二、地面起砂空鼓处理</div>
                </div>
              </div>

              {/* Hover Toolbar */}
              <div className="absolute bottom-4 right-6 flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600 px-2 transition-colors">
                  <ChevronUp size={14} /> 上移
                </button>
                <div className="w-px h-3 bg-gray-300"></div>
                <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600 px-2 transition-colors">
                  <ChevronDown size={14} /> 下移
                </button>
                <div className="w-px h-3 bg-gray-300"></div>
                <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600 px-2 transition-colors">
                  <MoreHorizontal size={14} /> 更多
                </button>
                <button className="flex items-center gap-1 text-xs text-blue-600 border border-blue-200 bg-blue-50 rounded-full px-3 py-1 ml-1 hover:bg-blue-100 transition-colors">
                  <Sparkles size={12} /> <span className="font-medium">优化目录</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Actions */}
      <footer className="bg-white border-t border-gray-200 py-3 px-6 flex justify-center flex-shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-lg font-medium transition-colors"
          onClick={() => navigate('/generate-content')}
        >
          确认目录
        </button>
      </footer>
    </div>
  );
}
