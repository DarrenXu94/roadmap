# Roadmap
A full stack (MERN) web application designed to host basic information about beginning web development. The MongoDB is hosted on MLab, server hosted on Heroku and the static site hosted on Netlify. 

![screenshot from 2019-01-03 10-03-44](https://user-images.githubusercontent.com/16931153/50616987-0d2e3880-0f3f-11e9-8ead-3b7b83a34c89.png)

![screenshot from 2019-01-03 10-04-04](https://user-images.githubusercontent.com/16931153/50617009-2931da00-0f3f-11e9-9d06-d2cf2f6daf20.png)

## Live Page
https://roadmapdxu.netlify.com/

## Development
1. `npm install && npm install prefix --client`
2. `npm run dev`

Note you will not be able to access the MLAB MongoDB account unless you have the credentials which are stored on Heroku.

## Production
Server:
1. `git push heroku master`
Client:
1. `git push origin master`
2. Manual deploy on Netlify
