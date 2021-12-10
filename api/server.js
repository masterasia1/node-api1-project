// BUILD YOUR SERVER HERE
const express = require('express')
const server = express()
const User = require('./users/model')

server.use(express.json())





server.delete('/api/users/:id', async (req, res) => {
const possibleUser= await User.findById (req.params.id)
if (!possibleUser){
    res.status(404).json({
        message: 'h'
    })
}else
{
    const deletedUser= await User.remove(possibleUser.id)
    res.status(200).json(deletedUser)
}
})

//test testing 


server.post('/api/users', (req, res) => {
const user= req.body;
if (!user.name || !user.bio){
    res.status(422).json({
        message: 'h'
    })
} else {
    User.insert(user)
    .then(stuff => {

    })
    .catch(err => {
        res.status(500).json({
            message: 'err',
            err: err.message
        })
    })
}
})
server.get ('/api/users', (req, res)=>{
   User.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({
            message: 'err',
            err: err.message
        })
    })
})


server.get ('/api/users/:id', (req, res)=>{
    User.findById(req.params.id)
     .then(user => {
         if (!user) {
             res.status(404).json({
                 message: "c"
             })
         }
        res.json(user)
     })
     .catch(err => {
         res.status(500).json({
             message: 'err',
             err: err.message
         })
     })
 })
 

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})
module.exports = server; // EXPORT YOUR SERVER instead of {}
