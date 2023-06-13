import { TrendingUp } from 'lucide-react';
import { useMemo } from 'react';
const BASE_BADGE_CLASSES =
  'text-dark flex items-center gap-2 font-body border-2 leading-none inline-block font-extrabold border-dark w-fit px-4 rounded-full py-2';
const getModeClasses = (isPrimary: boolean) =>
  isPrimary ? 'bg-violet' : 'bg-greeny';

export const Badge = ({ primary = false, label = 'Badge', ...props }) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);

    return modeClass;
  }, [primary]);

  return (
    <span className={`${BASE_BADGE_CLASSES} ${computedClasses}`} {...props}>
      <TrendingUp className="h-6 w-6 text-dark" />
      {label}
    </span>
  );
};
