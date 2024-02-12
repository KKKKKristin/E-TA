'use client';
// export default function Page() {
//     return <p>Dashboard Page</p>;
//   }

import React, { useState } from 'react';
import Head from 'next/head';
import '@/app/dashboard/index.css'; 

const Page = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<string[]>([]);
    const sendMessage = async () => {
        if (!input.trim()) return;
        
       
        const response = await fetch('http://lax.nonev.win:5000/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });
      
        const data = await response.json();
        console.log(data);
        setMessages((prevMessages) => [...prevMessages, `You: ${input}`, `Bot: ${data.answer}`]);
        setInput(''); 
      };
      

      return (
        <>
          <Head>
            <title>E-TA Chatbot</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <div className="container">
            <header>
              <h1>Welcome to E-TA</h1>
              <p>Your AI-powered assistant</p>
            </header>
            <main>
              <section className="chatbot">
                <div className="chat-window">
                  <div className="messages">
                    {messages.map((msg, index) => (
                      <p key={index}>{msg}</p>
                    ))}
                  </div>
                  <textarea
                    className="message-input"
                    placeholder="Type your message here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  ></textarea>
                  <button className="send-button" onClick={sendMessage}>Send</button>
                </div>
                <div className="upload-area">
                  <label htmlFor="file-upload" className="upload-button">
                    Upload Document
                    <input type="file" id="file-upload" name="file-upload" hidden />
                  </label>
                </div>
              </section>
            </main>
            <footer>
              <p>Contact us at <a href="mailto:support@eta.com">support@eta.com</a></p>
            </footer>
          </div>
        </>
      );
      
//   return (
//     <>
//       <Head>
//         <title>E-TA Chatbot</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>
//       <div className="container">
//         <header>
//           <h1>Welcome to E-TA</h1>
//           <p>Your AI-powered assistant</p>
//         </header>
//         <main>
//           <section className="chatbot">
//             <div className="chat-window">
//               <div className="messages"></div>
//               <textarea className="message-input" placeholder="Type your message here..."></textarea>
//               <button className="send-button">Send</button>
//             </div>
//             <div className="upload-area">
//               <label htmlFor="file-upload" className="upload-button">
//                 Upload Document
//                 <input type="file" id="file-upload" name="file-upload" hidden />
//               </label>
//             </div>
//           </section>
//         </main>
//         <footer>
//           <p>Contact us at <a href="mailto:support@eta.com">support@eta.com</a></p>
//         </footer>
//       </div>
//     </>
//   );
};



export default Page;
