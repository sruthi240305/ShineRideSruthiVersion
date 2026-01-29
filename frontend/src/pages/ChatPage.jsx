import React from 'react';
import CustomerServiceChat from '@/components/CustomerServiceChat';

const ChatPage = () => {
  return (
    <div className="w-screen h-screen" style={{ backgroundColor: 'var(--bg-foundation)' }}>
      <CustomerServiceChat />
    </div>
  );
};

export default ChatPage;
