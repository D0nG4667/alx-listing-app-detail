import { DetailPillProps } from '@/interfaces';
import Icon from './Icon';

export const DetailPill: React.FC<DetailPillProps> = ({ iconName, label, className, labelClassName }) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full border border-gray-300 px-3 py-1 text-sm ${className ?? ""}`}
    >
      <Icon name={iconName} size={14} className="text-muted-foreground" />
      <span className={`ml-2 ${labelClassName ?? ""}`}>{label}</span>    </div>
  );
};
