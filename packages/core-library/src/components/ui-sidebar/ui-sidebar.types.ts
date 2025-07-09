import { IconName } from '../ui-icon/icons';

export interface UISidebarItem {
  label: string;
  icon?: IconName;
  active?: boolean;
  onClick?: (event: MouseEvent) => void;
}
