# Follow Me

#### By Weston Perkins, Kacie Komoto, Quan Nguyen

## About Follow Me
Our app allows users to share activities from the day-to-day of their jobs. By sharing their day-to-day work-related activities, the app can provide user to see other real-world examples of jobs or companies they're interested in. 

<img src="./img/FollowMe.png">


#### Test it out here: [Follow Me](https://followmeapplication.herokuapp.com/)

### Languages, Frameworks, Technologies Used
- React
- JavaScript
- CSS3
- Node.js
- Mongo
- Mongoose
- Express
- Jason Web Tokens
- Bcrypt

## Wireframes
<img src="./img/wireframes_balsamiq.png">


## User Stories
- The user can login or register with a new account
- The user will be able to create a post that will have their name attached and the timestamp in which the post was created
- The user will be able to read through a feed with other people's posts
- The user can read, update, and delete their posts
- The user can search through other users profiles

## Major Hurdles & Ideas for Future Modifications 

#### 1. Staying consistent with the front end routes. Using react routers gave a lot more flexability to the site however i would like to go back in and clean up some more of the backend routes as some are proving to be redundant at this point.

#### 2. Using Jason Web Tokens was not very difficult conceptually howver becuase of the routes issue mentioned above, I don't think the "auth" middleware was working as expected so i had to create a workaround via a conditional statement that essentialy says if there is no user.. then simply render "please log in". This has issues on load which is only a second or less but still annoying. I hope to finish the middelware implimentation with success in the future but for right now the ternary works just fine.

#### 3. For this particular project, creating an appropriate schema or a means to render the instances was something that i struggled with in the beginning and i think that ill go back and reevaluate the structure. Essentially the app is based around peoples work days, and the steps that they take within those days. Each day is compiled of steps and each day will be showcased on the profile. right now it is displaying all steps (posts) as linear content however in the future i would like to make it so that there are expandable days which will incorporate these steps. This will include editing and creating schemas or grouping steps into days based off of their "date". 

#### 4. I would like to add a follow feature at some point where you can follow other poeple. Chat rooms or DMs would also be a nice addition

