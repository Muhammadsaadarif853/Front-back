import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import students from './students'
import HomeScreen from './screens/HomeScreen';
import Student from './components/Student'
import StudentScreen from './screens/StudentScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import ClassScreen from './screens/ClassScreen'

function App() {
  return (
    <Router>    
    <Header/>
    <main className='py-3'>
      <Container>
        <Routes>
          <Route path='/' exact element={< HomeScreen />} ></Route>
          <Route path='/classes'  element={< ClassScreen />} ></Route>
        </Routes>
      </Container>
     </main>
     <Footer/>    
    </Router>
  );
}

export default App;
