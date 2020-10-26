const express = require('express')
const http = require('http')
const app = express()
const chlak = require('chalk')
const shoket_IO = require('socket.io')
const cors = require('cors')
const morgan = require('morgan')
const {addUser, removeUser, getUserId,  getUserRoom, jahangir} = require('./user')
const chalk = require('chalk')

app.use(cors())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello Jahangir Developer')
})
 
const port = process.env.PORT || 4000

let httpServer = http.createServer(app)
const io = shoket_IO(httpServer)
   
io.on('connection', (shoket) => {
    
    // User Join start
    shoket.on("join", ({ name, room }, calback) => {

        const { error, user } = addUser({ id: shoket.id, name, room })
        if (error) {
            calback(error)
        }

        //Join Message welcome
        shoket.join(room);
        shoket.emit('message', { user: "system", text: `Welcome ${name} to ${room}` });

        //All Member Message without me
        shoket.broadcast.to(room).emit('message', { user: `system`, text: `${name} new join ${room}` })
        
        const roomUser = getUserRoom(room);
        io.to(room).emit('userList', { roomUser })
        console.log("room= ", roomUser)

        const jahair = jahangir() 
        console.log(jahair)
        io.emit('jahangir', { u: jahair}) 

        calback()
    })
    // User Join end

    // User Message recived

    shoket.on('message', (message) => {
        const user = getUserId(shoket.id)

        io.to(user.room).emit('message', { user:  user.name, text: message })
    })

    shoket.on('disconnect', () => {
        console.log(`User Disconnected ${shoket.id}`);
        const user = removeUser(shoket.id)

        if (user) {
            io.to(user.room).emit('message', { user: `system`, text: `${user.name} Just left ${user.room}` });
        }
        const roomUser = getUserRoom(user.room); 
        io.to(user.room).emit('userList',{roomUser})

        
    })
})

httpServer.listen(port, () => {
    console.log(chlak.black.bgGreen(`server is runing ${port}`));
}) 

