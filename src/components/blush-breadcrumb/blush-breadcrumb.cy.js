import BlushBreadcrumb from './blush-breadcrumb.vue'
import { createRouter, createWebHistory } from 'vue-router'
import BlushCard from '../blush-card/blush-card.vue'

const props = {
  items: [
    {
      text: 'Google',
      href: 'https://google.com',
      active: true
    },
    {
      text: 'Card 1',
      toRoute: '/card1'
    }
  ],
  separatorStyle: 'chevron',
  variant: 'primary'
}

const routes = [
  {
      path: '/card1',
      component: BlushCard,
      props: {
          title: 'Card1 from router',
          variant: 'neutral-outline',
          imageSrc: 'https://picsum.photos/600/300/?image=25',
          imageAlt: 'Alt image card',
          style: 'max-width: 20rem;'
      }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe('renders', () => {
  it('render blush breadcrumb correctly based on provided props', () => {
    cy.mount(BlushBreadcrumb, { props, global: { plugins: [router]} })

    cy.get('.blush-breadcrumb')
      .should('have.css', 'color', 'rgb(55, 55, 55)')
    
    cy.get('.blush-breadcrumb .item-link .link.active')
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'font-weight', '600')
      .should('have.text', props.items[0].text)

    cy.get('.blush-breadcrumb .item-link .link:not(.active)')
      .should('have.css', 'font-size', '16px')
      .should('have.text', props.items[1].text)
  })
})

describe('links and routers', () => {
  it('should have correct href if provided', () => {
    cy.mount(BlushBreadcrumb, { props, global: { plugins: [router]} })

    cy.get('.blush-breadcrumb .item-link .link').first()
    .should('have.attr', 'href', props.items[0].href)

  })

  it('should have correct route if provided', () => {
    cy.mount(BlushBreadcrumb, { props, global: { plugins: [router]} })

    cy.get('.blush-breadcrumb .item-link .link').last().click()

    cy.url().should('include', props.items[1].toRoute)

  })

})
