import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Main from '../Components/Main';
import History from '../Components/History';

const Home = () => {
    const path = window.location.pathname;
    useEffect(()=>{
        console.log(path);
    });
    return (
        <div className='home'>
            <Header />
            <div className="main-block">
                <Main />
                {(path==='/') && <Sidebar ladleNo={"5"} lastCheckpoint={"Station 1"}/>}
                {(path==='/history') && <History/>}
            </div>
        </div>
    );
}

export default Home;