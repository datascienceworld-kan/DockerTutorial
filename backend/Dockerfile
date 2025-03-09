# Start from a based image is python:3.9-slim
FROM python:3.9-slim
# Declare current working directory. Afther this command, docker container will define the working directory is ./app
WORKDIR ./app
# Copy requirements.txt file into the working directory first to install python libraries.
COPY requirements.txt . 
# Similar with COPY requirements.txt ./app
# Install requirements.txt
RUN pip install -r requirements.txt
# Copy other files from host to docker container at ./app folder
COPY . .
# Expose port 5000
EXPOSE 5000
# Run this python main.py file to start backend
CMD ["python", "main.py"]
