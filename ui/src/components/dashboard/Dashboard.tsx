/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react'
import Search from '../search/Search';
import Slide from '../slide/Slide';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { ISlide } from '../types';
import { IoAirplane } from 'react-icons/io5';
import { MdAccountBalance } from 'react-icons/md';
import './dashboard.css';

export default function Dashboard() {
    const [institutions, setInstitutions] = useState<ISlide[]>([]);
    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<ISlide[]>(institutions);
    const [loading, setLoading] = useState<boolean>(true);

    const apiUrl = 'https://14edbke427.execute-api.us-east-2.amazonaws.com/staging/institutions';

    const searchData = () => {
        const searchResults = institutions.filter(x => x.title.toLowerCase().includes(query.toLowerCase()));
        setResults(searchResults);
        console.log(query, searchResults);
    };

    const fetchData = async() => {
         
         try {
             const res = await axios({
                method: 'GET',
                url: `${apiUrl}`,
                headers: {'Content-Type': 'application/json'}
                });
              console.log(res?.data.Items);
              setInstitutions(res.data.Items);
              setResults(res.data.Items);
              setLoading(false);
        }   catch(e) {
            setLoading(false);
            }
      }
      useEffect(() => {
          searchData();
          return () => {};
      },[query]);
      
    useEffect(() => {
        fetchData();
        return () => {};
    },[]);
 

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
