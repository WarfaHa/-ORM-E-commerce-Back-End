# (ORM) E-commerce-Back-End
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Built using Sequelize Models to connect to MYSQL database, then using API Routes in Insomnia for each category, product, or tag.

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Walkthrough Video](#walkthrough-video )
* [Licenses](#licenses)
* [Contact](#contact)
* [Credits](#credits)

## Description
I built the back end for an e-commerce site. I took a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

## Installation
You’ll need to use the MySQL2 and Sequelize packages to connect your Express.js API to a MySQL database and the dotenv package to use environment variables to store sensitive data, like your MySQL username, password, and database name.

## Usage

GIVEN a functional Express.js API<br/>
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file<br/>
THEN I am able to connect to a database using Sequelize<br/>
WHEN I enter schema and seed commands<br/>
THEN a development database is created and is seeded with test data<br/>
WHEN I enter the command to invoke the application<br/>
THEN my server is started and the Sequelize models are synced to the MySQL database<br/>
WHEN I open API GET routes in Insomnia Core for categories, products, or tags<br/>
THEN the data for each of these routes is displayed in a formatted JSON<br/>
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core<br/>
THEN I am able to successfully create, update, and delete data in my database<br/>




## Walkthrough Video 
Below is a GIF that demonstrates the start of the application.

![GIF-of-SEEDING-SERVER](./assets/GIF-Seeding-Server.gif)

Below is a GIF that demonstrates the GET/POST/PUT Routes in Insomnia.

![GIF-of-GET-POST-ROUTES](./assets/GIF-GET-POST-PUT-Routes.gif)

## Licenses
     To view the MIT license. Click the license button above.

## Contact
If you have any additional questions, here's how to reach me.

GitHub: https://github.com/WarfaHa  
Email: Warfa60@gmail.com

## Credits

This backend application was created by Warfa Hassan.
