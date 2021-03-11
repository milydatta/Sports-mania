// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const League = () => {
    const {idLeague} = useParams();
    // const [leagues, setLeagues] = useState({});
    
    // useEffect(() =>{
    //     const url= `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    //     fetch(url)
    //     .then(res=> res.json())
    //     .then(data =>setLeagues(data.leagues))
    // }, [idLeague])
    return (
        <div>
            <p>id:{idLeague}</p>
        </div>
    );
};

export default League;