import BlushProgress from './blush-progress.vue';

export default {
  title: 'BLUSH/blush-progress',
  component: BlushProgress,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Componente de indicação de progresso, com uma lista de opções de cores, estilos e tamanhos.',
  },
  argTypes: {
    id: {
        control: {
            type: 'text'
        },
        description: 'ID da barra de progresso',
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
        description: 'Tipo da barra de progresso',
        options: ['linear'],
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
        description: 'Tamanho da barra de progresso',
        options: ['small', 'medium', 'large'],
    },
    label: {
        control: {
            type: 'text'
        },
        description: 'Label da barra de progresso',
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
        description: 'Estilo da barra de progresso',
        options: [
            'primary',
            'accent',
            'success',
            'warning',
            'danger',
            'neutral'
        ],
    },
    showProgressText: {
        control: {
            type: 'boolean'
        },
        description: 'Define se a barra de progresso mostrará um texto indicando o progresso atual',
        table: {
            type: {
                summary: 'boolean'
            }
        }
    },
    max: {
        control: {
            type: 'number'
        },
        description: 'Define o valor máximo da barra de progresso, que indicará seu preenchimento completo.',
        table: {
            type: {
                summary: 'number'
            }
        }
    },
    value: {
        control: {
            type: 'number'
        },
        description: 'Define o valor atual da barra de progresso.',
        table: {
            type: {
                summary: 'number'
            }
        }
    },
  },
};

const generalArgs = {
    id: 'barra-progresso',
    type: 'linear',
    label: 'Progresso xyz',
    size: 'medium',
    variant: 'primary',
    showProgressText: true,
    max: 80,
    value: 20,
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
