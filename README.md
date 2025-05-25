# Sample CRM

Building out a very generic contact relationship management (CRM) tool with front and backend combined into a jar and then container'ized and deployed to a Kubernetes cluster...

I'm learning a lot of tech here so I wouldn't copy unless you want an amateur's attempt

## Techstack

- Frontend
  - Only relying on Client Side Rendering (CSR) so no SSR, IGR, or SSG (unless Vite or Tanstack Start somehow does it for me without my knowledge)
  - Vite
  - Tanstack Router and Query for routing and state management
  - Tailwind for UI
- Backend
  - SpringBoot
    - Rest controllers (not relying on Spring Data Rest)
    - Spring Data JPA for persistence ORM
    - Postgres for RDBS
    - Basic Auth for now, could switch to OAuth but the real solution would be Open ID Connect (don't want to bother setting up OIDC though)

## TODOs

- [X] Stub out workspace that will build frontend and backend with gradle
- [X] Add github action workflow to build and try to use caching optimizations
- [X] Build backend crud for Person and Address entities
  - [X] Test crud with swagger UI
  - [X] Produce Typescript artifact from swagger UI to scaffold out the API integration from frontend
- [X] Build frontend crud UI for Person and Address entities
  - [X] create ui to perform crud capabilities _(create, read all, delete are done)_
- [ ] Produce deployment artifact
  - [X] Produce docker image
    - [ ] explore docker compose after checking on K8S
  - [ ] Produce K8S deployment artifact
  - [ ] Pick Infrastructure as code (IaC) solution
- [ ] Test infrastructure/misc infra questions
  - [ ] Blue/green deployments
  - [ ] self healing
  - [ ] degraded performance rerouting
  - [ ] how does session affinity work? (do users lose their session when nodes are replaced?)
  - [ ] how does elasticity work?
  - [ ] any use for API Gateway?
  - [ ] Cognito security?
  - [ ] Automatic DNS and certificate generation
  - [ ] Automatic SSO/OIDC registration and rotation
  - [ ] Secrets manager
- [ ] Test some test framework
  - [ ] Pick framework (selenium, or something that's typescript based and can do e2e testing)
- [ ] Nice to haves
  - [ ] Pick rule engine and try to create some more elaborate business rule validations/flows
  - [ ] Use projections to shape json returned
