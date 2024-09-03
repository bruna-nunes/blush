import BlushModal from './blush-modal.vue'

const props = {
  isOpen: true,
  showDismissButton: false,
  closeOutside: true,
  onOpen: () => console.log('modal open'),
  onClose: () => console.log('modal close'),
  variant: 'neutral-outline',
  header: 'Header',
  content: 'Content',
  footer: 'Footer'
}

describe('renders', () => {
  it('render blush modal style correctly based on provided props', () => {
    cy.mount(BlushModal, { 
      props
    })

    cy.get('.blush-modal')
      .should('have.css', 'background-color', 'rgb(242, 242, 242)')
      .should('have.css', 'border-color', 'rgb(225, 225, 225)')
      .should('have.css', 'color', 'rgb(100, 100, 100)')
      .should('have.css', 'border-radius', '4px')
  })

  it('render blush modal with header if provided', () => {
    cy.mount(BlushModal, {
      props,
      slots: {
        header: props.header
      }
    })

    cy.get('.blush-modal')
      .find('header').should('be.visible')
  })

  it('render blush modal with footer if provided', () => {
    cy.mount(BlushModal, {
      props,
      slots: {
        footer: props.footer
      }
    })

    cy.get('.blush-modal')
      .find('footer').should('be.visible')
  })
})

describe('events', () => {
  it('emit onClose event', () => {
    const onCloseSpy = cy.spy().as('onCloseSpy')
    cy.mount(BlushModal, { props:
      {
        ...props,
        showDismissButton: true,
        onOnClose: onCloseSpy
      },
      slots: {
        header: props.header,
        content: props.content,
        footer: props.footer
      }
    })

    cy.get('.blush-modal .dismiss-icon').click()
    cy.get('@onCloseSpy').should('have.been.calledOnce')
  })
})
