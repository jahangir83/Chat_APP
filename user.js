 
let users = []

const addUser = ({id , name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find(
        (u) => u.name === name && u.room === room
    );
    
    if (existingUser) {
        return {error : 'User alredy exits'}
    }

    const user = {
        id,
        name,
        room
    }

    users.push(user)
    return user
}

const removeUser = (id) => {
    const index = users.findIndex( (user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

//getUserId
const getUserId = (id) => {
    const user = users.find((user) => user.id === id)
    return user
    
}

//close signal
const getUserRoom = (room) => {
    const userRoom = users.filter((user) => user.room === room);
    return userRoom
}

const jahangir = () => {
    const user = users.find((element) => {
        return element  
    })
    return user
}

module.exports = {
    addUser,
    removeUser,
    getUserId,
    getUserRoom,
    jahangir
}