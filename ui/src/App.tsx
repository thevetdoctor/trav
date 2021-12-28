import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import store from './redux/store';
import './App.css';

function App() {
  const {getState, dispatch} = store;
  const state = getState();  
  const apiUrl = 'https://14edbke427.execute-api.us-east-2.amazonaws.com/staging/institutions';

  const fetchData = async() => {
    console.log('FetchData gets called');
     
     try {
         const res = await axios({
            method: 'GET',
            url: `${apiUrl}`,
            headers: {'Content-Type': 'application/json'}
            });
        //   console.log(res?.data.Items);
          // setInstitutions(res.data.Items);
          // setResults(res.data.Items);
          dispatch({
            type: 'SET_DATA',
            payload: res.data.Items
          });
          // setLoading(false);
        } catch(e) {
        // setLoading(false);
        }
  }

  useEffect(() => {
      console.log('useEffect App');
      fetchData();
      return () => {};
  },[]);

  console.log('App renders');
  return (
    <div className="App">
      <Dashboard />
      <Footer />
    </div>
  ); 
}

export default App;