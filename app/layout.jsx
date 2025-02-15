import '@/styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'PromptNexus',
  description: 'Discover and share AI prompts',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/favicon-dark.ico', 
        media: '(prefers-color-scheme: dark)'
      }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
