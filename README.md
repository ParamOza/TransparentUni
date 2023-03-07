## Inspiration
We were inspired by our peers who use disability accommodations here at UW - Madison. We have also seen other universities in the news not accommodating their students' needs. Due to the lack of public information about the reality of university accommodations, we wanted to create a place to facilitate transparent conversation about disability resource centers at universities nationwide.

## What it does
Our project is a web-based app that lets mentors (current college students utilizing accommodations) and mentees (prospective or other curious college students) communicate about disability resource centers. Mentees can select mentors to chat with from the university that they're interested in attending. Mentors, verified by their school email, can share their experiences with and answer questions about their accommodations on campus. Mentors also have the ability to rate their school's accommodations, which can be helpful data for mentees when comparing different universities. The goal is help the mentee make an informed decision on the best college for their health and wellbeing.

## How we built it
Our frontend is written in React and we heavily utilized Bootstrap for styling. We utilized functional React components as well as hooks. We also utilized Redux for persistent state as it proved to be very necessary for our project. Our backend is all Google Firebase. We designed a custom workflow for signing a user up depending on if they were registering to be a mentor or a mentee, and the credential data is stored in Firebase Auth. We utilized Firestore for some object storage, and that is also where we hold all of the messages for our chat app.

## Challenges we ran into
We ran into many issues while implementing our chat functionality. There were many resources online to help us through this process, but it was tough adapting all of the information directly to our needs. We ultimately ended up learning a lot about the awesome plug-and-play backend that Firebase has to offer.

## Accomplishments that we're proud of
We are really proud of the overall look and feel of the website. We believe that the site is fairly intuitive to use, and can genuinely help a lot of people get the accurate opinions they need to make educated decision on where to spend their college years.

## What we learned
We learned a lot about Firebase throughout this process. Prior to MadHacks, none of us had much experience in using Firebase as a backend, but we all gained a lot of valuable knowledge in the 24 hours that we were here. We also expanded on our knowledge of React and its inner workings which we are very proud of.

## What's next for TransparentUni
The next step for TransparentUni will be to implement a choice for one-way communication with a mentor. While keeping past conversations public can be a great future reference for other students, some people prefer having their questions answered one-on-one. We want everyone to feel comfortable while using our app and attract as many students as possible to end the stigma about disability accommodations.

## How to run
1. Clone the repo and `cd` into it
2. Install all dependencies by running `npm install`
3. Once the dependencies are installed, run `npm start`
4. Once the application spins up, it will be served at `localhost:3000`
