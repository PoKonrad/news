# README

## Description

This is an application that requires an [https://newsapi.org/](https://newsapi.org/) API key to be run. It can be run via Docker Compose or without Docker. 

## Requirements

In order to run the application, you will need to have Docker installed on your machine. If you wish to run it without Docker, you will need to have Node.js installed.

## Running the Application with Docker Compose

To run the application with Docker Compose, follow these steps:

1. Open the `compose.yml` file.
2. Add your API key in the designated area.
3. Open a terminal window and navigate to the directory where the `compose.yml` file is located.
4. Run the following command: `docker compose up`.
5. The application should now be running at `localhost:80`.

## Running the Application without Docker

To run the application without Docker, follow these steps:

1. Open the `public/env_vars.js` file.
2. Add your API key in the designated area.
3. Open a terminal window and navigate to the directory where the application files are located.
4. Run the following command: `npm install`.
5. Run the following command: `npm start`.
6. The application should now be running.
