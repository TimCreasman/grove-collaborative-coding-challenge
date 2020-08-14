# grove-collaborative-coding-challenge
Coding Challenge for Grove Collaborative. It is a simple CLI Application for finding the nearest store from a database.

## Installation and Setup
To install this CLI, clone the repo to a new folder on your machine.
If you do not have node and npm, install it [here](https://nodejs.org/en/download/).
Once cloned, navigate to the directory and run ```npm install``` to install the required dependencies.
Before running the program, open up the ```config.json-template``` file and add your ApiKey to the geoCodeAPI.apiKey section and rename the ```config.json-template``` to just ```config.json```.
Once the config is setup, you can run the CLI either with ```node .``` or install it globally: ```npm install -g .``` and then run the ```find_store``` command to get started. To run the test suite run ```npm test```.

## Uninstall
If you installed the CLI globally and wish to uninstall it, simply run ```npm uninstall -g find_store-cli```.

## Description of Solution
To tackle this problem, I took a modular approach and broke out the main functionality into three main JavaScript modules. There is the geoCoding API interface, the database interface, and a helper class. The index.js is responsible for retrieving the command line arguments from the user and attaching the modules into a single pipeline. The geocoding API interface simply calls [MapQuest's GeoCoding API](https://developer.mapquest.com/documentation/geocoding-api/) with either the user's address or zip code. From here, the latitude and longitude is passed into the database interface where it compares the distance between the user's location and the store locations until it finds the nearest store. Lastly, this information is sent back to the index.js file where it is parsed and displayed back to the user.

## Assumptions
The program assumes the database of store locations is not empty. If the database is empty, it will return an empty storeInfo object.

## Technologies used
NodeJS for the backend framework. Yargs for reading in user command line arguments. Axios for making HTTP Calls. Fast-csv for reading in the csv file. Mocha and Chai for the testing framework.
