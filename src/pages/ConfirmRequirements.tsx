import React, { useState, useEffect, useRef } from 'react';
import { Home, RefreshCw, Diamond, Check, Edit3, ChevronUp, CheckCircle2, FileText } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

type FieldStatus = 'parsing' | 'streaming' | 'completed';
type FieldType = 'text' | 'datetime' | 'markdown';

interface Field {
  id: string;
  title: string;
  status: FieldStatus;
  content: string;
  fullContent: string;
  isExpanded: boolean;
  type: FieldType;
  isEditing?: boolean;
}

function parseMarkdownToHtml(md: string) {
  if (!md) return '';
  if (md.includes('<ul') || md.includes('<p>') || md.includes('<br>')) return md;
  
  let html = md;
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  const lines = html.split('\n');
  let inList = false;
  let out = [];
  for (let line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      if (!inList) {
        out.push('<ul>');
        inList = true;
      }
      out.push(`<li>${trimmed.substring(2)}</li>`);
    } else {
      if (inList) {
        out.push('</ul>');
        inList = false;
      }
      if (trimmed) {
        out.push(`<p>${trimmed}</p>`);
      }
    }
  }
  if (inList) out.push('</ul>');
  
  return out.join('');
}

const InPlaceEditable = ({
  type,
  value,
  onChange,
  onFocus,
  onBlur,
  maxLength,
}: {
  type: string;
  value: string;
  onChange: (val: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  maxLength?: number;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (contentRef.current && !isFocused) {
       if (type === 'markdown') {
         contentRef.current.innerHTML = parseMarkdownToHtml(value);
       } else {
         contentRef.current.innerText = value;
       }
    }
  }, [value, type, isFocused]);

  if (type === 'datetime') {
    return (
      <input
        type="datetime-local"
        className="w-full sm:w-auto bg-transparent text-gray-700 border-none outline-none focus:outline-none focus:ring-0 p-0 m-0 text-sm leading-relaxed cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          setIsFocused(true);
          onFocus();
        }}
        onBlur={() => {
          setIsFocused(false);
          onBlur();
        }}
        onClick={(e) => e.stopPropagation()}
      />
    );
  }

  return (
    <div
      ref={contentRef}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onFocus={(e) => {
         setIsFocused(true);
         onFocus();
      }}
      onBlur={(e) => {
        setIsFocused(false);
        const newValue = type === 'markdown' ? e.currentTarget.innerHTML : e.currentTarget.innerText;
        if (maxLength && newValue.length > maxLength) {
           onChange(newValue.substring(0, maxLength));
        } else {
           onChange(newValue);
        }
        onBlur();
      }}
      onClick={(e) => e.stopPropagation()}
      onPaste={(e) => {
        if (type === 'text') {
          e.preventDefault();
          const text = e.clipboardData?.getData('text/plain');
          if (text) {
            document.execCommand('insertText', false, text);
          }
        }
      }}
      className={`outline-none focus:outline-none break-all whitespace-pre-wrap min-h-[24px] cursor-text w-full max-w-full overflow-hidden ${
        type === 'markdown' 
          ? '[&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-2 [&_li]:mb-0 [&_p]:mb-2 last:[&_p]:mb-0 [&_strong]:font-bold [&_strong]:text-gray-900 border border-transparent focus:border-blue-200 focus:bg-blue-50/30 rounded-md -mx-2 px-2 py-1 transition-colors' 
          : 'border border-transparent focus:border-blue-200 focus:bg-blue-50/30 rounded-md -mx-2 px-2 py-1 transition-colors'
      }`}
    />
  );
};


const LIST_CONTENT = '- **土石方工程：**包含土方开挖、土方回填、场地平整等，预计工程量为约 15,000 立方米。\n- **主体结构工程：**包含混凝土浇筑、钢筋绑扎、模板安拆等，总建筑面积约 3415.85 平米。\n- **装饰装修工程：**室内地面找平及铺贴、墙面刮腻子及乳胶漆、天花板吊顶等工艺。\n- **机电安装工程：**强弱电线缆敷设、给排水管道安装、消防系统及通风空调设备安装。- **土石方工程：**包含土方开挖、土方回填、场地平整等，预计工程量为约 15,000 立方米。\n- **主体结构工程：**包含混凝土浇筑、钢筋绑扎、模板安拆等，总建筑面积约 3415.85 平米。\n- **装饰装修工程：**室内地面找平及铺贴、墙面刮腻子及乳胶漆、天花板吊顶等工艺。\n- **机电安装工程：**强弱电线缆敷设、给排水管道安装、消防系统及通风空调设备安装。- **土石方工程：**包含土方开挖、土方回填、场地平整等，预计工程量为约 15,000 立方米。\n- **主体结构工程：**包含混凝土浇筑、钢筋绑扎、模板安拆等，总建筑面积约 3415.85 平米。\n- **装饰装修工程：**室内地面找平及铺贴、墙面刮腻子及乳胶漆、天花板吊顶等工艺。\n- **机电安装工程：**强弱电线缆敷设、给排水管道安装、消防系统及通风空调设备安装。- **土石方工程：**包含土方开挖、土方回填、场地平整等，预计工程量为约 15,000 立方米。\n- **主体结构工程：**包含混凝土浇筑、钢筋绑扎、模板安拆等，总建筑面积约 3415.85 平米。\n- **装饰装修工程：**室内地面找平及铺贴、墙面刮腻子及乳胶漆、天花板吊顶等工艺。\n- **机电安装工程：**强弱电线缆敷设、给排水管道安装、消防系统及通风空调设备安装。- **土石方工程：**包含土方开挖、土方回填、场地平整等，预计工程量为约 15,000 立方米。\n- **主体结构工程：**包含混凝土浇筑、钢筋绑扎、模板安拆等，总建筑面积约 3415.85 平米。\n- **装饰装修工程：**室内地面找平及铺贴、墙面刮腻子及乳胶漆、天花板吊顶等工艺。\n- **机电安装工程：**强弱电线缆敷设、给排水管道安装、消防系统及通风空调设备安装。';

const DRAW_CONTENT = '- **建筑专业图纸（建施）：**一层至屋顶层平面布置图、各向立面图、剖面图及节点详图。\n- **结构专业图纸（结施）：**基础图、梁板柱配筋图、钢结构节点图。\n- **给排水专业图纸（水施）：**给排水首层、标准层平面图及系统轴测图。\n- **电气专业图纸（电施）：**照明及动力平面图、弱电智能化系统布线图。- **建筑专业图纸（建施）：**一层至屋顶层平面布置图、各向立面图、剖面图及节点详图。\n- **结构专业图纸（结施）：**基础图、梁板柱配筋图、钢结构节点图。\n- **给排水专业图纸（水施）：**给排水首层、标准层平面图及系统轴测图。\n- **电气专业图纸（电施）：**照明及动力平面图、弱电智能化系统布线图。- **建筑专业图纸（建施）：**一层至屋顶层平面布置图、各向立面图、剖面图及节点详图。\n- **结构专业图纸（结施）：**基础图、梁板柱配筋图、钢结构节点图。\n- **给排水专业图纸（水施）：**给排水首层、标准层平面图及系统轴测图。\n- **电气专业图纸（电施）：**照明及动力平面图、弱电智能化系统布线图。- **建筑专业图纸（建施）：**一层至屋顶层平面布置图、各向立面图、剖面图及节点详图。\n- **结构专业图纸（结施）：**基础图、梁板柱配筋图、钢结构节点图。\n- **给排水专业图纸（水施）：**给排水首层、标准层平面图及系统轴测图。\n- **电气专业图纸（电施）：**照明及动力平面图、弱电智能化系统布线图。- **建筑专业图纸（建施）：**一层至屋顶层平面布置图、各向立面图、剖面图及节点详图。\n- **结构专业图纸（结施）：**基础图、梁板柱配筋图、钢结构节点图。\n- **给排水专业图纸（水施）：**给排水首层、标准层平面图及系统轴测图。\n- **电气专业图纸（电施）：**照明及动力平面图、弱电智能化系统布线图。';

const getInitialFields = (isListUploaded: boolean, isDrawingsUploaded: boolean): Field[] => [
  {
    id: 'name',
    title: '项目名称',
    status: 'parsing',
    content: '',
    fullContent: '南通市东港排水有限公司四期扩容工程土建二标段',
    isExpanded: false,
    type: 'text'
  },
  {
    id: 'time',
    title: '开标时间',
    status: 'parsing',
    content: '',
    fullContent: '2025-06-17T09:30',
    isExpanded: false,
    type: 'datetime'
  },
  {
    id: 'req',
    title: '招标要求',
    status: 'parsing',
    content: '',
    fullContent: '- **项目概况：**本项目投资估算 5865.2 万元，工程概算 4969.5646 万元，其中建安工程造价 4969.5646 万元。建设规模：主要对绍兴剧院进行改造，包括对剧院内部部分功能调整、拆除、新建、室内装修、外立面改造、安装改造、辅房改造、场地改造以及相关设施设备安装等，涉及总建筑面积 3415.85 平米，其中地上建筑面积约 3239.97 平米，地下建筑面积约 175.88 平方。建设地点：越城区。\n- **招标范围：**主要包括基坑支护、地下室、主体、幕墙、室内精装修、安装、场外等工程（具体详见招标控制价及施工图纸），其中配电设备由甲方单独招标或自行采购，不列入本次招标范围。具体范围及内容详见精装修施工图纸及审定后工程量清单。- **项目概况：**本项目投资估算 5865.2 万元，工程概算 4969.5646 万元，其中建安工程造价 4969.5646 万元。建设规模：主要对绍兴剧院进行改造，包括对剧院内部部分功能调整、拆除、新建、室内装修、外立面改造、安装改造、辅房改造、场地改造以及相关设施设备安装等，涉及总建筑面积 3415.85 平米，其中地上建筑面积约 3239.97 平米，地下建筑面积约 175.88 平方。建设地点：越城区。\n- **招标范围：**主要包括基坑支护、地下室、主体、幕墙、室内精装修、安装、场外等工程（具体详见招标控制价及施工图纸），其中配电设备由甲方单独招标或自行采购，不列入本次招标范围。具体范围及内容详见精装修施工图纸及审定后工程量清单。- **项目概况：**本项目投资估算 5865.2 万元，工程概算 4969.5646 万元，其中建安工程造价 4969.5646 万元。建设规模：主要对绍兴剧院进行改造，包括对剧院内部部分功能调整、拆除、新建、室内装修、外立面改造、安装改造、辅房改造、场地改造以及相关设施设备安装等，涉及总建筑面积 3415.85 平米，其中地上建筑面积约 3239.97 平米，地下建筑面积约 175.88 平方。建设地点：越城区。\n- **招标范围：**主要包括基坑支护、地下室、主体、幕墙、室内精装修、安装、场外等工程（具体详见招标控制价及施工图纸），其中配电设备由甲方单独招标或自行采购，不列入本次招标范围。具体范围及内容详见精装修施工图纸及审定后工程量清单。- **项目概况：**本项目投资估算 5865.2 万元，工程概算 4969.5646 万元，其中建安工程造价 4969.5646 万元。建设规模：主要对绍兴剧院进行改造，包括对剧院内部部分功能调整、拆除、新建、室内装修、外立面改造、安装改造、辅房改造、场地改造以及相关设施设备安装等，涉及总建筑面积 3415.85 平米，其中地上建筑面积约 3239.97 平米，地下建筑面积约 175.88 平方。建设地点：越城区。\n- **招标范围：**主要包括基坑支护、地下室、主体、幕墙、室内精装修、安装、场外等工程（具体详见招标控制价及施工图纸），其中配电设备由甲方单独招标或自行采购，不列入本次招标范围。具体范围及内容详见精装修施工图纸及审定后工程量清单。',
    isExpanded: false,
    type: 'markdown'
  },
  {
    id: 'score',
    title: '技术评分标准',
    status: 'parsing',
    content: '',
    fullContent: '- **施工组织设计（30分）：**总体部署合理，施工方案科学可行，有针对性地难点重点分析。\n- **项目管理机构（20分）：**项目经理及技术负责人资质合规，团队人员配备齐全且经验丰富。\n- **技术难点及应对措施（20分）：**对复杂工艺和关键节点的解决方案切实有效。\n- **安全文明施工与环保措施（15分）：**满足国家及地方的安全、环卫标准。\n- **其他因素（15分）：**类似工程业绩及企业信誉良好。- **施工组织设计（30分）：**总体部署合理，施工方案科学可行，有针对性地难点重点分析。\n- **项目管理机构（20分）：**项目经理及技术负责人资质合规，团队人员配备齐全且经验丰富。\n- **技术难点及应对措施（20分）：**对复杂工艺和关键节点的解决方案切实有效。\n- **安全文明施工与环保措施（15分）：**满足国家及地方的安全、环卫标准。\n- **其他因素（15分）：**类似工程业绩及企业信誉良好。- **施工组织设计（30分）：**总体部署合理，施工方案科学可行，有针对性地难点重点分析。\n- **项目管理机构（20分）：**项目经理及技术负责人资质合规，团队人员配备齐全且经验丰富。\n- **技术难点及应对措施（20分）：**对复杂工艺和关键节点的解决方案切实有效。\n- **安全文明施工与环保措施（15分）：**满足国家及地方的安全、环卫标准。\n- **其他因素（15分）：**类似工程业绩及企业信誉良好。- **施工组织设计（30分）：**总体部署合理，施工方案科学可行，有针对性地难点重点分析。\n- **项目管理机构（20分）：**项目经理及技术负责人资质合规，团队人员配备齐全且经验丰富。\n- **技术难点及应对措施（20分）：**对复杂工艺和关键节点的解决方案切实有效。\n- **安全文明施工与环保措施（15分）：**满足国家及地方的安全、环卫标准。\n- **其他因素（15分）：**类似工程业绩及企业信誉良好。',
    isExpanded: false,
    type: 'markdown'
  },
  {
    id: 'dir',
    title: '投标文件组成目录',
    status: 'parsing',
    content: '',
    fullContent: '- 一、总体施工部署\n- 二、难点、重点分析\n- 三、主要施工方案\n- 四、工程质量保证措施\n- 五、施工计划和保证措施\n- 六、安全生产、文明施工、环境保护措施\n- 七、管理人员配备\n- 八、施工设备配备\n- 九、其他- 一、总体施工部署\n- 二、难点、重点分析\n- 三、主要施工方案\n- 四、工程质量保证措施\n- 五、施工计划和保证措施\n- 六、安全生产、文明施工、环境保护措施\n- 七、管理人员配备\n- 八、施工设备配备\n- 九、其他- 一、总体施工部署\n- 二、难点、重点分析\n- 三、主要施工方案\n- 四、工程质量保证措施\n- 五、施工计划和保证措施\n- 六、安全生产、文明施工、环境保护措施\n- 七、管理人员配备\n- 八、施工设备配备\n- 九、其他- 一、总体施工部署\n- 二、难点、重点分析\n- 三、主要施工方案\n- 四、工程质量保证措施\n- 五、施工计划和保证措施\n- 六、安全生产、文明施工、环境保护措施\n- 七、管理人员配备\n- 八、施工设备配备\n- 九、其他',
    isExpanded: false,
    type: 'markdown'
  },
  {
    id: 'list',
    title: '项目清单',
    status: 'parsing',
    content: '',
    fullContent: isListUploaded ? LIST_CONTENT : '',
    isExpanded: false,
    type: 'markdown'
  },
  {
    id: 'draw',
    title: '工程图纸',
    status: 'parsing',
    content: '',
    fullContent: isDrawingsUploaded ? DRAW_CONTENT : '',
    isExpanded: false,
    type: 'markdown'
  }
];

const ParsingDots = ({ colorClass = 'bg-blue-500' }: { colorClass?: string }) => (
  <div className="flex items-center gap-[3px]">
    <div className={`w-1.5 h-1.5 ${colorClass} rounded-full animate-bounce`} style={{ animationDelay: '0s', animationDuration: '0.8s' }}></div>
    <div className={`w-2.5 h-1.5 ${colorClass} rounded-full animate-bounce`} style={{ animationDelay: '0.2s', animationDuration: '0.8s' }}></div>
    <div className={`w-1.5 h-1.5 ${colorClass} rounded-full animate-bounce`} style={{ animationDelay: '0.4s', animationDuration: '0.8s' }}></div>
  </div>
);

export default function ConfirmRequirements() {
  const navigate = useNavigate();
  const location = useLocation();
  const projectType = location.state?.projectType || '工程类';
  const uploadedFiles = location.state?.uploadedFiles || { tender: 'example' };
  
  const isListUploaded = projectType === '工程类' ? !!uploadedFiles.list : true;
  const isDrawingsUploaded = projectType === '工程类' ? !!uploadedFiles.drawings : true;

  const initialFields = React.useMemo(() => getInitialFields(isListUploaded, isDrawingsUploaded), [isListUploaded, isDrawingsUploaded]);

  const [fields, setFields] = useState<Field[]>(initialFields);
  const [hoveredFieldId, setHoveredFieldId] = useState<string | null>(null);

  const [initialParsingDone, setInitialParsingDone] = useState(false);

  useEffect(() => {
    if (!initialParsingDone) {
      const isParsing = fields.some(f => f.status === 'parsing' || f.status === 'streaming');
      if (!isParsing) {
        setInitialParsingDone(true);
      }
    }
  }, [fields, initialParsingDone]);

  const [listIgnored, setListIgnored] = useState(false);
  const [drawingsIgnored, setDrawingsIgnored] = useState(false);
  
  const [uploadedListFile, setUploadedListFile] = useState<{name: string, size: string} | null>(null);
  const [uploadedDrawingsFile, setUploadedDrawingsFile] = useState<{name: string, size: string} | null>(null);
  const [listFileStatus, setListFileStatus] = useState<'uploading' | 'parsing' | 'done'>('uploading');
  const [drawingsFileStatus, setDrawingsFileStatus] = useState<'uploading' | 'parsing' | 'done'>('uploading');

  const fileInputRefList = useRef<HTMLInputElement>(null);
  const fileInputRefDrawings = useRef<HTMLInputElement>(null);

  const handleFileUpload = (type: 'list' | 'drawings', e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileInfo = { name: file.name, size: (file.size / 1024 / 1024).toFixed(2) + 'MB' };
    const targetId = type === 'list' ? 'list' : 'draw';
    const targetContent = type === 'list' ? LIST_CONTENT : DRAW_CONTENT;

    if (type === 'list') {
      setUploadedListFile(fileInfo);
      setListFileStatus('parsing');
    } else {
      setUploadedDrawingsFile(fileInfo);
      setDrawingsFileStatus('parsing');
    }

    // Reset input value so the same file can be uploaded again if needed
    if (e.target) {
        e.target.value = '';
    }

    setTimeout(() => {
        const fieldEl = document.getElementById(`field-${targetId}`);
        const containerEl = fieldEl?.closest('.overflow-y-auto');
        if (fieldEl && containerEl) {
           const topPos = fieldEl.getBoundingClientRect().top - containerEl.getBoundingClientRect().top + containerEl.scrollTop;
           containerEl.scrollTo({ top: topPos, behavior: 'smooth' });
        } else if (fieldEl) {
           fieldEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);

    setTimeout(() => {
      setFields(prev => prev.map(f => f.id === targetId ? { ...f, status: 'streaming', fullContent: targetContent, isExpanded: true } : f));
      let currentLength = 0;
      const interval = setInterval(() => {
        currentLength += Math.floor(Math.random() * 3) + 1;
        if (currentLength >= targetContent.length) {
            currentLength = targetContent.length;
            clearInterval(interval);
            setFields(prev => prev.map(f => f.id === targetId ? { ...f, status: 'completed', content: targetContent } : f));
            if (type === 'list') setListFileStatus('done');
            else setDrawingsFileStatus('done');
        } else {
            setFields(prev => prev.map(f => f.id === targetId ? { ...f, content: targetContent.slice(0, currentLength) } : f));
        }
      }, 15);
    }, 500);
  };

  useEffect(() => {
    let unmounted = false;
    const timers: NodeJS.Timeout[] = [];
    const intervals: NodeJS.Timeout[] = [];

    initialFields.forEach((field) => {
      const startDelay = 500 + Math.random() * 2000;
      
      const timer = setTimeout(() => {
        if (unmounted) return;
        setFields(prev => prev.map(f => f.id === field.id ? { ...f, status: 'streaming', isExpanded: true } : f));
        
        let currentLength = 0;
        const interval = setInterval(() => {
           if (unmounted) {
              clearInterval(interval);
              return;
           }
           currentLength += Math.floor(Math.random() * 3) + 1;
           if (currentLength >= field.fullContent.length) {
              currentLength = field.fullContent.length;
              clearInterval(interval);
              setFields(prev => prev.map(f => f.id === field.id ? { ...f, status: 'completed', content: field.fullContent } : f));
           } else {
              setFields(prev => prev.map(f => f.id === field.id ? { ...f, content: field.fullContent.slice(0, currentLength) } : f));
           }
        }, 15);
        intervals.push(interval);
      }, startDelay);
      timers.push(timer);
    });

    return () => {
      unmounted = true;
      timers.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  const toggleExpand = (id: string) => {
    setFields(prev => prev.map(f => f.id === id && f.status !== 'parsing' ? { ...f, isExpanded: !f.isExpanded } : f));
  };

  const setEditingState = (id: string, editing: boolean) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, isEditing: editing } : f));
  };

  const updateFieldContent = (id: string, newContent: string) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, content: newContent, fullContent: newContent } : f));
  };

  const isOverallParsing = !initialParsingDone;
  
  const initialParsingFields = fields.filter(f => f.id !== 'list' && f.id !== 'draw' || initialParsingDone === false);
  const totalLength = initialParsingFields.reduce((acc, f) => acc + f.fullContent.length, 0);
  const currentLength = initialParsingFields.reduce((acc, f) => acc + f.content.length, 0);
  const progressPercent = Math.min(100, Math.floor((currentLength / (totalLength || 1)) * 100));

  const dirField = fields.find(f => f.id === 'dir');
  const scoreField = fields.find(f => f.id === 'score');
  const hasDirValue = dirField && (dirField.fullContent.trim() !== '' || dirField.content.trim() !== '');
  const hasScoreValue = scoreField && (scoreField.fullContent.trim() !== '' || scoreField.content.trim() !== '');
  const showDirMode = hasDirValue && hasScoreValue;

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
          <div className="flex-1 p-8 flex flex-col items-center overflow-y-auto bg-gray-50/50">
             {/* Simulated Document Content */}
             <div className="w-full max-w-lg aspect-[1/1.4] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center justify-center p-12 text-center relative mt-6">
                <div className="text-lg tracking-[0.5em] text-gray-800 mb-8 relative inline-block">
                  中华人民共和国
                  <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-serif italic">↵</span>
                </div>
                <div className="text-2xl font-bold tracking-widest text-gray-900 mb-8 relative inline-block">
                  房屋建筑和市政工程
                  <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-serif italic">↵</span>
                </div>
                <div className="text-4xl font-bold tracking-[0.15em] text-gray-900 mb-12 relative flex items-center justify-center w-full">
                  <span className="ml-[0.15em]">标准施工招标文件</span>
                  <span className="absolute -right-4 text-gray-400 text-sm font-serif italic">↵</span>
                </div>
                <div className="text-lg tracking-widest text-gray-800 mt-2 relative inline-block">
                  2010 年版
                  <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-serif italic">↵</span>
                </div>
                
                <div className="absolute bottom-16 flex flex-col items-center gap-2 text-gray-300 font-serif italic text-xs">
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                  <span>↵</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column Container */}
        <div className="flex-[3] flex flex-col gap-4 min-h-0">
          
          {/* 项目信息 */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden relative">
            <div className="h-[57px] px-6 flex items-center flex-shrink-0 border-b border-gray-100">
              <div className="flex items-center gap-2 mr-4 shrink-0 w-24">
                <div className="w-1 h-4 bg-gradient-to-b from-orange-400 to-blue-500 rounded-full"></div>
                <h2 className="text-base font-bold text-gray-800">项目信息</h2>
              </div>
              
              {isOverallParsing ? (
              <div className="flex-1 flex items-center justify-between bg-[#F7F7FD] rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                   <ParsingDots colorClass="bg-[#5B55EA]" />
                   <span className="text-sm font-medium text-[#5B55EA]">正在解析文件内容...</span>
                </div>
                <div className="flex items-center gap-3 w-48">
                   <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                     <div className="h-full bg-[#2563EB] rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
                   </div>
                   <span className="text-sm text-gray-700 font-medium tabular-nums min-w-[36px] text-right">{progressPercent}%</span>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-between bg-[#F0FDF4] rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                   <CheckCircle2 stroke="white" fill="#22C55E" size={16} />
                   <span className="text-sm font-medium text-[#16A34A]">解析完成</span>
                </div>
                <div className="flex items-center gap-3 w-48">
                   <div className="flex-1 h-2 bg-[#D1FAE5] rounded-full overflow-hidden">
                     <div className="h-full bg-[#22C55E] rounded-full transition-all duration-300" style={{ width: `100%` }}></div>
                   </div>
                   <span className="text-sm text-gray-700 font-medium tabular-nums min-w-[36px] text-right">100%</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex-1 overflow-y-auto px-6 pb-6 relative">
            <div className="flex flex-col">
              {fields.map((field) => {
                const isParsing = field.status === 'parsing';
                const isParsingOrStreaming = field.status === 'parsing' || field.status === 'streaming';
                return (
                  <div key={field.id} id={`field-${field.id}`} className="border-b border-dashed border-gray-200 last:border-b-0 group">
                    <div 
                      className={`flex items-center justify-between sticky top-0 bg-white z-10 pt-5 pb-4 -mx-6 px-6 ${!isParsing ? 'cursor-pointer select-none' : ''}`}
                      onClick={() => toggleExpand(field.id)}
                    >
                      <div className="flex items-end gap-2">
                        <h3 className={`text-sm font-bold leading-none ${isParsing ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'} transition-colors`}>{field.title}</h3>
                        {!isParsing && field.status === 'completed' && hoveredFieldId === field.id && !field.isEditing && (
                           <span className="text-[12px] text-gray-400 leading-none animate-in fade-in">点击可修改内容</span>
                        )}
                      </div>
                      {isParsingOrStreaming ? (
                        <div className="flex items-center gap-2 text-blue-500 text-xs font-medium">
                          <ParsingDots />
                          <span>解析中...</span>
                        </div>
                      ) : (
                        <ChevronUp className={`text-gray-400 transition-transform duration-300 ${!field.isExpanded ? 'rotate-180' : ''}`} size={16} />
                      )}
                    </div>
                    
                    {!isParsing && field.isExpanded && (
                      <div 
                        className="pb-5 mt-0 text-sm text-gray-700 leading-relaxed outline-none border-none relative"
                        onMouseEnter={() => setHoveredFieldId(field.id)}
                        onMouseLeave={() => setHoveredFieldId(null)}
                      >
                         {field.fullContent === '' && !field.isEditing && field.content === '' ? (
                           <div className="text-gray-400 text-[14px] cursor-text -mx-2 px-2 py-1" onClick={() => setEditingState(field.id, true)}>
                             未上传{field.id === 'list' ? '项目清单' : '工程图纸'}，您可手动输入或在“其它补充信息”中补充上传
                           </div>
                         ) : (
                           <InPlaceEditable
                             type={field.type}
                             value={field.content}
                             onChange={(val) => updateFieldContent(field.id, val)}
                             onFocus={() => setEditingState(field.id, true)}
                             onBlur={() => setEditingState(field.id, false)}
                             maxLength={field.type === 'text' ? 100 : undefined}
                           />
                         )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          </div>
          
          {/* 其他补充信息 */}
          {initialParsingDone && (
            <div className="shrink-0 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col p-6 gap-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-4 bg-gradient-to-b from-orange-400 to-blue-500 rounded-full"></div>
                <h2 className="text-base font-bold text-gray-800">其他补充信息</h2>
              </div>
            
              {/* Select Directory Generation Mode */}
              {showDirMode && (
                <div className="bg-blue-50/50 border border-blue-200 rounded-lg p-5 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[11px] font-bold shrink-0 shadow-sm leading-none">i</div>
                    <span>请选择目录生成方式</span>
                    <span className="text-gray-400 font-normal ml-2">检测到招标文件同时提供投标文件组成目录/技术评分标准，请选择目录生成方式</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 mt-1 ml-6">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="dirMode" defaultChecked className="peer sr-only" />
                        <div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-blue-500 peer-checked:border-[4px] transition-all bg-white shadow-sm group-hover:border-blue-400"></div>
                      </div>
                      <span className="text-[13px] text-gray-700 font-medium group-hover:text-blue-600 transition-colors">融合投标文件组成目录/评分标准</span>
                      <span className="bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded ml-1 font-medium">推荐</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="dirMode" className="peer sr-only" />
                        <div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-blue-500 peer-checked:border-[4px] transition-all bg-white shadow-sm group-hover:border-gray-400"></div>
                      </div>
                      <span className="text-[13px] text-gray-700 font-medium group-hover:text-gray-900 transition-colors">仅按评分标准生成</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="radio" name="dirMode" className="peer sr-only" />
                        <div className="w-4 h-4 rounded-full border border-gray-300 peer-checked:border-blue-500 peer-checked:border-[4px] transition-all bg-white shadow-sm group-hover:border-gray-400"></div>
                      </div>
                      <span className="text-[13px] text-gray-700 font-medium group-hover:text-gray-900 transition-colors">仅按投标文件组成目录生成</span>
                    </label>
                  </div>
                </div>
              )}
            
              {/* List Alert / Uploading Status */}
              {!isListUploaded && !listIgnored && !uploadedListFile && (
                <div className="bg-orange-50/50 border border-orange-200 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2 text-[13px]">
                    <div className="w-4 h-4 rounded-full bg-orange-400 text-white flex items-center justify-center text-[10px] font-bold shrink-0">!</div>
                    <span className="text-gray-800 font-medium">当前未上传清单文件，建议补充上传</span>
                    <span className="text-gray-400 ml-2">若无清单，可忽略此项</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setListIgnored(true)} className="text-gray-500 bg-gray-100/80 hover:bg-gray-200 px-4 py-1.5 rounded-[6px] text-[13px] font-medium transition-colors">忽略</button>
                    <button onClick={() => fileInputRefList.current?.click()} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-[6px] text-[13px] font-medium shadow-sm transition-colors cursor-pointer">上传清单</button>
                    <input type="file" ref={fileInputRefList} className="hidden" onChange={(e) => handleFileUpload('list', e)} accept=".pdf,.doc,.docx,.xls,.xlsx" />
                  </div>
                </div>
              )}
              {uploadedListFile && (
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-4 py-3 flex items-center shadow-sm">
                  <div className="flex items-center gap-3">
                    {listFileStatus === 'parsing' ? <ParsingDots colorClass="bg-blue-500" /> : <CheckCircle2 className="text-green-500" size={16} />}
                    <span className="text-sm font-medium text-gray-800">
                       {listFileStatus === 'parsing' ? '清单文件解析中' : listFileStatus === 'done' ? '清单文件解析完成' : '清单文件处理中'}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm ml-2">
                      <FileText className="text-red-500" size={16} />
                      <span className="text-gray-700">{uploadedListFile.name}</span>
                      <span className="text-gray-500">({uploadedListFile.size})</span>
                    </span>
                  </div>
                </div>
              )}
            
              {/* Draw Alert / Uploading Status */}
              {projectType === '工程类' && !isDrawingsUploaded && !drawingsIgnored && !uploadedDrawingsFile && (
                <div className="bg-orange-50/50 border border-orange-200 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2 text-[13px]">
                    <div className="w-4 h-4 rounded-full bg-orange-400 text-white flex items-center justify-center text-[10px] font-bold shrink-0">!</div>
                    <span className="text-gray-800 font-medium">当前未上传图纸文件，建议补充上传</span>
                    <span className="text-gray-400 ml-2">若无图纸，可忽略此项</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setDrawingsIgnored(true)} className="text-gray-500 bg-gray-100/80 hover:bg-gray-200 px-4 py-1.5 rounded-[6px] text-[13px] font-medium transition-colors">忽略</button>
                    <button onClick={() => fileInputRefDrawings.current?.click()} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-[6px] text-[13px] font-medium shadow-sm transition-colors cursor-pointer">上传图纸</button>
                    <input type="file" ref={fileInputRefDrawings} className="hidden" onChange={(e) => handleFileUpload('drawings', e)} accept=".pdf,.doc,.docx" />
                  </div>
                </div>
              )}
              {uploadedDrawingsFile && (
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-4 py-3 flex items-center shadow-sm">
                  <div className="flex items-center gap-3">
                    {drawingsFileStatus === 'parsing' ? <ParsingDots colorClass="bg-blue-500" /> : <CheckCircle2 className="text-green-500" size={16} />}
                    <span className="text-sm font-medium text-gray-800">
                       {drawingsFileStatus === 'parsing' ? '图纸文件解析中' : drawingsFileStatus === 'done' ? '图纸文件解析完成' : '图纸文件处理中'}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm ml-2">
                      <FileText className="text-red-500" size={16} />
                      <span className="text-gray-700">{uploadedDrawingsFile.name}</span>
                      <span className="text-gray-500">({uploadedDrawingsFile.size})</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer Actions */}
      <footer className="bg-white border-t border-gray-200 py-3 px-6 flex justify-center flex-shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-lg text-sm font-medium transition-colors"
          onClick={() => navigate('/generate-directory')}
        >
          下一步
        </button>
      </footer>
    </div>
  );
}
