import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/theme-utils';  
import { BrowserRouter } from 'react-router-dom'
import  '@fontsource/ubuntu'
import { them } from './them/them.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={them}>
     <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
