import { DetailPillProps } from '@/interfaces';
import Icon from './Icon';

export const DetailPill: React.FC<DetailPillProps> = ({ iconName, label }) => {
  return (
    <div className="mr-3 flex items-center rounded-full border border-gray-300 px-3 py-1 text-sm">
      <Icon name={iconName} size={14} className="text-muted-foreground" />
      <span className="ml-2">{label}</span>
    </div>
  );
};
