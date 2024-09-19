import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import Customers from './component/Customers';
import NoMatch from './component/NoMatch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/dashboard" component="" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="*" element={<NoMatch />} />
            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
