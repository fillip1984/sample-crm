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

## Sources

### Useful tips for things that tripped me up while learning Kubernetes

- [Launch a minikube dashboard so you have a graphical representation of your Kubernetes cluster](https://kubernetes.io/docs/tutorials/hello-minikube/)

- [Create a tunnel to a NodePort/LoadBalance service so you can access your pods from a web browser](https://minikube.sigs.k8s.io/docs/handbook/accessing/)
  - When running minikube locally and you want to access your services that are running in a web browser you have to tunnel into your minikube cluster since it is a complete separate virtual machine running its own network...

- [Load a docker image from your local instance instead of pulling from remote](https://stackoverflow.com/questions/42564058/how-can-i-use-local-docker-images-with-minikube)
  - When working on docker and kubernetes at first you will probably not be uploading your images to a repository. This shows you how to load your docker images from your local running docker into the docker that is running within minikube
  - Don't follow the accepted answer, instead use the minikube image load... example

### Introduction to topics

- [Kubernetes intro](https://www.youtube.com/watch?v=VnvRFRk_51k&list=PLy7NrYWoggjziYQIDorlXjTvvwweTYoNC)
- [Kubernetes Roadmap](https://www.youtube.com/watch?v=S8eX0MxfnB4&list=PLy7NrYWoggjxWelYwfEPe7YU-DKGFugtt)
- [DevSecOps intro](https://youtu.be/gLJdrXPn0ns?si=6dOOgdz7eJcUErr8)

### Practical example which goes beyond concepts and builds something

- [Tutorial for Kubernetes that builds out both a front and backend](https://www.youtube.com/watch?v=pGbBuwzyiV4&list=PLuNxlOYbv61h66_QlcjCEkVAj6RdeplJJ)
  - There are tons of great ideas here. My favorite was where he shows you how to build your yaml files using a [--dryrun command to generate the yaml files instead of writing them from scratch](https://youtu.be/d1X85fhkSKM?si=47qyjq2l_aIwp5Nr&t=1010)
  - This tutorial uses Lens instead of Minikube (which Nana teaches you) but you can use Minikube instead. If you really want a UI look at running the [Minikube dashboard](https://minikube.sigs.k8s.io/docs/handbook/dashboard/)

- [Example for throwing up a Kubernetes deployment/service](https://medium.com/@platform.engineers/deploying-a-simple-web-application-on-kubernetes-43bbf724c23d)
