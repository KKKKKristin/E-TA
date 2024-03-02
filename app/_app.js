// pages/_app.tsx
// import { AppProps } from 'next/app';
// import { useSessions, SessionProvider} from '@/app/dashboard/context/SessionContext';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <SessionProvider>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }

// export default MyApp;

//==============

// pages/_app.js
import { useSessions, SessionProvider} from '@/app/dashboard/context/sessionContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChatProvider>
      <Component {...pageProps} />
    </ChatProvider>
  );
}

export default MyApp;
