import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ErrorBoundary from './components/ErrorBoundires'
import About from './components/About';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<ErrorBoundary>  <Home/> </ErrorBoundary> }/>
        <Route path='about' element={<About/>}/>
      </Route>
    </Routes>
    </>
      );
}

export default App;
