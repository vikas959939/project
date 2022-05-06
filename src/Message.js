import React from 'react'

const Message = ({ user, message, classs }) => {
    
    if (user) {
        return (
            <div className={`messageBox ${classs}`}  >
                {`me: ${message}`}
                
            </div>
        )
    }
    else {


        return (
            <div className={`messageBox ${classs}`}>
                {` ${message}`}
            </div>
        )
    }
}

export default Message
