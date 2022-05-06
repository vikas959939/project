import React, { useEffect, useState } from 'react'
import { user } from "./Join";
import socketIo from "socket.io-client";
import Message from "./Message";
import ReactScrollToBottom from "react-scroll-to-bottom";

let socket;

const ENDPOINT = "https://demo-cchat.herokuapp.com/";

const ChatBox = () => {
    const [id, setid] = useState("");
    const [messages, setMessages] = useState([])

    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = "";
    }

    console.log(messages);
    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });

        socket.on('connect', () => {
            alert(`welcome ${user} you are connected`);
            setid(socket.id);

        })

        return () => {
            socket.disconnect();
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message, data.id);
        })
        return () => {
            socket.off();
        }
    }, [messages])

    return (
        <div className='background'>
        <div className="container chat-box">
            
            <div className='container'>
                <div className='header'>
                    <h1 className='text-white'>welcome {user}</h1>
                </div>
                <ReactScrollToBottom className="chatBox">
                {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>

                <div className='row'>
                    <div className='col-10'>
                        <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" class="form-control"/>
                    </div>

                    <div className='col-2'>
                        <button className='btn btn-primary sendbtn' onClick={send}>send</button>
                    </div>
                </div>

                
            </div>

        </div>
        </div>
    )
}

export default ChatBox;
