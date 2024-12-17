import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SelectPage } from './pages/SelectPage';
import {SelectPage2} from './pages/SelectPage2'; // 추가된 페이지
import { MentoringPage } from './pages/MentoringPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/selectpage2" element={<SelectPage2 />} />
        <Route path="/mentoring/:mentorCode" element={<MentoringPage />} />
      </Routes>
    </Router>
  );
}

export default App;