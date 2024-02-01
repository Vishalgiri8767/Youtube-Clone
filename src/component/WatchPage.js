import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);

  return (
    <div>WatchPage</div>
  )
}

export default WatchPage
