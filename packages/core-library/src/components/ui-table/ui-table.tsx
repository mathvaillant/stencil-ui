import { Component, Host, Prop, h } from '@stencil/core';
import { UITableCell, UITableColumn, UITableRow } from './ui-table.types';

@Component({
  tag: 'ui-table',
  styleUrl: 'ui-table.scss',
  shadow: true,
})
export class UITable {
  /**
   * An array of column definitions for the table.
   * Each column is defined by a label and an optional alignment.
   * Alignement can be 'left', 'center', or 'right'.
   */
  @Prop() columns: UITableColumn[] = [];

  /**
   * An array of row data for the table.
   * Each row is an array of cells
   * Each cell can by a text, link, button, input & select element.
   */
  @Prop() rows: UITableRow[] = [];

  /**
   * Optional properties to control the table's appearance.
   * These include maxWidth, maxHeight, and overflow styles.
   */
  @Prop() maxWidth: CSSStyleDeclaration['maxWidth'] = '100%';

  /**
   * Maximum height of the table.
   * This can be set to a specific value like '400px' or '100%'.
   */
  @Prop() maxHeight: CSSStyleDeclaration['maxHeight'] = '100%';

  /**
   * Overflow style for the table.
   * Can be set to 'auto', 'scroll', or 'hidden'.
   */
  @Prop() overflow: CSSStyleDeclaration['overflow'] = 'auto';

  /*
   * Whether the table header should be sticky.
   * If true, the header will remain fixed at the top when scrolling.
   * Default is false.
   */
  @Prop() stickyHeader: boolean = false;

  private renderCell(cell: UITableCell) {
    switch (cell.type) {
      case 'typography':
        return <ui-typography variant={cell.variant}>{cell.text}</ui-typography>;
      case 'link':
        return (
          <a href={cell.href} target={cell.target}>
            {cell.text}
          </a>
        );
      case 'button':
        return (
          <ui-button
            variant={cell.variant}
            onClick={cell.onClick}
            iconName={cell.iconName}
          >
            {cell.text}
          </ui-button>
        );
      case 'select':
        return (
          <ui-select onChange={cell.onChange}>
            {cell.options.map(option => (
              <option value={option.value} selected={option.value === cell.selectedValue}>
                {option.label}
              </option>
            ))}
          </ui-select>
        );
      case 'input':
        return (
          <ui-input
            type={cell.inputType}
            value={cell.value}
            placeholder={cell.placeholder}
            onInput={cell.onInput}
          />
        );
      default:
        return <span>Unsupported cell type</span>;
    }
  }

  render() {
    return (
      <Host
        style={{
          maxWidth: this.maxWidth,
          maxHeight: this.maxHeight,
          overflow: this.overflow,
        }}
      >
        <table>
          <thead class={{ sticky: this.stickyHeader }}>
            <tr>
              {this.columns.map(column => (
                <th style={{ textAlign: column.align || 'left' }}>{column.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {this.rows.map(row => (
              <tr>
                {row.map((cell, index) => (
                  <td style={{ textAlign: this.columns[index]?.align || 'left' }}>
                    {this.renderCell(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Host>
    );
  }
}
