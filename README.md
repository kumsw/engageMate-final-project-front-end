# EngageMate - Your real time remote learning companion

**School of Code - Final Project**

##### December - January 2021

Remote teaching delivery? Headache no more! <br/>

![engageMate logo](public/images/EngageMateImageTextDark.png)

EngageMate is the product of four weeks of agile team work. I worked in a team of six developers to solve the problem: **"How can we improve remote teaching delivery?"**. We created a responsive web application which facilitates live feedback using 4 bespoke features(Thumbometer, Raise Hand, Live Quiz and DJ deck) between _'coaches'_ and _'participants'_ during remote teaching. This was a great oppertunity to utilise all the skills I have learnt over sixteen weeks of learning how to code.

### Take a look

EngageMate is hosted on Netlify: https://engagemate.netlify.app/<br/>
[Frontend Repo](https://github.com/kumsw/engageMate-final-project-front-end)<br/>
[Backend Repo](https://github.com/kumsw/engageMate-final-project-back-end)<br/>

### Want to see the app in action?

[View demo day presentation](https://www.youtube.com/watch?v=p23oB7cUReQ&t=10s)
We live demo the app as well as discuss the planning, project mangagement, tech stack, challenges, learnings and future plans for EngageMate.

## The Problem

Problem with remote teaching delivery is that it can be really challenging to encourage engagement and participation, as you don’t get the same live feedback and reception that would in real life, making it difficult to gauge audience understanding.

## The Solution

- **Thumbometer** feature can help with gauging how everyone is feeling with real time feedback from a thumb response.
- **The Hand Raise** feature allows participants to ask questions when they arise. A desktop notification and toast pop is sent to the coach. They can then view the order of hands raised with a short description of the issue.
- **Live Quiz** feature helps coached understand if participants are digesting what is being said.
- **DJ Deck** adds custom sounds and music and a spotify playlist API to keep things fun and engaging.

**Tech Stack:** HTML, CSS, JavaScript, Socket.io, Push,js, uuid, React, JSX, dotenv, Express.js, Node.js, PostgreSQL, Auth0, Jest, SuperTest, Cypress.io Cloud hosted using Heroku and Netlify.

## To Start

Clone the the frontend and backend repos. Download and install npm modules for both front and backend repos. Add .env files for local usage You will need a postgres database to store data.

## Installation

1.  Clone the frontend<br/>
    `https://github.com/kumsw/engageMate-final-project-front-end`<br/>
2.  Clone the backend<br/>
    `https://github.com/kumsw/engageMate-final-project-back-end`<br/>
3.  Download the required npm modules in both repos.<br/>
    `npm i`<br/>
4.  Add a .env file in the root of the frontend folder with the entry<br/>
    `REACT_APP_url=http://www.localhost:5000`<br/>
    `REACT_APP_AUTH0_DOMAIN={YOUR AUTH0 CREDENTIALS}`<br/>
    `REACT_APP_AUTH0_CLIENT_ID={YOUR AUTH0 CREDENTIALS}`<br/>
    `REACT_APP_clientID={YOUR SPOTIFY API CREDENTIALS}`<br/>
    `REACT_APP_clientSecret={YOUR SPOTIFY API CREDENTIALS}`<br/>

5.  Add a .env file in the root of the backend folder with the entry<br/>
    `DATABASE_URL`<br/>
6.  Run the createTable.js and createSessionTable.js script from the backend folder.<br/>
    `npm run createTable`<br/>
    `npm run createSessionTable`<br/>
7.  Run the populateTable.js and populateSessionTable.js script from the backend folder.<br/>
    `npm run populateTable`<br/>
    `npm run populateSessionTable`<br/>
8.  Open a terminal and start the backend and frontend using:<br/>
    `npm run start`<br/>

### Details

We used agile ways of work and split the four weeks into short sprints. We spent the first week planning in depth. After analysing user research surveys we ideated solutions and decided on our minimum viable product, the thumbometer. We also used this sprint to explore a range of different technolgies that we could use. We spend time thinking about reusable components so that once we completed the thumbometer we could quickly build out our stretch goal features.

## Thumbometer

**Coach instructions**

- Open the thumbometer feature use the drop down to select one of the preset question options provided or select custom option.
- Select timer preset options or pick custom time in seconds.
- Start Session will send a notification to participants to enter the Thumb room.
- Start Timer will begin the timer and responses can be collected.
- Results will be displayed by the rotation of the thumb the results are also available as a percentage.
- At end of timer or on stop timer the session data is then submitted to the database and is visible in the admin page.

**Participant instructions**

- After notification, open the thumbometer feature (either through the nav bar or by clicking on the thumb icon).
- After coach has submitted a question it appears in a heading. The participant can then use the slider below the thumb to register their response to the question. Left is low, right is high as the participant moves the slider the thumb rotates round.
- The percentage amount of their response is also displayed. The time amount is displayed with a progression bar and when it gets down to 5 seconds it turns red, also displayed in digits below.

## Hand Raise

**Coach instructions**

- On hand raise a notification is sent to the coach, the list of hands raised is viewable by opening the raise a hand feature (either through the nav bar or by clicking on the hand icon).
- Hands are shown in order with partcipant details and short description.

**Participant instructions**

- To raise hand: click the icon of a closed hand this will send a notification to the coach that a hand has been raised with the name attached to it.
- An added feature is that could also use the input field to put a topic.
- Hand can be lowered by clicking the hand icon again which has now changed to an open hand (or the speaker could reset the hand from their view).

## Live Quiz

**Coach instructions**

- Can set short question and up to four answers.
- Select the correct answer with the buttons next to each answer(this will not be visible to the participants) and submit that question.
- After stop session pressed the results will be shown to coach and particpant.

**Participant instructions**

- On notification head to live quiz.
- The question is displayed with the answer options available.
- Selects answer and this is submitted back to the speaker.
- Once coach ends the session, the results will be viable.

## DJ Deck

**Coach Access Only**

- In order for the Spotify playlist to run, you will need to [register](https://developer.spotify.com/dashboard/applications) to create a client id and client secret place these inside of the .env(as listed above in _installation_). By default the playlist url is defined, by default to the School of Code playlist. To change this just replace the url inside of the spotify component.
- The sound sample files need to be placed in the sound folder within the public folder. To access them, create a new Audio file and place the file name into a variable.
