This project includes the following Dockerfiles:

* *Dockerfile* - Non-parameterized Dockerfile for building the application. References a base image in Docker Hub.
* *Dockerfile-app* - Parameterized, accepts the `REGISTRY_NAME` argument to specify the FQDN of the container registry from which the base image is pulled.
* *Dockerfile-base* - Defines a base image for the application defined in *Dockerfile-app*.

This project also includes the following YAML files:

* *taskmulti.yaml* - Specifies a multistep task to build, run, and push a container image specified by *Dockerfile*.
* *taskmulti-multiregistry.yaml* - Specifies a multistep task to build, run, and push container images specified by *Dockerfile* to multiple registries.

You can perform the following steps to run the sample application. These steps require a local [Docker](http://docker.com) installation.

1. `git clone https://github.com/adodado/az204-container-demo/docker-frontend-example`
1. `cd docker-frontend-example`
1. `docker build -t dockerfrontendexample:v1 .`
1. `docker run -d -p 8080:80 dockerfrontendexample:v1`
1. Navigate to http://localhost:8080 to view the running application

## Resources

[Azure Container Registry](https://azure.microsoft.com/services/container-registry/)

[Azure Container Registry documentation](https://docs.microsoft.com/azure/container-registry/)

<!-- LINKS - External -->
[build-quick]: https://docs.microsoft.com/azure/container-registry/container-registry-tutorial-quick-build
[build-task]: https://docs.microsoft.com/azure/container-registry/container-registry-tutorial-build-task
[build-base]: https://docs.microsoft.com/azure/container-registry/container-registry-tutorial-base-image-update
[multi-step]: https://docs.microsoft.com/azure/container-registry/container-registry-tutorial-multistep-task
[docs]: http://docs.microsoft.com
