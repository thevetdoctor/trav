/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import Search from '../search/Search';
import Slide from '../slide/Slide';
import Loader from 'react-loader-spinner';
// import axios from 'axios';
import { ISlide } from '../types';
import store from '../../redux/store';
import { IoAirplane } from 'react-icons/io5';
import { MdAccountBalance } from 'react-icons/md';
import './dashboard.css';

export default function Dashboard() {
    const {getState, dispatch} = store;
    const state = getState();
    // const { data } = useSelector(state => state.data);
    // console.log(state);
    console.log('Dashboard renders');

    // const [institutions, setInstitutions] = useState<ISlide[]>([]);
    let institutions = state.data;
    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<ISlide[]>(institutions);
    const [loading, setLoading] = useState<boolean>(institutions.length !== 0);
    // const apiUrl = 'https://14edbke427.execute-api.us-east-2.amazonaws.com/staging/institutions';

    const searchData = () => {
        const searchResults = institutions.filter(x => x.title.toLowerCase().includes(query.toLowerCase()));
        setResults(searchResults);
        // console.log(query, searchResults);
        console.log('Search gets called');
    };

    // const fetchData = async() => {
    //     console.log('FetchData gets called');
         
    //      try {
    //          const res = await axios({
    //             method: 'GET',
    //             url: `${apiUrl}`,
    //             headers: {'Content-Type': 'application/json'}
    //             });
    //         //   console.log(res?.data.Items);
    //           setInstitutions(res.data.Items);
    //           setResults(res.data.Items);
    //           dispatch({
    //             type: 'SET_DATA',
    //             payload: res.data.Items
    //           });
    //           setLoading(false);
    //     }   catch(e) {
    //         setLoading(false);
    //         }
    //   }
      useEffect(() => {
          console.log('useEffect Dashboard');
          searchData();
          return () => {};
        },[query]);
        
    //     useEffect(() => {
    //     console.log('useEffect 2');
    //     fetchData();
    //     return () => {};
    // },[]);
 

    return (
        <div className='dashboard'>
            <div className='logo'>
                <span><IoAirplane size='1.5em' /></span>
                <h2><b>Trav4College</b></h2>
                <span><MdAccountBalance size='1.5em' /></span>
            </div>
            <div className='top-content'>
                <h3>Explore College and Universities</h3>
                <Search query={query} setQuery={setQuery} />
            </div>
            <div className='app-left'>

            {!loading ?
            <Fragment>
               {results.length ?
                    results.map(({title, image}:ISlide, idx:number) => (
                        <Slide 
                            key={idx} 
                            title={title} 
                            image={image}
                        />
                    ))
                    :
                    <Fragment>
                        <span className='empty-search'>We are constantly updating our records, please check again later</span>
                    </Fragment>
                    }
            </Fragment>
                :
            <Fragment>
            <Loader 
                type='ThreeDots'
                color='#00bfff'
                height={40} 
                width={40} 
            />
            </Fragment>}
            </div>
        </div>
    )
}
