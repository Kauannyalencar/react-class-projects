
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Contato';
import Empresa from './pages/Empresa';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// export const AppContext= createContext()

function App() {
    const client = new QueryClient({})

    return (
     
     
     <QueryClientProvider client={client}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/empresa' element={<Empresa />}></Route>
                    <Route path='/profile' element={<Profile />}></Route>
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;