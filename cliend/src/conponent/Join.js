import React, { useState } from 'react'
import {Link } from 'react-router-dom'

const Join = () => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    return <div className="Join">
        <div className="container ">
            <div className="row justify-content-md-center my-5 py-5">
                <div className="col-md-6 ">
                    <div className=" card card-body">
                        <div className="join-form">
                            <input type="text" placeholder="Name" className=" my-1 form-control" name="name" onChange={(e) => setName( e.target.value )} />
                            <input type="text" placeholder="Join" className="form-control" name="join" onChange={(e) => setRoom(e.target.value)} />
                            <Link to={`/chat?name=${name}&room=${room}`} className="btn btn-primary">Join</Link>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}

export default Join