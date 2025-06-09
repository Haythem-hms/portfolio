import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ErrorBoundary from './components/ErrorBoundires'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<ErrorBoundary>  <Home/> </ErrorBoundary> }/>
      </Route>
    </Routes>
    </>
      );
}

export default App;
