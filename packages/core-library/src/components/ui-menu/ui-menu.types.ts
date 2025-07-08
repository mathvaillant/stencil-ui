import { IconName } from '../ui-icon/icons';

export interface UIMenuItem {
  label: string;
  id?: string;
  icon?: IconName;
  onClick?: (event: MouseEvent) => void;
}
