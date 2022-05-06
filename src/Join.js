import React, { useState } from 'react'
import { Link } from "react-router-dom";

let user;


const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}


const Join = () => {

    const [name, setname] = useState("");

    return (
        <div className="background">
            <div className='container'>
                <h3 className='text-white text-center p-5'>Chat application</h3>
                <div className='row text-white'>
                    <div className='col'>

                    </div>

                    <div className='col'>
                        <div className='values'>
                        <div class="input-group input-group-lg ">
                            <input onChange={(e)=> setname(e.target.value)} id="joinInput" type="text" class="form-control mt-5" placeholder='enter your name' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                        </div>
                       <Link onClick={(event)=> !name? event.preventDefault():null} to="chat"> <button onClick={sendUser}  className='btn btn-primary mt-4'>Enter in chat room</button></Link>
                        </div>
                    </div>

                    <div className='col'>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join
export { user }
