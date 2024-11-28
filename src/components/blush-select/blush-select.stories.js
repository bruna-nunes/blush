import { fn } from '@storybook/test';
import BlushSelect from './blush-select.vue';

export default {
  title: 'BLUSH/blush-select',
  component: BlushSelect,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Componente de select.',
  },
  argTypes: {
    id: {
        control: {
            type: 'text'
        },
        description: 'ID do select',
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
        description: 'Nome do select',
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
        description: 'Label do select',
        table: {
            type: {
                summary: 'string'
            }
        }
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
        description: 'Tamanho do select',
        options: ['small', 'medium', 'large'],
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
        description: 'Estado do select',
        options: ['valid', 'invalid', 'normal'],
    },
    placeholder: {
        control: {
            type: 'text'
        },
        description: 'Placeholder do select',
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    disabled: {
        control: {
            type: 'boolean'
        },
        description: 'Define se o select está desabilitado ou não.',
        table: {
            type: {
                summary: 'boolean'
            }
        }
    },
    multiple: {
        control: {
            type: 'boolean'
        },
        description: 'Define se o select permitirá a seleção de mais de um item.',
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
        description: 'Texto de hint do select',
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
        description: 'Texto de erro do select',
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    readonly: {
        control: {
            type: 'boolean'
        },
        description: 'Define se o input será somente de leitura (não poderá ser editado).',
        table: {
            type: {
                summary: 'boolean'
            }
        }
    },
    onChange: {
        control: {
            type: 'function'
        },
        description: 'Função a ser executada quando o select emite o evento de change. Disponibiliza o valor selecionado no evento.',
        table: {
            category: 'Events',
            type: {
                summary: 'function'
            }
        }
    },
    default: {
        table: {
            disable: true
        }
      },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onChange: fn(),
  },
  decorators: [
    () => ({
      template: `
        <div style="height: 150px;">
          <story />
        </div>
      `,
    }),
  ]
};

const generalArgs = {
    id: 'select-id',
    name: 'select-name',
    label: 'Select label',
    size: 'medium',
    state: 'normal',
    placeholder: 'Placeholder',
    disabled: false,
    hintText: '',
    errorText: '',
    readonly: false,
    multiple: false
}

const Template = (args) => ({
    components: { BlushSelect },
    setup: () => ({
      args
    }),
    template: `
    
      <blush-select
        :id="args.id"
        :name="args.name"
        :label="args.label"
        :size="args.size"
        :state="args.state"
        :placeholder="args.placeholder"
        :disabled="args.disabled"
        :hint-text="args.hintText"
        :error-text="args.errorText"
        :readonly="args.readonly"
        :multiple="args.multiple"
      >
        <option value="1">Opção 1</option>
        <option value="2">Opção 2</option>
        <option value="3">Opção 3</option>
        <option value="4">Opção 4</option>
        <option value="5">Opção 5</option>
        <option value="6">Opção 6</option>
      </blush-select>
    `,
})

export const Example = Template.bind({})
Example.args = {
  ...generalArgs, 
}

export const Neutral = Template.bind({})
Neutral.args = {
  ...generalArgs
}

export const Small = Template.bind({})
Small.args = {
  ...generalArgs,
  size: 'small'
}

export const Medium = Template.bind({})
Medium.args = {
  ...generalArgs,
  size: 'medium'
}

export const Large = Template.bind({})
Large.args = {
  ...generalArgs,
  size: 'large'
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...generalArgs,
  disabled: true
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  ...generalArgs,
  readonly: true
}

export const StateInvalidAndErrorText = Template.bind({})
StateInvalidAndErrorText.args = {
  ...generalArgs,
  state: 'invalid',
  errorText: 'Texto de erro'
}

export const StateValid = Template.bind({})
StateValid.args = {
  ...generalArgs,
  state: 'valid',
}

export const WithHint = Template.bind({})
WithHint.args = {
  ...generalArgs,
  hintText: 'Texto de hint',
}
