import { CopyCheckIcon, Files, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import dolarInfo from '../constants/dolarInfo';

interface Props {
  label: string;
  value: string;
  currency: 'USD' | 'ARS';
}
export const Modal: React.FC<Props> = ({ label, value, currency }) => {
  const [open, set0pen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onHandleCopy = () => {
    navigator.clipboard.writeText(`${currency} ${value}`);
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
          {`${currency} ${Number(value)}`}
        </h2>
        <div className="absolute bottom-0 left-0 w-full bg-orange h-12 rounded-b-xl flex items-center justify-center font-extrabold text-xl uppercase text-dark">
          Ver Más
        </div>
      </button>
      {/* Modal */}
      <div
        className={`px-2 z-50 fixed inset-0 flex justify-center items-center transition-colors ${
          open ? 'visible bg-black/40' : 'invisible'
        }`}
        onClick={() => set0pen(false)}
      >
        <div
          className={`bg-grey rounded-lg shadow py-4 px-2 min-[464px]:p-6 transition-all max-w-lg min-w-[19rem] h-min ${
            open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
          onClick={e => e.stopPropagation()}
        >
          {/*Content*/}
          <article className="flex flex-col w-full gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-extrabold text-xl min-[464px]:text-2xl text-dark">
                {label}
              </h2>
              <button
                className="py-1 px-2 font-extrabold"
                onClick={() => set0pen(false)}
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="border-2 border-dark w-full h-12 rounded-lg flex relative">
              {isCopied && (
                <span className="absolute right-0 bottom-0 -mb-8 bg-greeny px-2 rounded-full font-semibold">
                  Copiado!
                </span>
              )}
              <input
                className="flex-1 rounded-l-md px-2 font-extrabold"
                value={`${currency} ${Number(value)}`}
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
            <div className="my-2 space-y-6">
              {dolarInfo[label].length > 0 && (
                <>
                  {' '}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl min-[464px]:text-2xl font-extrabold text-orange">
                      ¿Que es el {label}?
                    </h2>
                    <p className="text-xs leading-5 sm:text-sm">
                      {dolarInfo[label][0]}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl min-[464px]:text-2xl font-extrabold text-orange">
                      ¿Quienes lo utilizan?
                    </h2>
                    <p className="text-xs leading-5 sm:text-sm">
                      {dolarInfo[label][1]}
                    </p>
                  </div>
                </>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
