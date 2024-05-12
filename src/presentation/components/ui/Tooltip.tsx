interface TooltipProps {
  message: string;
  children: JSX.Element | JSX.Element[];
}
export default function Tooltip({ message, children }: TooltipProps) {
  return (
    <div className="group relative flex max-w-max flex-col items-center justify-center">
      {children}
      <div className="absolute left-1/2 z-50 top-5 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
        <div className="flex max-w-xs flex-col items-center shadow-lg">
          <div className="clip-bottom h-2 w-4 bg-orange border-t-2 border-l-2 border-r-2 border-black"></div>
          <div className="rounded bg-orange border-2 border-black p-2 text-center text-sm font-semibold text-black leading-7">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
