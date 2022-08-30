# Instagram Clone 
 
Hello! This is a clone of the popular social media website "Instagram" that I built while following a tutorial by Sonny Sangha 😁

App Link: https://www.danielsoesito-instaclone.online
** Feel free to view this app on your phone! It is mobile friendly**

## Features

* Home Page to view posts by others and from fake data taken from Faker.io
* Login capabilities using Gmail (using NextAuth and Firebase v9)
* Once logged in, users can post pictures with captions (user gmail information stored and used as username and profile image)
* When logged in, also able to comment and like other posts
* Header at top used to traverse website
* Once logged out, all data is saved (posts, likes, comments) on Firebase and can be viewed 

## Architecture
This app was built with React.JS, Next.JS, HTML, Tailwind CSS, Firebase v9, NextAuth, Recoil, Faker.io and hosted on Hostinger and Vercel. As with most React Apps, Instaclone was built on the premise of reusable "components". This means that each component (Header, Posts, Fake Posts, Feed, Stories, Sugegstions, and Modal) are all individual parts of the app that can be used over and over again. 

This app also uses Recoil to track whether or not the user is logged in (via their gmail). Depending on login status, the page changes thus allowing or prohibiting the users' ability to post pictures/comments/likes. 

Lastly, the login functionality is handled by NextAuth (which is hosted by Google on Firebase v9). All login functionality is hosted on the login page and pushed through Google authentication. 


## Screenshots 
### Home Page
![Screen Shot 2022-08-15 at 8 29 48 PM](https://user-images.githubusercontent.com/99083937/184758785-9bae5a09-1fd0-4841-b57c-e65570bb409e.png)
Instaclone Home Page, before login


### Login Page
![Screen Shot 2022-08-15 at 8 36 32 PM](https://user-images.githubusercontent.com/99083937/184759182-f1b87cd8-2dc5-44f8-9d47-294740eaa58f.png)
Instaclone Login Page, after clicking "Sign In"


### Home Page after login
![Screen Shot 2022-08-15 at 8 38 50 PM](https://user-images.githubusercontent.com/99083937/184759353-1e6d6c8e-cf52-4b6c-89f3-8e1701ba992a.png)
Instaclone Home Page, after login, users can now interact with posts (like, comment, etc.)


## Upload Modal
![Screen Shot 2022-08-15 at 8 40 56 PM](https://user-images.githubusercontent.com/99083937/184759488-46260189-a4eb-4a0d-8c96-0a8c367015ef.png)
Instaclone Upload Modal, where logged in users can upload their own images 


### **EXTRA** Fake Data
![Screen Shot 2022-08-15 at 8 43 11 PM](https://user-images.githubusercontent.com/99083937/184759662-8d1d6dff-7cf2-407c-9383-23d216f89b6f.png)
Fake Data colelcted from Faker.io API, used to mimic instagram posts

### Thank you 

If you would like to view the Instaclone app, feel free to follow the link at the top of this post, but please, PLEASE, PLEASE do not post anything inapporpirate!

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

Video Tutorial Link: https://www.youtube.com/watch?v=a6Xs2Ir40OI&list=PLf16UKl7nR5AjcrYOe1niifJSAls3spDk&index=12
