import React, { useState, useEffect, Fragment } from 'react';
// import { BiInfoCircle } from 'react-icons/bi';
import Loader from 'react-loader-spinner';
import { ISlide } from '../types';
import './slide.css';

export default function Slide({title, image}:ISlide) {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1200);
      return () => console.log('cleanup Slide.js')
    }, []);
    
    return (
        <div className='tag'>
            {!loading ?
            <Fragment>
              <div className='tag-left'>
                    <span className='slide-title'>{title}</span>
                    <img className='' src={image} />
                </div>
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
    )
}
