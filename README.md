# Humm

## Final project

humm is a community-oriented living centre, designed to provide vulnerable members of our society not just food and shelter, but a range of building blocks they need to recover from addiction and trauma and feel safe and included in the world. 

We see ourselves not as an accommodation facility but as a community, offering residents counselling (individual and group), as well as opportunities to foster their hobbies and talents, and bond with other members of our whānau through communal meals, movie nights, yoga classes and more fun stuff.


## The Tech

- [React](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/)
- [Express](https://expressjs.com/en/api.html)
- [Knex.js (SQL)](https://knexjs.org/)
- (to add more)


## Things to keep in mind
- Needs to be mobile first - it's mostly likely residents will be accessing the site using their phone.

## Roles
| name          | role                                                                                                                  |
| ------------- | ------------------------------ |
| Hareton         | Product Owner                                                                            |
| Hareton and Courtney      | Scrum Master          |
| Hareton and Courtney      | Git lead    |
| Rose    | Front end lead   |
| Jad    | Back end lead   |
| John    | Vibes checker |



## User Stories

### User Story Map 
(You can view it here) https://miro.com/app/board/uXjVOKLWmg8=/?invite_link_id=102738140562 

![Humm map (1)](https://user-images.githubusercontent.com/93626609/155404404-d6b89357-00d6-4b89-b9b9-e5a3fb9ac1c3.jpg)


### MVP

1. As a resident I want to book an appointment with a counsellor so that I can recieve help 
    - Form fields to book the counsellor:
    - Name
    - Pronouns
    - Preference for format - (phone, zoom, face to face, text)
    - Urgency - (today, 1-2 days, soon)
    - Preferred date and time
    - Preference for being contacted

2. I want to be able to browse available counsellors
    - Information I want to see:
    - Name
    - Speciality
    - Photo
    - Available hours
    - Bio       

3. I want to be able to select my preferred councillor for my appointment 

4. I want to see upcoming activities (things going on at the center)
    - Like:
    - Group sessions (addiction recovery), DBT group therapy, art therapy, dance, yoga, workshops

    - Information about the activity 
    - Title
    - Description
    - Date
    - Time 
    - recurring 
    - frequency
    - counsellor 
    - community/center led 


5. I want to sign up for activities
    - Info about what they are signing up for 
    - Name
    - room 
    - Contact details (if available)

    - 

6. I want to add an activity to the site 
    - See fields for number 4



7. I want to browse emergency (digital resources)
 - Lifeline link/number/info

8. I want to browse physical resources
    - Library, films, learning platforms, books
    - Title
    - URL
    - Description 

9. I want to view available food

10. I want to claim food

11. I want to add available food
- Name of person adding 
- item name
- quantity 
- date added
- use by

12. I want to see available volunteering
- Title
- Description
- When
- Where


13. I want to sign up for volunteering 



14. I want to be able to report an issue with my room 
    - Name 
    - Room number 
    - issue with room 


15. I want to be able to read general information about the center
 - e.g meal times, faqs



know what resources are available 
    - Types of resources 





---

## Views (Client Side 

| name          | purpose                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Login         | View for user to enter their login credentials                                                                           |
| Register      | View for user to sign up for the App                                                                                     |
| CreateMeeting | View for user to arrange meeting attendees and information before starting the timer                                     |
| Meeting       | View to display current meeting time, cost and other information while the meeting is in progress                        |
| History       | Display a list of past meetings the user has attended with select preview information                                    |
| PastMeeting   | Display a single meeting from the history list, displaying more information and a list of attendees for the past meeting |

## Reducers (Client Side)

| name           | purpose                                                              |
| -------------- | -------------------------------------------------------------------- |
| auth           | Store information regarding user logins, auth status and auth errors |
| currentMeeting | Track meeting progress such as current cost and current duration     |
| meetings       | store the list of meetings the user has attended in the past         |
| users          | store the list of users who can attend meetings                      |

## Actions

### meetings

| type             | data     | purpose                                                 |
| ---------------- | -------- | ------------------------------------------------------- |
| RECEIVE_MEETINGS | meetings | retreive meetings from the db and store in redux        |
| ADD_MEETING      | meeting  | Add a single meeting to the history after it is created |

### users

| type          | data  | purpose                            |
| ------------- | ----- | ---------------------------------- |
| RECEIVE_USERS | users | retreive the users from the server |

### currentMeeting

| type            | data                         | purpose                                          |
| --------------- | ---------------------------- | ------------------------------------------------ |
| START_MEETING   | attendees ([]), meeting_name | a meeting has started, set initial meeting state |
| END_MEETING     | null                         | Set meeting in progress flag to false            |
| TICK_ONE_SECOND | null                         | Increase running total by 1s worth of $          |
| RESET_MEETING   | null                         | Revert to initial state                          |

## API (Client - Server)

| Method | Endpoint                | Protected | Usage                          | Response                                          |
| ------ | ----------------------- | --------- | ------------------------------ | ------------------------------------------------- |
| Post   | /api/auth/login         | Yes       | Log In a User                  | The Users JWT Token                               |
| Post   | /api/auth/register      | Yes       | Register a User                | The Users JWT Token                               |
| Get    | /api/meetings           | Yes       | Get a Users Meeting Histroy    | An Array of Meetings                              |
| Post   | /api/meetings           | Yes       | Save a completed meeting       | The Meeting that has been saved in db read format |
| Get    | /api/meetings/:id/users | Yes       | Get the attendees of a Meeting | An Array of User objects                          |
| Get    | /api/users              | Yes       | Get the users of the app       | An Array of User Objects                          |

## DB (Server Side)

There should be three tables for MVP

### Users

| Column Name | Data Type |
| ----------- | --------- |
| id          | Integer   |
| username    | String    |
| first_name  | String    |
| last_name   | String    |
| hash        | text      |

### Meetings

| Column Name  | Data Type |
| ------------ | --------- |
| id           | Integer   |
| meeting_name | String    |
| time         | Timestamp |
| attendees    | integer   |
| cost         | Decimal   |

### Attendees (Join Table M2M)

Many Users attend Many Meetings

| Column Name | Data Type |
| ----------- | --------- |
| user_id     | Integer   |
| meeting_id  | Integer   |

---

## Setup

Run the following commands in your terminal:

```sh
npm install
npm run knex migrate:latest
npm run knex seed:run
cp .env.example .env
```

To run in development:

```sh
npm run dev
```

To run in production:

```sh
npm start
```

## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps

### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app

### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:

```sh
npm run h:deploy
```

Run heroku migrations:

```sh
npm run h:migrate
```

Run heroku seeds:

```sh
npm run h:seed
```

If ever you need to rollback, you can also:

```sh
npm run h:rollback
```

### Ta-Da!

Your app should be deployed!

### Group Info

