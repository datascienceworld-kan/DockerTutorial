# Docker Tutorial
This is docker tutorial for beginer. These are the main knowledge you will achieve after this tutorial;
- Get a general idea of docker
- Practice to build a docker image.
- Run a docker container from a certain docker image.
- Create a network bridging multiple docker containers.
- Binding volume from a host machine folder to a docker container path.
- Create a docker compose for a complex application including multiple components.

# Create Dockerfile
Our application including two components `backend` and `frontend`.
- backend: code of the backend that allows to register and login new account.
- frontend: this is a simple website with login screen and enter to the main page.

**For backend:**

```
cd backend

# Build docker image for backend with name backend_fastapi:0.0.1
docker build . -t backend_fastapi:0.0.1

# Run a docker container for backend corresponding to aformentioned docker image.
docker run -d -p 5000:5000 --name backend_fastapi_container backend_fastapi:0.0.1

# List out all container services are running. It must show that a container with name backend_fastapi_container is running
docker ps
```
Now you can access to http://localhost:5000/docs to access all API endpoints document.

**For frontend:**

```
cd frontend

# Build docker image for frontend with name frontend_fastapi:001
docker build . -t frontend:0.0.1

# Run a docker container for frontend
docker -run -d -p 3000:3000 --name frontend_container frontend:0.0.1

# List out all container services are running.
docker ps
```

Now we can access application at  http://localhost:3000

# Create a docker-compose for multiple containers

Explain docker-compose.yaml

```
version: '3'
services: # There are two services in this application is backend and frontend
  backend: # backend service
    container_name: backend_container # contrainer name for backend
    build: ./backend # directory to build container
    restart: always
    ports: 
      - "5000:5000"
    environment: # setup environment variables
      - LOCAL_HOST=http://localhost
      - PORT=5000

  frontend: # frontend service
    build: ./frontend # directory to build container
    container_name: frontend_container # container name for frontend
    ports: # mapping port
      - "3000:3000"
    environment: # setup environment variables
      - BASE_URL=http://localhost
      - PORT=5000
    volumes:
      - ./node_modules:/app/node_modules # mount folder node_modules from outside to /app/node_modules
```

Docker compose can run all services, which delared inside docker-compose.yaml file, to run this application by command:

```
docker-compose up -d
```

# Reference
1. [Docker Introduction Slide - Pham Dinh Khanh](https://drive.google.com/file/d/1VWkS5dItymY5pI-93ahVj9vJB0JNAnKJ/view?usp=sharing)
2. [Docker cheatsheet geeks-for-geeks](https://www.geeksforgeeks.org/docker-cheat-sheet/)
3. [Docker compose geeks-for-geeks](https://www.geeksforgeeks.org/docker-compose/)
4. [Docker cheatsheet github](https://github.com/drminnaar/cheatsheets/blob/master/docker-cheatsheet.md)
5. [Docker and Kubernete - freeCodeCamp](https://youtu.be/kTp5xUtcalw?si=4ru3Q1VBSc1Xr291)
6. [Complete Kubernetes Course - From BEGINNER to PRO](https://youtu.be/2T86xAtR6Fo?si=VZ4W2QWr6pE7ircY)

# Citation
```
@article{docker_tutorial,
    title={Docker tutorial: Machine Learning in Production - DSEB 64B NEU},
    author={khanhphamdinh},
    email= {phamdinhkhanh.tkt53.neu@gmail.com},
    year={2025}
}
```
