
require('dotenv').config();
//import 'dotenv/config';

  
const express = require('express')

//import express from 'express'  diff btw module or common js
const app = express()
//like Math.__

const port =4000;
//more or less 65,000 ports are present and ammong them somes are free

// respond with "hello world" when a GET request is made to the homepage



const gitHubData=
{
  "login": "Debasish-1903",
  "id": 135197479,
  "node_id": "U_kgDOCA7zJw",
  "avatar_url": "https://avatars.githubusercontent.com/u/135197479?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Debasish-1903",
  "html_url": "https://github.com/Debasish-1903",
  "followers_url": "https://api.github.com/users/Debasish-1903/followers",
  "following_url": "https://api.github.com/users/Debasish-1903/following{/other_user}",
  "gists_url": "https://api.github.com/users/Debasish-1903/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Debasish-1903/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Debasish-1903/subscriptions",
  "organizations_url": "https://api.github.com/users/Debasish-1903/orgs",
  "repos_url": "https://api.github.com/users/Debasish-1903/repos",
  "events_url": "https://api.github.com/users/Debasish-1903/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Debasish-1903/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Debasish Das",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-06-01T04:45:48Z",
  "updated_at": "2024-03-07T13:52:05Z"
}

app.get('/', (req, res) => {
  res.send('hello world')

})

app.get('/twitter',(req,res)=>{
     res.send('This is twitter handle')
})

app.get('/hanji',(req,res)=>{
    
res.send('<h1>Debasish Das</h1>')

})

app.get('/youtube',(req,res)=>{
    
    res.send('<h2>chaiAurcode</h2>')
    
    })


    app.get('/github',(req,res)=>{
       
      res.json(gitHubData)
    })



app.listen(process.env.PORT,()=>{
  //app.listen(port,()=>{

    console.log(`Example listening on port ${port}`)
    

})
