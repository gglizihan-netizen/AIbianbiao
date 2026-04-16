import React, { useState } from 'react';
import { Home, ChevronRight, UploadCloud, HelpCircle, ChevronDown, AlignLeft, AlignCenter, AlignRight, AlignJustify, Upload, Info, RefreshCw, Diamond, ChevronUp, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FontSettingRow = ({ title, hasCollapse = false }: { title: string, hasCollapse?: boolean }) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm font-medium text-gray-800">{title}</span>
      {hasCollapse && <ChevronDown size={16} className="text-gray-400" />}
    </div>
    <div className="grid grid-cols-3 gap-4">
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 w-12">字体</span>
        <div className="flex-1 border border-gray-200 rounded px-2 py-1.5 flex items-center justify-between bg-white">
          <span className="text-sm">宋体</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 w-12">字号</span>
        <div className="flex-1 border border-gray-200 rounded px-2 py-1.5 flex items-center justify-between bg-white">
          <span className="text-sm">三号</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 w-12">加粗</span>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1 cursor-pointer">
            <input type="radio" name={`${title}-bold`} className="w-3.5 h-3.5 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">是</span>
          </label>
          <label className="flex items-center gap-1 cursor-pointer">
            <input type="radio" name={`${title}-bold`} defaultChecked className="w-3.5 h-3.5 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span className="text-sm text-gray-700">否</span>
          </label>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 w-12">首行缩进</span>
        <div className="flex-1 flex items-center border border-gray-200 rounded bg-white overflow-hidden">
          <input type="text" defaultValue="0" className="w-full px-2 py-1.5 text-sm outline-none" />
          <span className="text-xs text-gray-400 px-2 bg-gray-50 border-l border-gray-200 h-full flex items-center">字符</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 w-12">行间距</span>
        <div className="flex-1 flex items-center border border-gray-200 rounded bg-white overflow-hidden">
          <input type="text" defaultValue="24" className="w-full px-2 py-1.5 text-sm outline-none" />
          <div className="flex items-center px-1 bg-gray-50 border-l border-gray-200 h-full cursor-pointer">
             <span className="text-xs text-gray-400 mr-1">磅</span>
             <ChevronDown size={12} className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 w-12">对齐方式</span>
        <div className="flex-1 flex items-center gap-1">
          <button className="p-1.5 bg-gray-100 rounded hover:bg-gray-200"><AlignLeft size={14} className="text-gray-600" /></button>
          <button className="p-1.5 hover:bg-gray-100 rounded"><AlignCenter size={14} className="text-gray-600" /></button>
          <button className="p-1.5 hover:bg-gray-100 rounded"><AlignRight size={14} className="text-gray-600" /></button>
          <button className="p-1.5 hover:bg-gray-100 rounded"><AlignJustify size={14} className="text-gray-600" /></button>
        </div>
      </div>
    </div>
  </div>
);

export default function CreateTechnicalBid() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white px-6 py-3 flex items-center justify-between border-b border-gray-100 sticky top-0 z-50 relative">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="p-2 hover:bg-gray-50 rounded-lg text-gray-500">
            <Home size={20} />
          </button>
          <div className="h-8 w-px bg-gray-200"></div>
          <div>
            <h1 className="text-base font-bold text-gray-800">技术标文件</h1>
            <p className="text-xs text-gray-400">最近修改: 12月20日 09:09</p>
          </div>
        </div>

        {/* Stepper */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div onClick={() => navigate('/create-technical-bid')} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-medium">1</div>
            <span className="text-sm font-medium text-blue-600">创建投标方案</span>
          </div>
          <div className="w-8 border-t border-dashed border-gray-300 mx-1"></div>
          <div onClick={() => navigate('/confirm-requirements')} className="flex items-center gap-2 opacity-50 cursor-pointer hover:opacity-100">
            <div className="w-6 h-6 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center text-xs font-medium">2</div>
            <span className="text-sm text-gray-500">确认招标要求</span>
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

      {/* Title Banner */}
      <div className="px-6 py-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-gray-900">标桥AI编标</span>
          <span className="text-[#4F6BFF] font-normal">上传项目文件，即刻开启AI编标之旅</span>
        </h2>
      </div>

      <main className="flex-1 px-6 pb-24 w-full">
        {/* Top Section: Upload */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-800 mb-3">导入招标文件</h3>
          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 w-[320px] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-400 text-white text-xs px-3 py-1 rounded-bl-lg flex items-center gap-1">
              工程类 <ChevronDown size={12} />
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-md shadow-blue-500/20">
              <FileText size={24} />
            </div>
            <p className="text-sm text-gray-600 mb-4">支持docx、PDF、ZF格式的招标文件</p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 text-sm hover:from-blue-600 hover:to-blue-700 transition-colors shadow-md shadow-blue-500/20">
              <UploadCloud size={16} />
              导入文件
            </button>
          </div>
        </div>

        {/* Main Settings Area */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <h3 className="text-sm font-bold text-gray-800">文件样式设置</h3>
            <button className="text-xs text-blue-600 border border-blue-200 bg-blue-50 px-2 py-1 rounded hover:bg-blue-100 transition-colors">
              AI提取暗标格式
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Toolbar */}
            <div className="bg-blue-50/50 border-b border-gray-200 px-4 py-3 flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">文件样式方案</span>
              <div className="flex-1 max-w-xs relative">
                <select className="w-full appearance-none border border-gray-300 rounded-md py-1.5 pl-3 pr-8 text-sm bg-white outline-none focus:border-blue-500">
                  <option>方案名称</option>
                </select>
                <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">保存方案</button>
            </div>

            <div className="flex">
              {/* Left Column: Visual Settings */}
              <div className="w-[45%] border-r border-gray-200 p-6 bg-[#FAFBFC]">
                {/* 正文设置 */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-800 mb-4">正文设置</h4>
                  <div className="flex items-center gap-6 mb-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className="text-sm text-gray-700">生成表格</span>
                      <div className="w-8 h-4 bg-blue-600 rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className="text-sm text-gray-700">图文并茂</span>
                      <div className="w-8 h-4 bg-blue-600 rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </label>
                    <div className="flex gap-2">
                       <span className="text-[10px] text-gray-500 border border-gray-200 rounded px-1.5 py-0.5 bg-white">网络图片</span>
                       <span className="text-[10px] text-blue-500 border border-blue-200 rounded px-1.5 py-0.5 bg-blue-50">私人图库</span>
                       <span className="text-[10px] text-blue-500 border border-blue-200 rounded px-1.5 py-0.5 bg-blue-50 flex items-center gap-0.5">智能图形 <Upload size={10}/></span>
                    </div>
                  </div>
                  
                  <div className="mb-2 text-sm text-gray-700">布局方式</div>
                  <div className="flex gap-4 mb-4">
                    <div className="w-24 h-32 border-2 border-blue-500 rounded-lg bg-blue-50 relative p-2 flex flex-col gap-1.5 cursor-pointer">
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white border-2 border-white">✓</div>
                      <div className="w-full h-2 bg-blue-200 rounded-sm"></div>
                      <div className="w-3/4 h-2 bg-blue-200 rounded-sm"></div>
                      <div className="w-full h-2 bg-blue-200 rounded-sm"></div>
                      <div className="w-5/6 h-2 bg-blue-200 rounded-sm"></div>
                      <div className="mt-auto text-center text-xs text-blue-600 font-medium">纯文字</div>
                    </div>
                    <div className="w-24 h-32 border border-gray-200 rounded-lg bg-white relative p-2 flex gap-1.5 cursor-pointer hover:border-blue-300">
                      <div className="absolute -top-2 -right-2 w-5 h-5 border border-gray-300 bg-white rounded-full"></div>
                      <div className="w-1/3 h-full bg-gray-100 rounded-sm"></div>
                      <div className="flex-1 flex flex-col gap-1.5">
                        <div className="w-full h-2 bg-gray-100 rounded-sm"></div>
                        <div className="w-full h-2 bg-gray-100 rounded-sm"></div>
                        <div className="w-full h-2 bg-gray-100 rounded-sm"></div>
                      </div>
                      <div className="absolute bottom-2 left-0 w-full text-center text-xs text-gray-500">左右布局</div>
                    </div>
                    <div className="w-24 h-32 border border-gray-200 rounded-lg bg-white relative p-2 flex flex-col gap-1.5 cursor-pointer hover:border-blue-300">
                      <div className="absolute -top-2 -right-2 w-5 h-5 border border-gray-300 bg-white rounded-full"></div>
                      <div className="w-full h-1/2 bg-gray-100 rounded-sm"></div>
                      <div className="w-full h-2 bg-gray-100 rounded-sm"></div>
                      <div className="w-full h-2 bg-gray-100 rounded-sm"></div>
                      <div className="absolute bottom-2 left-0 w-full text-center text-xs text-gray-500">上下布局</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">正文主语</span>
                    <span className="text-xs text-blue-600 border border-blue-200 bg-blue-50 px-2 py-0.5 rounded-full">无主语</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">我单位 <span className="w-3 h-3 border border-gray-300 rounded-sm flex items-center justify-center">✎</span></span>
                  </div>
                </div>

                {/* 序号样式 */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <h4 className="text-sm font-bold text-gray-800">序号样式</h4>
                    <span className="text-sm text-gray-700 ml-2">Word自动编号</span>
                    <HelpCircle size={14} className="text-gray-400" />
                    <div className="w-8 h-4 bg-blue-600 rounded-full relative ml-1">
                      <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="border border-gray-200 bg-white rounded-lg p-3 relative cursor-pointer hover:border-blue-300">
                      <div className="absolute -top-2 -right-2 w-5 h-5 border border-gray-300 bg-white rounded-full"></div>
                      <div className="text-[10px] text-gray-600 leading-tight space-y-1">
                        <div><span className="font-bold">1</span> 标题1</div>
                        <div><span className="font-bold">1.1</span> 标题2</div>
                        <div><span className="font-bold">1.1.1</span> 标题3</div>
                        <div><span className="font-bold">1.1.1.1</span> 标题4</div>
                        <div><span className="font-bold">1.1.1.1.1</span> 标题5</div>
                        <div><span className="font-bold">1.1.1.1.1.1</span> 标题6</div>
                      </div>
                    </div>
                    <div className="border border-gray-200 bg-white rounded-lg p-3 relative cursor-pointer hover:border-blue-300">
                      <div className="absolute -top-2 -right-2 w-5 h-5 border border-gray-300 bg-white rounded-full"></div>
                      <div className="text-[10px] text-gray-600 leading-tight space-y-1">
                        <div><span className="font-bold">1</span> 标题1</div>
                        <div><span className="font-bold">1.1</span> 标题2</div>
                        <div><span className="font-bold">1.1.1</span> 标题3</div>
                        <div><span className="font-bold">1.1.1.1</span> 标题4</div>
                        <div><span className="font-bold">1.1.1.1.1</span> 标题5</div>
                        <div><span className="font-bold">1.1.1.1.1.1</span> 标题6</div>
                      </div>
                    </div>
                    <div className="border border-gray-200 bg-white rounded-lg p-3 relative cursor-pointer hover:border-blue-300">
                      <div className="absolute -top-2 -right-2 w-5 h-5 border border-gray-300 bg-white rounded-full"></div>
                      <div className="text-[10px] text-gray-600 leading-tight space-y-1">
                        <div><span className="font-bold">1</span> 标题1</div>
                        <div><span className="font-bold">1.1</span> 标题2</div>
                        <div><span className="font-bold">1.1.1</span> 标题3</div>
                        <div><span className="font-bold">1.1.1.1</span> 标题4</div>
                        <div><span className="font-bold">1.1.1.1.1</span> 标题5</div>
                        <div><span className="font-bold">1.1.1.1.1.1</span> 标题6</div>
                      </div>
                    </div>
                    <div className="border border-dashed border-gray-300 bg-gray-50 rounded-lg p-3 flex items-center justify-center cursor-pointer hover:bg-gray-100">
                      <span className="text-xs text-gray-500">自定义序号</span>
                    </div>
                  </div>
                </div>

                {/* 封面样式 */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-800 mb-4">封面样式</h4>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="aspect-[1/1.4] border-2 border-blue-500 rounded-lg relative overflow-hidden cursor-pointer">
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white border-2 border-white z-10">✓</div>
                      <div className="w-full h-full bg-white flex flex-col items-center justify-center p-2">
                         <div className="text-[8px] text-gray-400 mb-2">XX 项目</div>
                         <div className="text-sm font-bold text-gray-800 mb-4">投标文件</div>
                         <div className="w-full h-1 bg-blue-500 mb-1"></div>
                         <div className="w-full h-0.5 bg-blue-200"></div>
                      </div>
                    </div>
                    <div className="aspect-[1/1.4] border border-gray-200 rounded-lg relative overflow-hidden cursor-pointer hover:border-blue-300">
                      <div className="absolute -top-2 -right-2 w-5 h-5 border border-gray-300 bg-white rounded-full z-10"></div>
                      <div className="w-full h-full bg-white flex flex-col items-center justify-center p-2 relative">
                         <div className="absolute top-0 left-0 w-full h-8 bg-blue-50"></div>
                         <div className="text-[8px] text-gray-400 mb-2 z-10">XX 项目</div>
                         <div className="text-sm font-bold text-blue-600 mb-4 z-10">投标文件</div>
                         <div className="absolute bottom-0 left-0 w-full h-6 bg-blue-100 rounded-t-full"></div>
                      </div>
                    </div>
                    <div className="aspect-[1/1.4] border border-gray-200 rounded-lg relative overflow-hidden cursor-pointer hover:border-blue-300">
                      <div className="absolute -top-2 -right-2 w-5 h-5 border border-gray-300 bg-white rounded-full z-10"></div>
                      <div className="w-full h-full bg-white flex flex-col items-center p-2 relative">
                         <div className="text-[8px] text-gray-400 mt-2 mb-1">XX 项目</div>
                         <div className="text-sm font-bold text-gray-800 mb-2">投标文件</div>
                         <div className="text-[6px] text-gray-400 self-start mt-auto mb-4 space-y-0.5">
                           <div>投标人：</div>
                           <div>法定代表人：</div>
                           <div>日期：</div>
                         </div>
                         <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-blue-600 to-blue-400"></div>
                      </div>
                    </div>
                    <div className="aspect-[1/1.4] border border-gray-200 rounded-lg relative overflow-hidden cursor-pointer hover:border-blue-300">
                      <div className="absolute -top-2 -right-2 w-5 h-5 border border-gray-300 bg-white rounded-full z-10"></div>
                      <div className="w-full h-full bg-white flex flex-col items-center p-2 relative">
                         <div className="text-[8px] text-gray-400 mt-2 mb-1">XX 项目</div>
                         <div className="text-sm font-bold text-blue-500 mb-2">投标文件</div>
                         <div className="absolute bottom-0 left-0 w-full h-12 bg-gray-100 flex flex-col justify-end">
                           <div className="w-full h-1 bg-blue-200 mb-1"></div>
                           <div className="w-full h-2 bg-blue-400"></div>
                         </div>
                      </div>
                    </div>
                    <div className="aspect-[1/1.4] border border-gray-200 rounded-lg relative overflow-hidden cursor-pointer hover:border-blue-300">
                      <div className="absolute -top-2 -right-2 w-5 h-5 border border-gray-300 bg-white rounded-full z-10"></div>
                      <div className="w-full h-full bg-white flex flex-col items-center p-2 relative">
                         <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                         <div className="text-[8px] text-gray-400 mt-4 mb-1">XX 项目</div>
                         <div className="text-sm font-bold text-blue-500 mb-2">投标文件</div>
                         <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
                      </div>
                    </div>
                    <div className="aspect-[1/1.4] border border-gray-200 bg-gray-50 rounded-lg relative flex items-center justify-center cursor-pointer hover:bg-gray-100">
                      <div className="absolute -top-2 -right-2 w-5 h-5 border border-gray-300 bg-white rounded-full z-10"></div>
                      <span className="text-sm text-gray-500 font-medium">无封面</span>
                    </div>
                  </div>
                </div>

                {/* 其他设置 */}
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-4">其他设置</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">生成文档目录</span>
                    <HelpCircle size={14} className="text-gray-400" />
                    <div className="w-8 h-4 bg-blue-600 rounded-full relative ml-2">
                      <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Text Settings */}
              <div className="flex-1 p-6 bg-white">
                {/* 页面设置 */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-800 mb-4">页面设置</h4>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 w-12">纸张方向</span>
                      <div className="flex-1 border border-gray-200 rounded px-2 py-1.5 flex items-center justify-between">
                        <span className="text-sm">竖</span>
                        <ChevronDown size={14} className="text-gray-400" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 w-12">上边距</span>
                      <div className="flex-1 flex items-center border border-gray-200 rounded overflow-hidden">
                        <input type="text" defaultValue="2.54" className="w-full px-2 py-1.5 text-sm outline-none" />
                        <span className="text-xs text-gray-400 px-2 bg-gray-50 border-l border-gray-200 h-full flex items-center">厘米</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 w-12">下边距</span>
                      <div className="flex-1 flex items-center border border-gray-200 rounded overflow-hidden">
                        <input type="text" defaultValue="2.54" className="w-full px-2 py-1.5 text-sm outline-none" />
                        <span className="text-xs text-gray-400 px-2 bg-gray-50 border-l border-gray-200 h-full flex items-center">厘米</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 w-12">左边距</span>
                      <div className="flex-1 flex items-center border border-gray-200 rounded overflow-hidden">
                        <input type="text" defaultValue="3.18" className="w-full px-2 py-1.5 text-sm outline-none" />
                        <span className="text-xs text-gray-400 px-2 bg-gray-50 border-l border-gray-200 h-full flex items-center">厘米</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 w-12">右边距</span>
                      <div className="flex-1 flex items-center border border-gray-200 rounded overflow-hidden">
                        <input type="text" defaultValue="3.18" className="w-full px-2 py-1.5 text-sm outline-none" />
                        <span className="text-xs text-gray-400 px-2 bg-gray-50 border-l border-gray-200 h-full flex items-center">厘米</span>
                      </div>
                    </div>
                  </div>
                </div>

                <FontSettingRow title="正文文字" />
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-800 mb-4">标题文字</h4>
                  <FontSettingRow title="一级标题" hasCollapse />
                  <FontSettingRow title="二级标题" hasCollapse />
                  <FontSettingRow title="三级标题" hasCollapse />
                  <FontSettingRow title="四级标题" hasCollapse />
                  <FontSettingRow title="五级标题" hasCollapse />
                  <FontSettingRow title="六级标题" hasCollapse />
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-800 mb-4">表格设置</h4>
                  <FontSettingRow title="表头" hasCollapse />
                  <FontSettingRow title="表格内容" hasCollapse />
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h4 className="text-sm font-bold text-gray-800">目录设置</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-700">生成文档目录</span>
                      <HelpCircle size={14} className="text-gray-400" />
                      <div className="w-8 h-4 bg-blue-600 rounded-full relative ml-1">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <FontSettingRow title="目录标题" hasCollapse />
                  <FontSettingRow title="目录正文" hasCollapse />
                </div>

                <div className="flex justify-center mt-4">
                  <button className="text-blue-500 text-sm flex items-center gap-1 hover:text-blue-600">
                    收起 <ChevronUp size={16} />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Pages & Materials */}
        <div className="mt-8 space-y-6">
          {/* 方案页数 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-bold text-gray-800 mb-6">方案页数</h3>
            <div className="relative px-2 mb-8">
              <div className="h-1 bg-blue-100 rounded-full w-full">
                <div className="h-full bg-blue-500 rounded-full w-[20%] relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow cursor-pointer"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-blue-300 mt-2">
                <span>0</span>
                <span>100</span>
                <span>200</span>
                <span>300</span>
                <span>400</span>
                <span>500</span>
              </div>
              <div className="absolute right-0 -top-3 flex items-center gap-2">
                <input type="text" defaultValue="200" className="w-16 border border-gray-200 rounded px-2 py-1 text-sm text-center outline-none" />
                <span className="text-sm text-gray-600">页</span>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              根据您设置的布局、页边距、字号的不同，最终生成的字数会有差别。例如100页的五号/单倍行距会比小四/1.5倍行距生成大约多出一倍的字数，以满足方案页数要求。
            </p>
          </div>

          {/* 标书素材 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-bold text-gray-800">标书素材</h3>
                <span className="text-xs text-gray-400">上传本项目相关的素材，ai生成内容时将自动进行参考</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm flex items-center gap-1.5 transition-colors">
                <UploadCloud size={14} /> 素材库挑选
              </button>
            </div>
            <div className="bg-blue-50/50 px-6 py-2 flex text-xs text-gray-500 font-medium">
              <div className="w-16">序号</div>
              <div className="flex-1">素材名称</div>
              <div className="w-48">素材标签</div>
              <div className="w-24 text-center">操作</div>
            </div>
            <div className="py-16 flex flex-col items-center justify-center text-gray-400">
              <div className="w-24 h-20 bg-blue-50 rounded-lg mb-3 relative flex items-center justify-center">
                {/* Simple placeholder illustration */}
                <div className="absolute bottom-2 w-16 h-1 bg-blue-100 rounded-full"></div>
                <div className="absolute bottom-4 w-12 h-1 bg-blue-100 rounded-full"></div>
                <UploadCloud size={32} className="text-blue-200" />
              </div>
              <span className="text-sm">暂无相关内容</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Actions */}
      <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-3 px-6 flex justify-center z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => navigate('/confirm-requirements')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-lg font-medium transition-colors"
        >
          下一步
        </button>
      </footer>
    </div>
  );
}
