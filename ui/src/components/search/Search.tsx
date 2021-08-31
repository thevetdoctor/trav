import React from 'react';
import { MdSearch } from 'react-icons/md';
import { IoMdCloseCircle } from 'react-icons/io';
import "./Search.css";

export default function Search(props: any) {
    const { query, setQuery } = props;
    return (
        <div className="search">
            <div className='search-bar'>
                <span><MdSearch size='1.5em' className="search-icon" /></span>
                <input
                    className="search-input" 
                    type="text"
                    placeholder="Search for college"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <span onClick={() => setQuery('')}><IoMdCloseCircle size='1.3em' className={`search-icon ${!query && 'hidden'}`} /></span>
            </div>
        </div>
    )
}
