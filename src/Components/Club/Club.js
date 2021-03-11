import React, { useEffect, useState } from 'react';
import ClubDetail from '../ClubDetail/ClubDetail';


const Club = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setLeagues(data.leagues.slice(0,12)))
       },[])
  
    return (
        <div className="bg-success">
          {
            leagues.map(league => <ClubDetail league={league}></ClubDetail>)
          }
        </div>
    );
};

export default Club;