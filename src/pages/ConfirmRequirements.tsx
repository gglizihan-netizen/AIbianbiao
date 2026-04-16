import React from 'react';
import { Home, RefreshCw, Diamond, Check, Edit3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ConfirmRequirements() {
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
            <p className="text-xs text-gray-400">最近修改: 12月20日 09:09</p>
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
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-medium">2</div>
            <span className="text-sm font-medium text-blue-600">确认招标要求</span>
          </div>
          <div className="w-8 border-t border-dashed border-gray-300 mx-1"></div>
          <div onClick={() => navigate('/generate-directory')} className="flex items-center gap-2 opacity-50 cursor-pointer hover:opacity-100">
            <div className="w-6 h-6 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center text-xs font-medium">3</div>
            <span className="text-sm text-gray-500">生成目录</span>
          </div>
          <div className="w-8 border-t border-dashed border-gray-300 mx-1"></div>
          <div onClick={() => navigate('/generate-content')} className="flex items-center gap-2 opacity-50 cursor-pointer hover:opacity-100">
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
        {/* Left Column: 招标文件 */}
        <div className="flex-[2] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 flex-shrink-0">
            <div className="w-1 h-4 bg-gradient-to-b from-orange-400 to-blue-500 rounded-full"></div>
            <h2 className="text-base font-bold text-gray-800">招标文件</h2>
          </div>
          <div className="flex-1 p-8 flex flex-col items-center justify-center overflow-y-auto bg-white rounded-b-xl">
             {/* Simulated Document Content */}
             <div className="w-full max-w-sm text-center space-y-6">
                <div className="text-lg tracking-[0.5em] text-gray-800 relative inline-block">
                  中华人民共和国
                  <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-gray-300 text-xs">↵</span>
                </div>
                <div className="text-2xl font-bold tracking-widest text-gray-900 relative inline-block">
                  房屋建筑和市政工程
                  <span className="absolute -right-5 top-1/2 -translate-y-1/2 text-gray-300 text-xs">↵</span>
                </div>
                <div className="text-4xl font-bold tracking-widest text-gray-900 relative inline-block mt-4">
                  标准施工招标文件
                  <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-gray-300 text-xs">↵</span>
                </div>
                <div className="text-lg tracking-widest text-gray-800 relative inline-block mt-8">
                  2010 年版
                  <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-gray-300 text-xs">↵</span>
                </div>
                <div className="flex flex-col items-center gap-2 mt-12 text-gray-300">
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: 项目信息 */}
        <div className="flex-[3] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 flex-shrink-0">
            <div className="w-1 h-4 bg-gradient-to-b from-orange-400 to-blue-500 rounded-full"></div>
            <h2 className="text-base font-bold text-gray-800">项目信息</h2>
          </div>
          <div className="flex-1 p-6 overflow-y-auto">
            
            {/* 招标项目名称 */}
            <div className="mb-6">
              <label className="flex items-center gap-1 text-sm text-gray-700 mb-2">
                <span className="text-red-500">*</span>招标项目名称：
              </label>
              <input 
                type="text" 
                defaultValue="南通市东港排水有限公司四期扩容工程土建二标段" 
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
              />
            </div>

            {/* 招标要求 */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <label className="flex items-center gap-1 text-sm text-gray-700">
                  <span className="text-red-500">*</span>招标要求
                </label>
                <button className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded hover:bg-blue-100 transition-colors">查看示例</button>
              </div>
              <textarea 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 h-32 resize-none leading-relaxed text-gray-700"
                defaultValue="项目概况：本项目投资估算 5865.2 万元，工程概算4969.5646万元，其中建安工程造价 4969.5646 万元，建设规模：主要对绍兴剧院进行改造，包括对剧院内部部分功能调整、拆除、新建、室内装修、外立面改造、安装改造、辅房改造、场地改造以及相关设施设备安装等，涉及总建筑面积3415.85平米，其中地上建筑建筑面积约3239.97平米，地下建筑面积约175.88平方，建设地点：越城区。
招标范围：主要包括基坑支护、地下室、主体、幕墙、室内精装修、安装、场外等工程（具体详见招标控制价及施工图纸），其中配电设备由甲方单独招标或自行采购，不列入本次招标范围。具体范围及内容详见精装修施工图纸及审定后工程量清单。"
              ></textarea>
            </div>

            {/* 招标文件提供目录 & 技术评分标准 */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <label className="text-sm text-gray-700">招标文件提供目录</label>
                  <button className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded hover:bg-blue-100 transition-colors">查看示例</button>
                </div>
                <textarea 
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 h-48 resize-none leading-relaxed text-gray-700"
                  defaultValue="一、总体施工部署；
二、难点、重点分析；
三、主要施工方案；
四、工程质量保证措施；
五、施工计划和保证措施；
六、安全生产、文明施工、环境保护措施；
七、管理人员配备； 八、施工设备配备； 九、其他。"
                ></textarea>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <label className="text-sm text-gray-700">技术评分标准</label>
                  <button className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded hover:bg-blue-100 transition-colors">查看示例</button>
                </div>
                <textarea 
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 h-48 resize-none"
                ></textarea>
              </div>
            </div>

            {/* 目录生成方式 */}
            <div className="mb-6 bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <label className="flex items-center gap-1 text-sm text-gray-700 font-medium">
                  <span className="text-red-500">*</span>目录生成方式
                </label>
                <span className="text-xs text-gray-400">检测到招标文件同时提供投标文件组成目录/技术评分标准，请选择目录生成方式</span>
              </div>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="directory-generation" defaultChecked className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">融合投标文件组成目录/评分标准（荐）</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="directory-generation" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">仅按评分标准生成</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="directory-generation" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                  <span className="text-sm text-gray-700">仅按投标文件组成目录生成</span>
                </label>
              </div>
            </div>

            {/* 货物清单 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-700 font-medium">货物清单</label>
                  <span className="text-xs text-gray-400">请上传项目清单文件，导入zf格式文件将自动解析清单文件</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs transition-colors">
                  上传清单文件
                </button>
              </div>
              <div className="w-full border border-gray-200 rounded-lg h-24 bg-gray-50/50"></div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer Actions */}
      <footer className="bg-white border-t border-gray-200 py-3 px-6 flex justify-center flex-shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-lg font-medium transition-colors"
          onClick={() => navigate('/generate-directory')}
        >
          下一步
        </button>
      </footer>
    </div>
  );
}
