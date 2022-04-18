# NodeJS-APIs-for-scheduling-meetings-between-two-users
This repository contains REST APIs for a simple Calendly-like application that lets a user schedule a meeting with another user.
There are two REST APIs wriiten in NodeJS. The first one is for letting a user schedule a meeting with another user if they are free at that date and time.
The another one is for letting a user view another user’s meetings to see when they are free.
A user creation or authentication flow is not implemented. It is assumed that users already exist.
A meeting is always scheduled between 2 people, not more.
MongoDB is used.
There is also one unit test for one API endpoint.

To start the server: node app.js.
Then use appropriate URL to call a particular API.
To run test after starting the server: npm run test.

Here is a screenshot of calling to the API to schedule a meeting through postman: https://user-images.githubusercontent.com/103904689/163827658-81363045-4c4a-4bb5-a773-c0ed4c6b491e.png.

After scheduling two meetings, here are the screenshots of the documents of two users in database: https://user-images.githubusercontent.com/103904689/163828159-734e62a7-b508-476a-bc7d-069ea8288786.png and https://user-images.githubusercontent.com/103904689/163828411-b0f25efa-e083-4e4b-93bf-5c66594ed9fb.png.

Here is an illustration of a case in which a requested meeting can't be scheduled due to already scheduled meetings: https://user-images.githubusercontent.com/103904689/163831908-99000017-db2f-4283-839b-3ed5829e66ec.png.

Here is a screenshot of calling to the API to view another user's meetings. It returns 'meetings' array which contains all scheduled meetings of that user: https://user-images.githubusercontent.com/103904689/163829884-7b39d46a-ce5a-4270-9f0b-f12b8b31c3c0.png.

Illustration of a case where JOI validation fails. In the call to the API to see user's meetings, request body must contain _id and userId. But if this is not the case, JOI validator returs an error: https://user-images.githubusercontent.com/103904689/163831002-78092ea5-3e4f-4a9f-842e-4a92df6ca37b.png.

Illustration of passing the test: https://user-images.githubusercontent.com/103904689/163837917-c03721e2-b6a2-4151-9d26-36a6ea420502.png.

Illustration of failing the test after changing the code such that it doesn't return an object that contains 'meetings' property: https://user-images.githubusercontent.com/103904689/163839376-f6b4911d-60bf-46da-9050-6486cdfc5932.png.
