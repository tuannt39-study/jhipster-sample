import { entityItemSelector } from '../../support/commands';
import {
  entityTableSelector,
  entityDetailsButtonSelector,
  entityDetailsBackButtonSelector,
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityCreateCancelButtonSelector,
  entityEditButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('JobHistory e2e test', () => {
  const jobHistoryPageUrl = '/job-history';
  const jobHistoryPageUrlPattern = new RegExp('/job-history(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'admin';
  const password = Cypress.env('E2E_PASSWORD') ?? 'admin';

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });
    cy.visit('');
    cy.login(username, password);
    cy.get(entityItemSelector).should('exist');
  });

  beforeEach(() => {
    cy.intercept('GET', '/api/job-histories+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/api/job-histories').as('postEntityRequest');
    cy.intercept('DELETE', '/api/job-histories/*').as('deleteEntityRequest');
  });

  it('should load JobHistories', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('job-history');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('JobHistory').should('exist');
    cy.url().should('match', jobHistoryPageUrlPattern);
  });

  it('should load details JobHistory page', function () {
    cy.visit(jobHistoryPageUrl);
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        this.skip();
      }
    });
    cy.get(entityDetailsButtonSelector).first().click({ force: true });
    cy.getEntityDetailsHeading('jobHistory');
    cy.get(entityDetailsBackButtonSelector).click({ force: true });
    cy.wait('@entitiesRequest').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.url().should('match', jobHistoryPageUrlPattern);
  });

  it('should load create JobHistory page', () => {
    cy.visit(jobHistoryPageUrl);
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('JobHistory');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.get(entityCreateCancelButtonSelector).click({ force: true });
    cy.wait('@entitiesRequest').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.url().should('match', jobHistoryPageUrlPattern);
  });

  it('should load edit JobHistory page', function () {
    cy.visit(jobHistoryPageUrl);
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        this.skip();
      }
    });
    cy.get(entityEditButtonSelector).first().click({ force: true });
    cy.getEntityCreateUpdateHeading('JobHistory');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.get(entityCreateCancelButtonSelector).click({ force: true });
    cy.wait('@entitiesRequest').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.url().should('match', jobHistoryPageUrlPattern);
  });

  it('should create an instance of JobHistory', () => {
    cy.visit(jobHistoryPageUrl);
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('JobHistory');

    cy.get(`[data-cy="startDate"]`).type('2021-09-14T05:07').should('have.value', '2021-09-14T05:07');

    cy.get(`[data-cy="endDate"]`).type('2021-09-13T19:16').should('have.value', '2021-09-13T19:16');

    cy.get(`[data-cy="language"]`).select('ENGLISH');

    cy.setFieldSelectToLastOfEntity('job');

    cy.setFieldSelectToLastOfEntity('department');

    cy.setFieldSelectToLastOfEntity('employee');

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.wait('@postEntityRequest').then(({ response }) => {
      expect(response.statusCode).to.equal(201);
    });
    cy.wait('@entitiesRequest').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
    cy.url().should('match', jobHistoryPageUrlPattern);
  });

  it('should delete last instance of JobHistory', function () {
    cy.intercept('GET', '/api/job-histories/*').as('dialogDeleteRequest');
    cy.visit(jobHistoryPageUrl);
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', response.body.length);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('jobHistory').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', jobHistoryPageUrlPattern);
      } else {
        this.skip();
      }
    });
  });
});
