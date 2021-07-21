import React from 'react';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { CategoryContext } from '../../App';
import './ClubDetail.css';


const ClubDetail = (props) => {
    const {strBadge,idLeague, strLeague, strSport, strLeagueAlternate} = props.league;
    // const [category, setCategory] = useContext(CategoryContext);
 
    return (
       
        <div className="col-md-4">
            <div className="card m-2 p-4">
             <h3 style={{height:50}}>{strBadge}</h3>   
            <h3><strong>id</strong>:{idLeague}</h3>
           <h3>{strLeague}</h3>
           <p>{strSport}</p>
           <p>{strLeagueAlternate}</p>
           <Link to="/description"><button className="btn btn-success">Explore </button></Link>
        </div>
        </div>
    
    
    );
};

export default ClubDetail;