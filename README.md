# NodeJS-APIs-for-scheduling-meetings-between-two-users
This repository contains REST APIs for a simple Calendly-like application that lets a user schedule a meeting with another user.
There are two REST APIs wriiten in NodeJS. The first one is for letting a user schedule a meeting with another user if they are free at that date and time.
The another one is for letting a user view another user’s meetings to see when they are free.
A user creation or authentication flow is not implemented. It is assumed that users already exist.
A meeting is always scheduled between 2 people, not more.
MongoDB is used.
There is also one unit test for one API endpoint.

To start the server: node app.js
Then use appropriate URL to call a particular API
To run test after starting the server: npm run test
