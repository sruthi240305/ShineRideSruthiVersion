import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function CustomerServiceChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi, you're in the right place for customer service support.",
      timestamp: new Date()
    },
    {
      id: 2,
      sender: 'bot',
      text: "You can tell us what you need in your own words. How can we help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: inputMessage,
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          sender: 'bot',
          text: "Thank you for your message. Let me help you with that...",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: 'var(--bg-foundation)' }}>
      <div className="flex-1 flex flex-col" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--secondary)' }}>
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--secondary)', borderBottom: '1px solid' }}>
          <h1 className="text-xl font-bold" style={{ color: 'var(--text)' }}>Customer Service Chat</h1>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'bot'
                    ? 'text-white'
                    : 'text-white'
                }`}
                style={message.sender === 'bot' ? { backgroundColor: 'var(--primary)' } : { backgroundColor: 'var(--secondary)' }}
              >
                {message.sender === 'bot' ? (
                  <Bot className="w-5 h-5" />
                ) : (
                  <User className="w-5 h-5" />
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[70%] ${
                  message.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`rounded-2xl px-5 py-3 ${
                    message.sender === 'bot'
                      ? 'text-white'
                      : 'text-white'
                  }`}
                  style={message.sender === 'bot' ? { backgroundColor: 'var(--surface)', borderColor: 'var(--secondary)', border: '1px solid' } : { backgroundColor: 'var(--primary)' }}
                >
                  <p className="leading-relaxed" style={{ color: 'var(--text)' }}>{message.text}</p>
                </div>
                <span className="text-xs mt-1 block px-2" style={{ color: 'var(--muted)' }}>
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--secondary)', borderTop: '1px solid' }}>
          <form onSubmit={handleSendMessage} className="flex items-center gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder='Type something like, "return an item"'
              className="flex-1 px-5 py-3.5 rounded-xl focus:outline-none focus:ring-2 transition-all" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--secondary)', border: '1px solid', color: 'var(--text)' }}
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-3.5 text-white rounded-xl focus:outline-none focus:ring-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: 'var(--primary)' }}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>

          {/* Quick Suggestions */}
          <div className="flex flex-wrap gap-2 mt-3">
            <button
              onClick={() => setInputMessage("I need to return an item")}
              className="px-4 py-2 text-sm rounded-lg transition-all" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--secondary)', border: '1px solid', color: 'var(--text)' }}
            >
              Return an item
            </button>
            <button
              onClick={() => setInputMessage("Track my order")}
              className="px-4 py-2 text-sm rounded-lg transition-all" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--secondary)', border: '1px solid', color: 'var(--text)' }}
            >
              Track order
            </button>
            <button
              onClick={() => setInputMessage("Change my address")}
              className="px-4 py-2 text-sm rounded-lg transition-all" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--secondary)', border: '1px solid', color: 'var(--text)' }}
            >
              Change address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}