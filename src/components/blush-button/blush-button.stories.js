import { fn } from '@storybook/test';
import BlushButton from './blush-button.vue';

export default {
  title: 'BLUSH/blush-button',
  component: BlushButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Componente de botão com uma lista de opções de cores, estilos e tamanhos.',
  },
  argTypes: {
    id: {
        control: {
            type: 'text'
        },
        description: 'ID do Botão',
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    name: {
        control: {
            type: 'text'
        },
        description: 'Nome do Botão',
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
        description: 'Tipo do botão',
        options: ['button', 'submit', 'reset'],
    },
    size: {
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'string'
            }
        },
        description: 'Tamanho do botão',
        options: ['small', 'medium', 'large'],
    },
    label: {
        control: {
            type: 'text'
        },
        description: 'Label do Botão',
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
        description: 'Estilo do botão',
        options: ['primary', 'primary-outline', 'primary-ghost',
        'accent', 'accent-outline', 'accent-ghost',
        'success', 'success-outline', 'success-ghost',
        'warning', 'warning-outline', 'warning-ghost',
        'danger', 'danger-outline', 'danger-ghost',
        'neutral', 'neutral-outline', 'neutral-ghost'],
    },
    disabled: {
        control: {
            type: 'boolean'
        },
        description: 'Define se o botão está desabilitado ou não.',
        table: {
            type: {
                summary: 'boolean'
            }
        }
    },
    autofocus: {
        control: {
            type: 'boolean'
        },
        description: 'Define se o botão tem autofocus ou não.',
        table: {
            type: {
                summary: 'boolean'
            }
        }
    },
    block: {
        control: {
            type: 'boolean'
        },
        description: 'Define se o botão ocupará 100% do tamanho disponível ou seguirá tamanho do conteúdo.',
        table: {
            type: {
                summary: 'boolean'
            }
        }
    },
    onClick: {
        description: 'Evento emitido ao clicar no botão',
        table: {
            type: {
                summary: 'function'
            },
        }
      },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn()
  },
};

const generalArgs = {
    id: 'button-id',
    name: 'button-name',
    type: 'button',
    label: 'Button',
    size: 'medium',
    variant: 'primary',
    disabled: false,
    autofocus: false,
    block: false,
}

export const Primary = {
  args: {
    ...generalArgs,
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

export const Small = {
    args: {
      ...generalArgs,
      size: 'small',
    },
};

export const Medium = {
    args: {
      ...generalArgs,
      size: 'medium',
    },
};

export const Large = {
    args: {
      ...generalArgs,
      size: 'large',
    },
};

export const Disabled = {
    args: {
      ...generalArgs,
      disabled: true,
    },
};