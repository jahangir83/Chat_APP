import React, {useEffect, useState} from 'react'
import { useLocation , Link} from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'
import ScrolButton from 'react-scroll-to-bottom'
import {css, sheet } from 'emotion'

//ScrolBttton custom css
const PORT_CSS = css({
    height:400,
    width: 520
})

let socket;
const Chat = () => {
    const { search } = useLocation()
    const { name, room } = queryString.parse(search)  
    const [umeesage, setUmeesage] = useState([])
    const [listUser, setListUser] = useState([])
    const [jaha, setJaha] = useState([])
    
    useEffect(() => {
        socket = io('http://localhost:4000')
        
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error)
                
            }
  
        });
        //Umessage catch 
        socket.on("message", (message) => {
            setUmeesage((existingMessage) => [...existingMessage, message])
        });

        socket.on('userList', ({roomUser}) => {
            setListUser(roomUser)
        })

        socket.on('jahangir', (u) => {
            setJaha(u.jahair)
        })

        return () => {
            socket.emit("disconnect")
            socket.close()
        }
    }, []);

    console.log(jaha)
    
    const sendMessage = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            socket.emit('message', e.target.value)
            e.target.value = ""
        }
    }

    return <div className="Chat">
        <div className="container">
            <div className="row justify-content-md-center my-5 py-5">
                <div className="col-md-2 chat">
                    <div className="card">
                        <div className="card-header"><h4>Chat</h4></div>
                        <div className="card-body">
                            {listUser.map(user => <div key={user.id}>{user.name}</div>)}
                            {}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header d-flex ">
                            <div className="room ">{room}</div>
                            <Link className="ml-auto cluseBtn" to="/">X</Link>
                        </div>
                        <div className="card-body chat-box ">
                            <ScrolButton className={`messages ${PORT_CSS}`}>
                                {umeesage.map((messa, index) => (
                                    <div key={index}
                                        className={`message ${name === messa.user ? 'self' : ''}`}>
                                        <span className="user">{messa.user}</span>  <span className="message-text">{messa.text}</span>
                                    </div>
                                ))}    
                            </ScrolButton>
                           
                        </div>
                        <div className="card-footer">
                             <input type="text" className="form-control" onKeyDown={sendMessage} placeholder="Message"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Chat