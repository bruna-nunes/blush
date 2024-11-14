import { fn } from '@storybook/test';
import BlushAlert from './blush-alert.vue';

export default {
  title: 'BLUSH/blush-alert',
  component: BlushAlert,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Componente de alert.',
  },
  argTypes: {
    title: {
      control: {
          type: 'text'
      },
      description: 'Título do alert',
      table: {
          type: {
              summary: 'string'
          }
      }
    },
    text: {
        control: {
            type: 'text'
        },
        description: 'Texto do alert',
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    type: {
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'string'
            }
        },
        description: 'Tipo do alert. Define sua aparência',
        options: ['success', 'warning', 'error', 'informative'],
    },
    showDismiss: {
      control: {
          type: 'boolean'
      },
      description: 'Define se o alert mostrará o ícone/botão de dismiss',
      table: {
          type: {
              summary: 'boolean'
          }
      }
    },
    onDismiss: {
      control: {
        type: 'function'
      },
      description: 'Evento emitido ao clicar no ícone de dismiss',
      table: {
          category: 'Events',
          type: {
              summary: 'function'
          },
      }
    }
  }, 
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onDismiss: fn()
  },
};

const generalArgs = {
    title: 'Alert',
    text: 'Descrição',
    type: 'informative',
    showDismiss: false
}

export const Informative = {
  args: {
    ...generalArgs,
  },
};

export const Success = {
    args: {
      ...generalArgs,
      type: 'success'
    },
  };


export const Warning = {
    args: {
      ...generalArgs,
      type: 'warning',
    },
};

export const Error = {
    args: {
      ...generalArgs,
      type: 'error',
    },
};

export const Dismissible = {
    args: {
      ...generalArgs,
      showDismiss: true,
    },
};

