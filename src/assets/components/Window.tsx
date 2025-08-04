import {type  ReactNode } from 'react';

interface WindowTab {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface WindowComponentProps {
  title?: string;
  icon?: string;
  children: ReactNode;
  onClose?: () => void;
  tabs?: WindowTab[];
  activeTab?: string;
  onTabChange?: (tabName: string) => void;
  footerText?: string;
  className?: string;
}

export default function Window({
  title = "Window",
  icon = "📋",
  children,
  onClose,
  tabs = [],
  activeTab,
  onTabChange,
  footerText,
  className = ""
}: WindowComponentProps) {
  
  return (
    <div className={`lg:w-[90%] w-full max-w-4xl ${className}`}>

      <div className="bg-gray-800/95 backdrop-blur-xl border border-blue-400/30 rounded-lg shadow-2xl overflow-hidden">

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
            </div>
            <span className="text-white font-medium text-sm">{icon} {title}</span>
          </div>
          
          <button
            onClick={onClose}
            className="group relative w-8 h-8 bg-white/10 hover:bg-red-500 border border-white/20 hover:border-red-400 rounded-md transition-all duration-200 flex items-center justify-center"
          >
            <span className="text-white font-bold text-sm group-hover:scale-110 transition-transform">×</span>
            <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/20 rounded-md transition-colors"></div>
          </button>
        </div>

        {tabs.length > 0 && (
          <div className="bg-gray-700/80 backdrop-blur-sm border-b border-gray-600/50">
            <div className="flex">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-200 relative group ${
                    activeTab === tab.name 
                      ? "bg-blue-500/80 text-white border-b-2 border-blue-300" 
                      : "text-gray-300 hover:text-white hover:bg-gray-600/50"
                  }`}
                  onClick={() => onTabChange && onTabChange(tab.name)}
                >
                  {tab.icon && <tab.icon className="w-4 h-4 "/>}
                  <span className=' lg:block hidden'>{tab.name}</span>
                  {activeTab === tab.name && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm p-6">
          {children}
        </div>

        {footerText && (
          <div className="bg-gray-700/60 px-4 py-2 text-right">
            <span className="text-gray-400 text-xs">{footerText}</span>
          </div>
        )}
      </div>
    </div>
  );
}