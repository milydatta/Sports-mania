import React from 'react';
import { useHistory } from 'react-router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDoubleRight, faCoffee } from '@fortawesome/free-solid-svg-icons';


const ClubDetail = (props) => {
    const {idLeague, strLeague, strSport, strLeagueAlternate} = props.league;
    const history = useHistory();
 
    return (
        <div className="col-md-3 card float-left p-5" >
            <h3><strong>id</strong>:{idLeague}</h3>
           <h3>{strLeague}</h3>
           <p>{strSport}</p>
           <p>{strLeagueAlternate}</p>
           <button onClick={() => history.push('/Leagues/idLeague')} className="btn btn-success">Explore >> </button>
        </div>
        
    );
};

export default ClubDetail;