import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MyEvents from './components/MyEvent';
import MyTickets from './components/MyTicket';
import AllEvents from './components/AllEvents';
import TopNavbar from './components/TopNavbar';
// import NFTDetails from './pages/NFTDetails';
// import TicketValidation from './pages/TicketValidation';
import CreateEvent from './components/NewEvents';

function App() {
  return (
    <Router>
      <div className="flex">
        <div className='fixed'>
        <Sidebar />
        </div>
        <div className="ml-64 w-full">
          <TopNavbar />

        <div className="p-6 overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-events" element={<MyEvents />} />
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/all-events" element={<AllEvents />} />
            {/* <Route path="/nft-details" element={<NFTDetails />} />
            <Route path="/ticket-validation" element={<TicketValidation />} /> */}
            // <Route path="/new-Event" element={<CreateEvent/>} />  
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
