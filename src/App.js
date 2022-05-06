import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Join from './Join';
import ChatBox from './ChatBox';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Join/>}/>
          <Route  path='/chat' element={<ChatBox/>}/>
        </Routes>
    </div>
  );
}

export default App;
