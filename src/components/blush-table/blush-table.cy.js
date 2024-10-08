import BlushTable from './blush-table.vue'

const props = {
  name: 'table',
  columns: [
  {
    key: 'name',
    title: 'Nome'
   },
   {
    key: 'age',
    title: 'Idade',
   },
   {
    key: 'color',
    title: 'Cor'
   }
  ],
  items: [
    {
      name: 'Nome 1',
      age: '20',
      color: 'Amarelo',
    },
    {
      name: 'Nome 2',
      age: '30',
      color: 'Azul',
    },
    {
      name: 'Nome 2',
      age: '40',
      color: 'Vermelho',
    }
  ],
  variant: 'neutral-outline',
  linesStyle: 'none',
  selectable: false,
}

describe('renders', () => {
  it('render blush table style correctly based on provided props', () => {
    cy.mount(BlushTable, { 
      props
    })

    cy.get('.blush-table table th')
      .should('have.css', 'background-color', 'rgb(242, 242, 242)')
      .should('have.css', 'border-top-color', 'rgb(236, 236, 236)')
      .should('have.css', 'color', 'rgb(100, 100, 100)')

    cy.get('.blush-table table td')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'border-top-color', 'rgb(55, 55, 55)')
      .should('have.css', 'color', 'rgb(55, 55, 55)')
  })
})

describe('events', () => {
  it('emit selectedItemsChange event', () => {
    const selectedItemsChangeSpy = cy.spy().as('selectedItemsChangeSpy')
    cy.mount(BlushTable, { props:
      {
        ...props,
        selectable: true,
        onSelectedItemsChange: selectedItemsChangeSpy
      },  
    })

    cy.get('.blush-table input[type="checkbox"]').first().check()
    cy.get('@selectedItemsChangeSpy').should('have.been.calledOnce')
  })
})
