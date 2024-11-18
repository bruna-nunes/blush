import BlushCollapse from './blush-collapse.vue';

export default {
  title: 'BLUSH/blush-collapse',
  component: BlushCollapse,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Componente de Collapse com uma lista de opções de estilos. Também pode se comportar como um Accordion.',
  },
  argTypes: {
    name: {
        control: {
            type: 'text'
        },
        description: 'Nome do Collapse. Obrigatório pois o componente usa inputs checkbox ou radio para os comportamentos de abertura e fechamento.',
        table: {
            type: {
                summary: 'string'
            }
        }
    },
    title: {
      control: {
          type: 'text'
      },
      description: 'Título que aparecerá no Collapse aberto ou fechado.',
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
        description: 'Estilo do Collapse',
        options: ['primary', 'primary-outline',
        'accent', 'accent-outline',
        'success', 'success-outline',
        'warning', 'warning-outline',
        'danger', 'danger-outline',
        'neutral', 'neutral-outline'],
    },
    opened: {
      name: 'opened',
      control: {
          type: 'boolean'
      },
      description: 'Define se o Collapse está aberto ou não.',
      table: {
          type: {
              summary: 'boolean'
          },
          defaultValue: {
            summary: 'false'
          }
      }
    },
    accordion: {
      name: 'accordion',
      control: {
          type: 'boolean'
      },
      description: 'Define se o Collapse é um Accordion. Se sim, collapses com mesmo `name` e que tiverem essa propriedade como `true` serão considerados como um grupo e só um poderá ficar aberto por vez.',
      table: {
          type: {
              summary: 'boolean'
          },
          defaultValue: {
            summary: 'false'
          }
      }
    },
    default: {
      control: false,
      description: 'Slot padrão que renderizará o conteúdo do Collapse mostrado ao ser aberto.',
      table: {
          category: 'Slots',
          type: {
            summary: 'html'
          }
      }
    },
    onChangeCollapseVisibility: {
      name: '@on-change-collapse-visibility',
      type: {
        name: 'function',
        required: false
      },
      defaultValue: null,
      control: {
          type: 'function'
      },
      description: 'Define a função que será executada quando o Collapse abrir/fechar. O evento emite o nome do collapse que teve sua visibilidade alterada.',
      table: {
          type: {
              summary: 'function'
          },
          defaultValue: {
            summary: null
          }
      },
      action: 'selectedItemsChange'
    },
  },
};

const generalArgs = {
    name: 'blush-collapse',
    title: 'Título do Collapse',
    variant: 'neutral-outline',
    opened: false,
    accordion: false,
}

const Template = (args) => ({
  components: { BlushCollapse },
  setup: () => ({
    args
  }),
  template: `
    <blush-collapse
      :name="args.name"
      :title="args.title"
      :variant="args.variant"
      :opened="args.opened"
      :accordion="args.accordion"
    >
      Conteúdo do collapse
    </blush-collapse>
  `,
})

export const Example = Template.bind({})
Example.args = {
  ...generalArgs, 
}

export const Primary = Template.bind({})
Primary.args = {
  ...generalArgs,
  variant: 'primary'
}

export const PrimaryOutline = Template.bind({})
PrimaryOutline.args = {
  ...generalArgs,
  variant: 'primary-outline'
}

export const Accent = Template.bind({})
Accent.args = {
  ...generalArgs,
  variant: 'accent'
}

export const Opened = Template.bind({})
Opened.args = {
  ...generalArgs,
  opened: true
}