## Prerequisites
Ensure you have the following installed on your system:

Docker: Install Docker
Docker Compose: Install Docker Compose
Git: Install Git
## Clone the Repository
**Clone this repository to your local machine:**
**git clone <repo>**
**cd <repo directory>**
**Set up your environment variable the one should be NEXT_PUBLIC_BACKEND_URL for frontend**
**The url is hardcoded in the backend for port 5003**

To start it you can do it the long or short way. I like to do it step by step to make sure its good as I go
But I know some don't care and just want to get at it. 
Either Long way:
  **docker-compose build**
  **docker docker-compose up**
Or Short way
**docker-compose up --build**

Build the Docker images for the frontend and backend.
Start the containers.
Expose the frontend on http://localhost:3000.
Expose the backend on http://localhost:5003.
Only one used for front end is http://localhost:5003/events

## Accessing the Application
**Frontend: Open http://localhost:3000 in your web browser.**
**Backend API: API endpoints are available at http://localhost:5003.**

### Docker commands
**stop it**
**docker-compose stop**
**bring services down**
**docker-compose down**
**rebuild and restart services**
**docker-compose up --build**

## Troubleshooting
Database Issues: If you encounter any issues with the data not persisting or loading correctly, ensure that the events-data.json is properly initialized and that Docker has the correct file permissions.
Port Conflicts: If you encounter port conflicts, you may need to change the exposed ports in the docker-compose.yml file.

If all else fails, just navigate to front end folder, run npm i and then npm run dev and make sure the env file is set to the backend url http://localhost:5003/events
then navigate to the backend folder and do the same, npm i and then npm run dev
