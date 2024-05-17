
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '/src/components/header';
import { Main } from './src/pages/main';
import { Page01 } from './src/pages/page01';

function App() {
  return (
    
   
  
    <BrowserRouter >
      <Header />
      <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/page01" element={<Page01 />} />
      </Routes>
    </BrowserRouter>
  );
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);