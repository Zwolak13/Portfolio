import {type ReactNode } from 'react';

interface NotepadWindowProps {
  title?: string;
  onClose?: () => void;
  className?: string;
  children?: ReactNode;
}

export default function NotepadWindow({
  title = "Untitled - Notepad",
  onClose,
  className = "",
  children
}: NotepadWindowProps) {
  
  return (
    <div className={`lg:w-[90%] w-full max-w-2xl ${className}`}>

      <div className="bg-gray-50/98 backdrop-blur-xl border border-blue-400 rounded-lg shadow-2xl overflow-hidden">

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
            </div>
            <span className="text-white font-medium text-sm ml-2">📝 {title}</span>
          </div>
          
          <button
            onClick={onClose}
            className="group relative w-8 h-8 bg-white/10 hover:bg-red-500 border border-white/20 hover:border-red-400 rounded-md transition-all duration-200 flex items-center justify-center"
          >
            <span className="text-white font-bold text-sm group-hover:scale-110 transition-transform">×</span>
            <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/20 rounded-md transition-colors"></div>
          </button>
        </div>


        <div className="relative min-h-[400px]">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  transparent,
                  transparent 24px,
                  #e5e7eb 24px,
                  #e5e7eb 25px
                )
              `
            }}
          />

          <div className="absolute left-12 top-0 bottom-0 w-px bg-red-300 opacity-50" />
          
          {children && (
            <div className="relative z-10 p-6 font-mono text-gray-800 leading-relaxed">
              |{children}
            </div>
          )}
        </div>

        <div className="bg-gray-100 border-t border-gray-200 px-4 py-1 text-xs text-gray-600 flex justify-between">
          <span>Line 1, Column 1</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
}