import React from 'react';
import { useHistory } from 'react-router-dom';
import './ClubDetail.css';


const ClubDetail = (props) => {
    const {strBadge,idLeague, strLeague, strSport, strLeagueAlternate} = props.league;
    const history = useHistory();
    const showLeagues = idLeague => {
        const url = `post/${idLeague}`;
        history.push(url);
    }

    return (
       <div className="col-md-4">
            <div className="card m-2 p-4">
             <h3 style={{height:50}}>{strBadge}</h3>   
             <h3><strong>id</strong>:{idLeague}</h3>
             <h3>{strLeague}</h3>
             <p>{strSport}</p>
             <p>{strLeagueAlternate}</p>
             <button onClick={() => showLeagues(idLeague)} className="btn btn-success">Explore</button>
            </div>
        </div>
    
    
    );
};

export default ClubDetail;

//  {/*<Link to="/description"><button cc>Explore </button></Link> */}