import React, { useState } from 'react';
import { FaSmile, FaPaperclip, FaTelegram } from 'react-icons/fa';
import "./ChatInput.css"
const ChatInput = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setMessages([...messages, message]);
            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-input">
                <div className="icons">
                    <FaSmile />
                    <FaPaperclip />
                </div>
                <input
                    type="text"
                    className="text-input"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="send-icon" onClick={handleSendMessage}>
                    <FaTelegram />
                </div>
            </div>
            <div className="message-list">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatInput;
