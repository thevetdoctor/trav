import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';
// import store from './redux/store';
import './App.css';

function App() {
  // const {getState, dispatch} = store;
  // const state = getState();
  // const { collegeData } = useSelector(state => state);

  // console.log(state);

  return (
    <div className="App">
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
