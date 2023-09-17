import { useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './components/ErrorBoundary';
import Routes from './routes';

const queryClient = new QueryClient();

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <ToastContainer />
          <Routes />
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  )
}

export default App
