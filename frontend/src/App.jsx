import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JoinClubForm from "./pages/JoinClubForm";
import LeaderDashboard from "./pages/LeaderDashboard";
import NotFound from "./pages/NotFound";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rejoindre" element={<JoinClubForm />} />
      <Route path="/leader-dashboard" element={<LeaderDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
