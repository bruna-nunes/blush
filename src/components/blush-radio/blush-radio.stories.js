import { fn } from '@storybook/test';
import BlushRadio from './blush-radio.vue';

export default {
  title: 'BLUSH/blush-radio',
  component: BlushRadio,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Componente de input radio.',
  },
  argTypes: {
    id: {
        control: {
            type: 'text'
        },
        description: 'ID do radio',
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
        description: 'Nome do radio',
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    label: {
        control: {
            type: 'text'
        },
        description: 'Label do radio',
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    value: {
        control: {
            type: 'text'
        },
        description: 'Valor do radio',
        table: {
            type: {
                summary: 'string, number, object'
            }
        }
    },
    state: {
        control: {
            type: 'select'
        },
        table: {
            type: {
                summary: 'string'
            }
        },
        description: 'Estado do radio',
        options: ['valid', 'invalid', 'normal'],
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
        description: 'Estilo do radio',
        options: [
            'primary',
            'accent', 
            'success', 
            'warning',
            'danger',
            'neutral'
        ],
    },
    disabled: {
        control: {
            type: 'boolean'
        },
        description: 'Define se o radio está desabilitado ou não.',
        table: {
            type: {
                summary: 'boolean'
            }
        }
    },
    required: {
        control: {
            type: 'boolean'
        },
        description: 'Define se o radio é required ou não.',
        table: {
            type: {
                summary: 'boolean'
            }
        }
    },
    checked: {
        control: {
            type: 'boolean'
        },
        description: 'Define se o radio está checado ou não.',
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
        description: 'Define se o radio tem autofocus ou não.',
        table: {
            type: {
                summary: 'boolean'
            }
        }
    },
    hintText: {
        control: {
            type: 'text'
        },
        description: 'Texto de hint do radio',
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    errorText: {
        control: {
            type: 'text'
        },
        description: 'Texto de erro do radio',
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    onChange: {
        control: {
            type: 'function'
        },
        description: 'Função a ser executada quando o radio emite o evento de change.',
        table: {
            type: {
                summary: 'function'
            }
        }
    },
    onInput: {
        control: {
            type: 'function'
        },
        description: 'Função a ser executada quando o radio emite o evento de input.',
        table: {
            type: {
                summary: 'function'
            }
        }
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onChange: fn(),
    onInput: fn()
  },
};

const generalArgs = {
    id: 'radio-id',
    name: 'radio-name',
    label: 'radio label',
    value: 'radio1',
    variant: 'primary',
    state: 'normal',
    disabled: false,
    autofocus: false,
    required: false,
    checked: false,
    hintText: '',
    errorText: ''
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

export const Disabled = {
    args: {
      ...generalArgs,
      disabled: true,
    },
};