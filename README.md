# food-search
React native project with yelp api

Without yelp authorization token

Install:

npm i
npm start

Set yelp api:

import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer [YOUR YELP DEV TOKEN]'
    }
})
