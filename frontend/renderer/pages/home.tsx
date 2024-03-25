import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const HomePage: React.FC = () => {
  const [message, setMessage] = useState<string>('No message found');

  useEffect(() => {
    // Assuming 'ipc' is available globally on your window object.
    // You might want to extend the window type to make TypeScript aware of 'ipc'.
    const handleMessage = (event: any, message: string) => {
      console.log('Event:', event);
      console.log(message);
      setMessage(message);
      
    };

    // Replace 'ipc' with the correct IPC instance
    window.ipc.on('message', handleMessage);

    // Cleanup listener when component unmounts
    return () => {
      window.ipc.off('message', handleMessage);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Hardware Config Wrapper</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -{' '}
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <Image src="/images/logo.png" alt="Logo image" width="256" height="256" />
      </div>
      <div>
        <button
          onClick={() => {
            // Replace 'ipc' with the correct IPC instance
            window.ipc.send('message', 'Hello');
          }}
        >
          Test IPC
        </button>
        <p>{message}</p>
      </div>
    </React.Fragment>
  );
};

export default HomePage;