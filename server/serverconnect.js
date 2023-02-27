const express = require('express')
const app = express()
const client = require('./userdata')
const PORT = 3000

client.connect((err) => {
  if (err) {
    console.log(err)
    return
  }

  const collection = client.db('golfinfo').collection('users')

  collection.insertOne(
    {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      phonenumber: '416-222-2222',
    },
    (err, result) => {
      if (err) {
        console.log(err)
        return
      }

      console.log(result.ops)
    }
  )
})
