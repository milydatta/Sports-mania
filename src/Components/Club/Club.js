import React, { useEffect, useState } from 'react';
import ClubDetail from '../ClubDetail/ClubDetail';


const Club = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/all_leagues.php`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setLeagues(data.leagues.slice(0,12)))
       },[])
  
    return (
      <div className="container">
        <div className="row">
          {
            leagues.map(league => <ClubDetail style={{height:400,width:150}} league={league}></ClubDetail>)
          }
        </div>
        </div>
    );
};

export default Club;