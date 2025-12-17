
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import TypingTestPage from './pages/TypingTestPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (true) {
      case route === '#/': return <Home />;
      case route === '#/about': return <About />;
      case route === '#/privacy': return <Privacy />;
      case route === '#/contact': return <Contact />;
      case route === '#/tests': return <Home />;
      case route.startsWith('#/test/'):
        const id = route.split('/')[2];
        return <TypingTestPage passageId={id} />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
