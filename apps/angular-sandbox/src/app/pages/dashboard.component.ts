import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'dashboard-root',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardComponent {
  formData: any = null;

  @ViewChild('formRef') formRef!: ElementRef<HTMLFormElement>;

  tableColumns = [
    { label: 'Name', align: 'left' },
    { label: 'Email', align: 'left' },
    { label: 'Status', align: 'center' },
    { label: 'Actions', align: 'center' },
    { label: 'Input', align: 'right' },
    { label: 'Link', align: 'right' },
    { label: 'Delete', align: 'right' },
  ];

  tableRows = [
    [
      {
        type: 'typography',
        variant: 'p',
        text: 'Alice',
      },
      {
        type: 'typography',
        variant: 'p',
        text: 'alice@example.com',
      },
      {
        type: 'select',
        selectedValue: 'active',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'pending',
            label: 'Pending',
          },
        ],
        onChange: (val: any) => console.log('Alice status changed to', val),
      },
      {
        type: 'button',
        text: 'Edit',
        onClick: () => alert('Edit Alice'),
      },
      {
        type: 'input',
        inputType: 'text',
        value: 'Alice input',
        placeholder: 'Edit...',
        onInput: (e: any) => console.log('Input changed:', e.target.value),
      },
      {
        type: 'link',
        text: 'Profile',
        href: '#',
      },
      {
        type: 'button',
        text: '',
        variant: 'secondary',
        iconName: 'delete',
        onClick: () => alert('Delete Alice'),
      },
    ],
    [
      {
        type: 'typography',
        variant: 'p',
        text: 'Bob',
      },
      {
        type: 'typography',
        variant: 'p',
        text: 'bob@example.com',
      },
      {
        type: 'select',
        selectedValue: 'inactive',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'pending',
            label: 'Pending',
          },
        ],
        onChange: (val: any) => console.log('Bob status changed to', val),
      },
      {
        type: 'button',
        text: 'Delete',
        onClick: () => alert('Delete Bob'),
      },
      {
        type: 'input',
        inputType: 'email',
        value: '',
        placeholder: 'bob@domain.com',
        onInput: (e: any) => console.log('Input changed:', e.target.value),
      },
      {
        type: 'link',
        text: 'Details',
        href: '#',
      },
      {
        type: 'button',
        text: '',
        variant: 'secondary',
        iconName: 'delete',
        onClick: () => alert('Delete Bob'),
      },
    ],
    [
      {
        type: 'typography',
        variant: 'p',
        text: 'Charlie',
      },
      {
        type: 'typography',
        variant: 'p',
        text: 'charlie@example.com',
      },
      {
        type: 'select',
        selectedValue: 'pending',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'pending',
            label: 'Pending',
          },
        ],
        onChange: (val: any) => console.log('Charlie status changed to', val),
      },
      {
        type: 'button',
        text: 'Ban',
        onClick: () => alert('Ban Charlie'),
      },
      {
        type: 'input',
        inputType: 'password',
        value: '',
        placeholder: 'Enter password',
        onInput: (e: any) => console.log('Input changed:', e.target.value),
      },
      {
        type: 'link',
        text: 'Visit',
        href: '#',
      },
      {
        type: 'button',
        text: '',
        variant: 'secondary',
        iconName: 'delete',
        onClick: () => alert('Delete Charlie'),
      },
    ],
    [
      {
        type: 'typography',
        variant: 'subtitle',
        text: 'Diana',
      },
      {
        type: 'typography',
        variant: 'caption',
        text: 'diana@example.com',
      },
      {
        type: 'select',
        name: 'status-diana',
        selectedValue: 'active',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
        ],
        onChange: (val: any) => console.log('Diana status changed to', val),
      },
      {
        type: 'button',
        text: 'Promote',
        onClick: () => alert('Promote Diana'),
      },
      {
        type: 'input',
        inputType: 'search',
        value: '',
        placeholder: 'Search...',
        onInput: (e: any) => console.log('Input changed:', e.target.value),
      },
      {
        type: 'link',
        text: 'Reports',
        href: '#',
      },
      {
        type: 'button',
        text: '',
        variant: 'secondary',
        iconName: 'delete',
        onClick: () => alert('Delete Diana'),
      },
    ],
    [
      {
        type: 'typography',
        variant: 'p',
        text: 'Eve',
      },
      {
        type: 'typography',
        variant: 'p',
        text: 'eve@example.com',
      },
      {
        type: 'select',
        name: 'status-eve',
        selectedValue: 'inactive',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'banned',
            label: 'Banned',
          },
        ],
        onChange: (val: any) => console.log('Eve status changed to', val),
      },
      {
        type: 'button',
        text: 'Warn',
        onClick: () => alert('Warn Eve'),
      },
      {
        type: 'input',
        inputType: 'number',
        value: '123',
        placeholder: 'Enter ID',
        onInput: (e: any) => console.log('Input changed:', e.target.value),
      },
      {
        type: 'link',
        text: 'Audit Log',
        href: '#',
      },
      {
        type: 'button',
        text: '',
        variant: 'secondary',
        iconName: 'delete',
        onClick: () => alert('Delete Eve'),
      },
    ],
    [
      {
        type: 'typography',
        variant: 'title',
        text: 'Frank',
      },
      {
        type: 'typography',
        variant: 'p',
        text: 'frank@example.com',
      },
      {
        type: 'select',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
        ],
        onChange: (val: any) => console.log('Frank status changed to', val),
      },
      {
        type: 'button',
        text: 'Suspend',
        onClick: () => alert('Suspend Frank'),
      },
      {
        type: 'input',
        inputType: 'url',
        value: '',
        placeholder: 'Enter URL',
        onInput: (e: any) => console.log('Input changed:', e.target.value),
      },
      {
        type: 'link',
        text: 'Website',
        href: 'https://example.com',
      },
      {
        type: 'button',
        text: '',
        variant: 'secondary',
        iconName: 'delete',
        onClick: () => alert('Delete Frank'),
      },
    ],
    [
      {
        type: 'typography',
        variant: 'p',
        text: 'Alice',
      },
      {
        type: 'typography',
        variant: 'p',
        text: 'alice@example.com',
      },
      {
        type: 'select',
        name: 'status-alice',
        selectedValue: 'active',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'pending',
            label: 'Pending',
          },
        ],
        onChange: (val: any) => console.log('Alice status changed to', val),
      },
      {
        type: 'button',
        text: 'Edit',
        onClick: () => alert('Edit Alice'),
      },
      {
        type: 'input',
        inputType: 'text',
        value: 'Alice input',
        placeholder: 'Edit...',
        onInput: (e: any) => console.log('Input changed:', e.target.value),
      },
      {
        type: 'link',
        text: 'Profile',
        href: '#',
      },
      {
        type: 'button',
        text: '',
        variant: 'secondary',
        iconName: 'delete',
        onClick: () => alert('Delete Alice'),
      },
    ],
    [
      {
        type: 'typography',
        variant: 'p',
        text: 'Bob',
      },
      {
        type: 'typography',
        variant: 'p',
        text: 'bob@example.com',
      },
      {
        type: 'select',
        name: 'status-bob',
        selectedValue: 'inactive',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'pending',
            label: 'Pending',
          },
        ],
        onChange: (val: any) => console.log('Bob status changed to', val),
      },
      {
        type: 'button',
        text: 'Delete',
        onClick: () => alert('Delete Bob'),
      },
      {
        type: 'input',
        inputType: 'email',
        value: '',
        placeholder: 'bob@domain.com',
        onInput: (e: any) => console.log('Input changed:', e.target.value),
      },
      {
        type: 'link',
        text: 'Details',
        href: '#',
      },
      {
        type: 'button',
        text: '',
        variant: 'secondary',
        iconName: 'delete',
        onClick: () => alert('Delete Bob'),
      },
    ],
    [
      {
        type: 'typography',
        variant: 'p',
        text: 'Charlie',
      },
      {
        type: 'typography',
        variant: 'p',
        text: 'charlie@example.com',
      },
      {
        type: 'select',
        name: 'status-charlie',
        selectedValue: 'pending',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'pending',
            label: 'Pending',
          },
        ],
        onChange: (val: any) => console.log('Charlie status changed to', val),
      },
      {
        type: 'button',
        text: 'Ban',
        onClick: () => alert('Ban Charlie'),
      },
      {
        type: 'input',
        inputType: 'password',
        value: '',
        placeholder: 'Enter password',
        onInput: (e: any) => console.log('Input changed:', e.target.value),
      },
      {
        type: 'link',
        text: 'Visit',
        href: '#',
      },
      {
        type: 'button',
        text: '',
        variant: 'secondary',
        iconName: 'delete',
        onClick: () => alert('Delete Charlie'),
      },
    ],
    [
      {
        type: 'typography',
        variant: 'subtitle',
        text: 'Diana',
      },
      {
        type: 'typography',
        variant: 'caption',
        text: 'diana@example.com',
      },
      {
        type: 'select',
        name: 'status-diana',
        selectedValue: 'active',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
        ],
        onChange: (val: any) => console.log('Diana status changed to', val),
      },
      {
        type: 'button',
        text: 'Promote',
        onClick: () => alert('Promote Diana'),
      },
      {
        type: 'input',
        inputType: 'search',
        value: '',
        placeholder: 'Search...',
        onInput: (e: any) => console.log('Input changed:', e.target.value),
      },
      {
        type: 'link',
        text: 'Reports',
        href: '#',
      },
      {
        type: 'button',
        text: '',
        variant: 'secondary',
        iconName: 'delete',
        onClick: () => alert('Delete Diana'),
      },
    ],
    [
      {
        type: 'typography',
        variant: 'p',
        text: 'Eve',
      },
      {
        type: 'typography',
        variant: 'p',
        text: 'eve@example.com',
      },
      {
        type: 'select',
        name: 'status-eve',
        selectedValue: 'inactive',
        options: [
          {
            value: 'active',
            label: 'Active',
          },
          {
            value: 'inactive',
            label: 'Inactive',
          },
          {
            value: 'banned',
            label: 'Banned',
          },
        ],
        onChange: (val: any) => console.log('Eve status changed to', val),
      },
      {
        type: 'button',
        text: 'Warn',
        onClick: () => alert('Warn Eve'),
      },
      {
        type: 'input',
        inputType: 'number',
        value: '123',
        placeholder: 'Enter ID',
        onInput: (e: any) => console.log('Input changed:', e.target.value),
      },
      {
        type: 'link',
        text: 'Audit Log',
        href: '#',
      },
      {
        type: 'button',
        text: '',
        variant: 'secondary',
        iconName: 'delete',
        onClick: () => alert('Delete Eve'),
      },
    ],
  ];

  get selectedLanguages(): string {
    if (!this.formData) return '';
    return [
      this.formData['can-speak-english'],
      this.formData['can-speak-spanish'],
      this.formData['can-speak-french'],
    ]
      .filter((lang) => !!lang)
      .join(', ');
  }

  submitForm(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formValues = new FormData(form);
    this.formData = Object.fromEntries(formValues.entries());
  }

  closeModal() {
    this.formData = null;
  }

  finalSubmit() {
    alert('Form submitted!');
    this.formData = null;
    this.formRef.nativeElement.reset();
  }
}
