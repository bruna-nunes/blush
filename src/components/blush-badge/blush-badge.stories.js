import { fn } from '@storybook/test';
import BlushBadge from './blush-badge.vue';

export default {
  title: 'BLUSH/blush-badge',
  component: BlushBadge,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Componente de botão com uma lista de opções de cores, estilos e tamanhos.',
  },
  argTypes: {
    text: {
        control: {
            type: 'text'
        },
        description: 'Texto do badge',
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    variant: {
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'string'
            }
        },
        description: 'Estilo do badge',
        options: ['primary', 'primary-outline', 'primary-ghost',
        'accent', 'accent-outline', 'accent-ghost',
        'success', 'success-outline', 'success-ghost',
        'warning', 'warning-outline', 'warning-ghost',
        'danger', 'danger-outline', 'danger-ghost',
        'neutral', 'neutral-outline', 'neutral-ghost'],
    },
    showDismiss: {
        control: {
            type: 'boolean'
        },
        description: 'Define se o badge mostrará o ícone/botão de dismiss',
        table: {
            type: {
                summary: 'boolean'
            }
        }
    },
  },
  onDismiss: {
    description: 'Define se o badge mostrará o ícone/botão de dismiss',
    table: {
        type: {
            summary: 'boolean'
        },
    }
  }, 
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onDismiss: fn()
  },
};

const generalArgs = {
    text: 'Badge',
    variant: 'primary',
    showDismiss: false
}

export const Primary = {
  args: {
    ...generalArgs,
  },
};

export const PrimaryOutline = {
    args: {
      ...generalArgs,
      variant: 'primary-outline'
    },
  };

export const Accent = {
  args: {
    ...generalArgs,
    variant: 'accent',
  },
};

export const Success = {
    args: {
      ...generalArgs,
      variant: 'success',
    },
};

export const Warning = {
    args: {
      ...generalArgs,
      variant: 'warning',
    },
};

export const Danger = {
    args: {
      ...generalArgs,
      variant: 'danger',
    },
};

export const Dismissible = {
    args: {
      ...generalArgs,
      showDismiss: true,
    },
};

