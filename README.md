# Code review exercise

Before you begin the exercise, please read the instructions listed below.

## Overview

This repository contains a simple web application that allows users of our fictional Scranton Public library to create an user account and view personalized book recommendations from a database that already contains a list of their favorite authors, books and genres. Perform a code review and provide your feedback through in-line comments.

## What's expected from the code review?
Code review needs to cover at-least 2 of the areas listed below. Not every mistake needs to be identified, but ideally, you would uncover at-least 10 items for improvement. These items of improvement would address one or more of the criteria listed below:

* Technical design & code optimization
* Security
* Logging & Error Handling
* Code hygiene/organization (we all want a codebase that's easily readable)
* Unit testing

Lastly, think of the code review exercise as an invitation to add value. Be empathetic. Your comments should seek to help the requestor by identifying problems  and offering constructive suggestions, without making them feel like a screw-up.

## Areas
The web application consists of 4 areas:
1. React frond-application that consumes REST APIs as defined in APIContract.md  (files located under /recommendation-app/src folder)
2. REST API Contract (APIContract.md file)
3. Java or Node.js application to implement REST APIs as defined in the APIContract.md. This application connects to MYSQL relational database to retrieve data (files should be located under the /java or /node folder)
4. MYSQL Relational Database (files located under /mysql folder)

Note: The repository doesn't include all the files required to build/release code or spin up compute/storage resources. Please avoid efforts in trying to execute the code in your computer. The intent of the exercise is to assess technical skills in the context of a code review.


## About the app

The recommendation app covers two main use-cases:
1. Create an account in the library by filling up form on a web page. (Assume, authentication will be added later on). ![](use-case-1.png)

2. View personalized book recommendations from a database that already contains a list of their favorite authors, books and genres. (Assume, database is already populated with your data from the past). ![](use-case-2.png)
