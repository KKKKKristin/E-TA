export default function ChatSessionPage(){
  return <h1>Details about product</h1>
}

// 'use client';

// // pages/app/dashboard/[sessionId].tsx
// import { useRouter } from 'next/router';
// import { useSessions } from '@/app/dashboard/context/sessionContext';
// // import {useRouter} from 'next/navigation';
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// const ChatSessionPage = () => {
//     const [input, setInput] = useState('');
//     const [messages, setMessages] = useState<string[]>([]);

//     const router = useRouter();
//     const { sessionId } = router.query; // 使用解构来获取sessionId

//     const { sessions } = useSessions();
//     const session = sessions.find(s => s.id === sessionId);

//     useEffect(() => {
//       if (sessionId) {
//         console.log(sessionId);
//         // 这里可以放置根据 sessionId 进行的其他操作
//       }
//     }, [sessionId]); // 当 sessionId 变化时触发

//     const sendMessage = async () => {
//       if (!input.trim()) return;
  
  
//       const response = await fetch('http://lax.nonev.win:5000/ask', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ question: input }),
//       });
  
//       const data = await response.json();
//       console.log(data);
//       setMessages((prevMessages) => [...prevMessages, `You: ${input}`, `Bot: ${data.answer}`]);
//       setInput('');
//     };
  
//     return (
//       <>
//         <Head>
//           <title>E-TA Chatbot</title>
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         </Head>
//         {/* 使用flex布局使内容居中 */}
//         {/* <div className="flex flex-col min-h-screen bg-gray-100" style={{ minHeight: '70vh' }}> */}
//         <div className="flex flex-col bg-gray-100" style={{ minHeight: '30vh' }}>
//           <div className="w-full max-w-4xl p-5 bg-white shadow-md rounded-lg">
//             <header className="text-center">
//               <h1 className="text-3xl text-blue-600">Welcome to E-TA</h1>
//               <p className="text-xl text-gray-600">Your AI-powered assistant</p>
//             </header>
//             <main>
//               <section className="chatbot mt-5">
//                 <div className="bg-white border-2 border-blue-600 rounded-lg p-5">
//                   <div className="flex flex-col bg-gray-100 h-48 overflow-y-auto mb-5 p-2.5 bg-gray-200 border border-gray-300 rounded-lg" style={{ minHeight: '10vh' }}>
//                     {messages.map((msg, index) => (
//                       <p key={index}>{msg}</p>
//                     ))}
//                   </div>
//                   <textarea
//                     className="w-full mb-2 p-2.5 border border-gray-300 rounded-lg"
//                     placeholder="Type your message here..."
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                   ></textarea>
//                   <button className="w-full bg-blue-500 text-white p-2.5 rounded-lg hover:bg-blue-700" onClick={sendMessage}>Send</button>
//                 </div>
//               </section>
//             </main>
//             <footer className="text-center mt-5">
//               <p>Contact us at <a href="mailto:support@eta.com" className="text-blue-600 hover:text-blue-800">support@eta.com</a></p>
//             </footer>
//           </div>
//         </div>
//       </>
//     );
  
//     //=================
  
  
//     // return (
//     //   <div className="flex flex-col min-h-screen bg-gray-100">
//     //     <Head>
//     //       <title>E-TA Chatbot</title>
//     //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     //     </Head>
//     //     {/* 最外层容器使用 min-h-screen 来确保最少占满整个屏幕高度 */}
//     //     <div className="flex flex-col min-h-screen bg-gray-100">
//     //       {/* 内容容器不强制居中，允许根据内容长度自动展开 */}
//     //       <div className="w-full max-w-4xl mx-auto p-5 bg-white shadow-md rounded-lg">
//     //         <header className="text-center">
//     //           <h1 className="text-3xl text-blue-600">Welcome to E-TA</h1>
//     //           <p className="text-xl text-gray-600">Your AI-powered assistant</p>
//     //         </header>
//     //         <main>
//     //           <section className="chatbot">
//     //             {/* 这里的内容容器允许内部内容自然展开，不设置特定高度 */}
//     //             <div className="bg-white border-2 border-blue-600 rounded-lg p-5">
//     //               <div className="mb-5 p-2.5 bg-gray-200 border border-gray-300 rounded-lg">
//     //                 {messages.map((msg, index) => (
//     //                   <p key={index}>{msg}</p>
//     //                 ))}
//     //               </div>
//     //               <textarea
//     //                 className="w-full mb-2 p-2.5 border border-gray-300 rounded-lg"
//     //                 placeholder="Type your message here..."
//     //                 value={input}
//     //                 onChange={(e) => setInput(e.target.value)}
//     //               ></textarea>
//     //               <button className="w-full bg-blue-500 text-white p-2.5 rounded-lg hover:bg-blue-700" onClick={sendMessage}>Send</button>
//     //             </div>
//     //           </section>
//     //         </main>
//     //         <footer className="text-center mt-5">
//     //           <p>Contact us at <a href="mailto:support@eta.com" className="text-blue-600 hover:text-blue-800">support@eta.com</a></p>
//     //         </footer>
//     //       </div>
//     //     </div>
//     //   </div>
//     // );
    
  
//   //===================
//     // return (
//     //   <>
//     //     <Head>
//     //       <title>E-TA Chatbot</title>
//     //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     //     </Head>
//     //     {/* 调整布局以在内容不足时不显示滚动条 */}
//     //     <div className="flex flex-col min-h-screen items-center bg-gray-100">
//     //       <div className="w-full max-w-4xl mx-auto overflow-hidden">
//     //         <header className="text-center p-5">
//     //           <h1 className="text-3xl text-blue-600">Welcome to E-TA</h1>
//     //           <p className="text-xl text-gray-600">Your AI-powered assistant</p>
//     //         </header>
//     //         <main>
//     //           <section className="chatbot">
//     //             <div className="bg-white border-2 border-blue-600 rounded-lg p-5">
//     //               <div className="mb-5 p-2.5 bg-gray-200 border border-gray-300 rounded-lg">
//     //                 {messages.map((msg, index) => (
//     //                   <p key={index}>{msg}</p>
//     //                 ))}
//     //               </div>
//     //               <textarea
//     //                 className="w-full p-2.5 border border-gray-300 rounded-lg mb-2"
//     //                 placeholder="Type your message here..."
//     //                 value={input}
//     //                 onChange={(e) => setInput(e.target.value)}
//     //               ></textarea>
//     //               <button className="w-full bg-blue-500 text-white p-2.5 rounded-lg hover:bg-blue-700" onClick={sendMessage}>Send</button>
//     //             </div>
//     //           </section>
//     //         </main>
//     //         <footer className="text-center p-5">
//     //           <p>Contact us at <a href="mailto:support@eta.com" className="text-blue-600 hover:text-blue-800">support@eta.com</a></p>
//     //         </footer>
//     //       </div>
//     //     </div>
//     //   </>
//     // );
  
//     //===========
  
//     // return (
//     //   <>
//     //     <Head>
//     //       <title>E-TA Chatbot</title>
//     //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     //     </Head>
//     //     {/* <div className="container"> */}
//     //     <div className="max-w-lg mx-auto my-10 p-5 bg-white shadow-md rounded-lg">
  
//     //       <header>
//     //         <h1 className="text-2xl text-blue-600">Welcome to E-TA</h1>
//     //         <p className="text-lg text-gray-600">Your AI-powered assistant</p>
  
//     //         {/* <h1>Welcome to E-TA</h1>
//     //             <p>Your AI-powered assistant</p> */}
//     //       </header>
//     //       <main>
//     //         <section className="chatbot">
//     //           {/* <div className="chat-window"> */}
//     //           <div className="bg-white border-2 border-blue-600 rounded-lg p-5 mt-5">
//     //             {/* <div className="messages"> */}
//     //             <div className="h-72 overflow-y-auto mb-5 p-2.5 bg-gray-200 border border-gray-300 rounded-lg">
//     //               {messages.map((msg, index) => (
//     //                 <p key={index}>{msg}</p>
//     //               ))}
//     //             </div>
//     //             <textarea
//     //               // className="message-input"
//     //               className="w-full mr-2.5 p-2.5 border border-gray-300 rounded-lg float-left"
//     //               placeholder="Type your message here..."
//     //               value={input}
//     //               onChange={(e) => setInput(e.target.value)}
//     //             ></textarea>
//     //             <button className="w-20 bg-blue-500 text-white p-2.5 rounded-lg cursor-pointer hover:bg-blue-700">Send</button>
//     //             {/* <button className="send-button" onClick={sendMessage}>Send</button> */}
//     //           </div>
//     //           {/* <div className="upload-area"> */}
//     //           <div className="mt-5 text-center">
//     //             {/* <label htmlFor="file-upload" className="upload-button"> */}
//     //             <label htmlFor="file-upload" className="bg-blue-500 text-white p-2.5 cursor-pointer rounded-lg hover:bg-blue-700 inline-block">
//     //               Upload Document
//     //               {/* <input type="file" id="file-upload" name="file-upload" hidden /> */}
//     //               <input type="file" id="file-upload" name="file-upload" className="hidden" />
//     //             </label>
//     //           </div>
//     //         </section>
//     //       </main>
//     //       {/* <footer>
//     //             <p>Contact us at <a href="mailto:support@eta.com">support@eta.com</a></p>
//     //           </footer> */}
//     //       <footer className="text-center mt-5 text-lg text-gray-600">
//     //         <p>Contact us at <a href="mailto:support@eta.com" className="text-blue-600 hover:text-blue-800">support@eta.com</a></p>
//     //       </footer>
  
//     //     </div>
//     //   </>
//     // );
  
//     //==============
  
//     //   return (
//     //     <>
//     //       <Head>
//     //         <title>E-TA Chatbot</title>
//     //         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     //       </Head>
//     //       <div className="container">
//     //         <header>
//     //           <h1>Welcome to E-TA</h1>
//     //           <p>Your AI-powered assistant</p>
//     //         </header>
//     //         <main>
//     //           <section className="chatbot">
//     //             <div className="chat-window">
//     //               <div className="messages"></div>
//     //               <textarea className="message-input" placeholder="Type your message here..."></textarea>
//     //               <button className="send-button">Send</button>
//     //             </div>
//     //             <div className="upload-area">
//     //               <label htmlFor="file-upload" className="upload-button">
//     //                 Upload Document
//     //                 <input type="file" id="file-upload" name="file-upload" hidden />
//     //               </label>
//     //             </div>
//     //           </section>
//     //         </main>
//     //         <footer>
//     //           <p>Contact us at <a href="mailto:support@eta.com">support@eta.com</a></p>
//     //         </footer>
//     //       </div>
//     //     </>
//     //   );
//   };

// export default ChatSessionPage;
