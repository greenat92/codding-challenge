## codding challenge docs

I would like to say thank you so much for letting me to take this challenge. I Hopefully you'll like the way that i followed to get this job done. and i'm very excited and looking forward for feedback from you about this implementation to learn more from. and take your notes as concediration to develop my skils and push myself to the next level that i'm looking for.

## Dependencies

- NodeJS 16
- Nestjs
- Typescript 4.x
- Jest
- axios

## Implementation

- To implement the rest api from scratch i have used Nestjs framwork, and typescript to write the backend. also i have used axios to call the job.ch apis.
- for project structur i have followed the famous structue that used in many web frameworks like nestjs called modulare structre wherease you will find any feature logic separated inside a folder. to make it more clean and maintainable.

- For places and job search apis i just used some fillter and used it in my implementation to show you how i use job.ch apis.

- for the api that responsable for getting  jobs  details is it not implemented but here i would like to show you how i thought about it's implemtation, we hit this api `GET api/jobs/:id?language=en` to chose from which page or link you want to fetch data using `web scrapping` after i scrappe the page that retourned for job details i extract the data from there and send it back via http response with json format to the clinet.

## Some Ideas we can add to imporve and secure rest api 
- Caching is one of the most popular techniques to make http request that have big size payload here's we can use such techniques to reduce the time of fetching data from the server. in our case we can use it with places api, There's a lot of ways to cache rest api responses like using redis cache. or using cache-manager nodejs lib. I just mentioned it to show you that  i got your point in the challenge requirements.

- Rate-limiting is one of the common technics to protect applications from brute-force attacks.




## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

I've just added some unit test cases to show you how i'm using nestjs testing module.

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Running the app using docker 

```bash
# build the image
$ docker build -t coding-challenge-api .

# start the container
$ docker run -p80:3000 coding-challenge-api

```

## Documentation 
This backend documented using auto-generated doc module for nestjs and after runing the project you can navigate to the api documentation using the following link `http://localhost:3000/api/docs#/`

## Deployment 
Unfortunalty i wasn't able to deploy this app in my Heroku account because i found some issues with that to deploy it in time.

## Some other Ideas to increase performance of nodejs based server 
1. Run in Parallel.
2. Go Asynchronous.
4. Use gzip Compression.
5. Use Client Side Rendering When Possible.
6. Don't Store Too Much in Sessions.
7. Optimize Your Queries.
8. Use Standard V8 Functions.
9. Use nginx in Front of Node.
