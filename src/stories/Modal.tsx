import { CopyCheckIcon, Files, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import { formatConversion } from '../helpers/formatConversion';

interface Props {
  label: string;
  value: string;
}
export const Modal: React.FC<Props> = ({ label, value }) => {
  const [open, set0pen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onHandleCopy = () => {
    navigator.clipboard.writeText(`$${value}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  return (
    <div>
      <button
        type="button"
        className="relative gap-4 w-[15rem] h-48  rounded-2xl p-6 bg-grey  shadow-card-modal flex flex-col items-center "
        onClick={() => set0pen(true)}
      >
        <h2 className="text-xl uppercase font-extrabold text-dark">{label} </h2>
        <h2 className="text-4xl font-extrabold text-dark w-full truncate">
          {formatConversion(Number(value))}
        </h2>
        <div className="absolute bottom-0 left-0 w-full bg-orange h-12 rounded-b-xl flex items-center justify-center font-extrabold text-xl uppercase text-dark">
          Ver Más
        </div>
      </button>
      {/* Modal */}
      <div
        className={`z-50 fixed inset-0 flex justify-center items-center transition-colors ${
          open ? 'visible bg-black/20' : 'invisible'
        }`}
        onClick={() => set0pen(false)}
      >
        <div
          className={`bg-grey rounded-lg shadow p-6 transition-all max-w-md min-w-[19rem] h-min ${
            open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
          onClick={e => e.stopPropagation()}
        >
          {/*Content*/}
          <article className="flex flex-col w-full gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-extrabold text-xl text-dark">{label}</h2>
              <button
                className="py-1 px-2 font-extrabold"
                onClick={() => set0pen(false)}
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="border-2 border-dark w-full h-12 rounded-lg flex ">
              <input
                className="flex-1 rounded-l-md px-2 font-extrabold"
                value={formatConversion(Number(value))}
                readOnly
              />
              <button
                type="button"
                className="h-full w-12 bg-greeny rounded-r-md flex items-center justify-center border-l-2 border-dark"
                onClick={onHandleCopy}
              >
                {isCopied ? <CopyCheckIcon /> : <Files />}
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
