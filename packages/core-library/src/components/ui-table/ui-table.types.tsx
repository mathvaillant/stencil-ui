import { UIButton } from '../ui-button/ui-button';
import { IconName } from '../ui-icon/icons';
import { UIInput } from '../ui-input/ui-input';
import { UITypography } from '../ui-typography/ui-typography';

export type UITableColumn = {
  label: string;
  align?: 'left' | 'center' | 'right';
};

export type UITableRow = UITableCell[];
export type UITableCell =
  | UITableCellText
  | UITableCellLink
  | UITableCellButton
  | UITableCellSelect
  | UITableCellInput;

export interface UITableCellText {
  type: 'typography';
  variant?: UITypography['variant'];
  text: string;
}

export interface UITableCellLink {
  type: 'link';
  href: string;
  text: string;
  target?: '_blank' | '_self';
}

export interface UITableCellButton {
  type: 'button';
  variant?: UIButton['variant'];
  text?: string;
  iconName?: IconName;
  onClick?: (event: MouseEvent) => void;
}

export interface UITableCellSelect {
  type: 'select';
  options: { value: string; label: string }[];
  selectedValue?: string;
  onChange?: (event: Event) => void;
}

export interface UITableCellInput {
  type: 'input';
  inputType: UIInput['type'];
  value: UIInput['value'];
  placeholder?: string;
  onInput?: HTMLInputElement['oninput'];
}
