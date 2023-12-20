import React, { useState } from 'react';
import './Sidebar.css';
import SearchResult from './SearchResult';
import SearchIcon from './../assets/searchIcon.png';

const Sidebar = () => {
    const [ladleId, setladleId] = useState("");
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [searchResult, setSearchResult] = useState({});
    const handleSearch = async () => {
        const response = await fetch("http://13.126.248.147:5000/searchLadle", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                ladleId
            })
        });
        const jsonResponse = await response.json();
        setSearchResult(jsonResponse);
        setShowSearchResult(true);
    }
    return (
        <div className='sidebar-container'>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder='Search'
                    onChange={(e) => setladleId(e.target.value)}
                    value={ladleId}
                />
                <button className='search-button' onClick={handleSearch}><img src={SearchIcon} alt="" /></button>
            </div>
            {showSearchResult && <SearchResult ladleId={searchResult.ladleId} lastCheckpoint={"TLC Pit Area"} CirculationTime={"12:25:40"} TurnAroundTime={"5"} />}
        </div>
    )
}

export default Sidebar;