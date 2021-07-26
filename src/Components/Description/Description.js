import React from 'react';
import Header from '../Header/Header';
import img from '../Images/Photo/female.png';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState} from 'react';


const Description = () => {
    const {idLeague} = useParams();
    const [post, setPost] = useState({});
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4328`;
        fetch(url)
        .then(res => res.text())
        .then(data =>setPost(data));
     }, [idLeague])
   
    // setPost(data)
    return (
        <div className="container">
            <Header></Header>
            <div style={{ height:200,border:'1px solid yellow',width:1100,marginBottom:50,display:"flex",flexWrap:"wrap"}}>
                <div className="col-md-6 text-white">
                    {/* <h2>description:{post.leagues}</h2> */}
                    <h2 className="m-2">description:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor 
                        sit amet, consectetur adip Lorem ipsum dolor sit amet, 
                        consectetur adip Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip</p>
                </div>
                <div className="col-md-6">
                    <img className="m-2" style={{height:180,width:500}} src={img}alt=""/>
                </div>
            </div>
            <p className="m-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae eligendi, sit,
             eaque optio magnam voluptatum minima et corrupti possimus nihil porro ullam! Rerum 
             magnam, quis quae a cupiditate quas.Lorem ipsum dolor sit amet consectetur adipisicing 
             elit. Ab quae eligendi, sit.<br />
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis porro fugit
              facere nobis earum reiciendis tempore distinctio nulla, unde laudantium totam
               repellat cupiditate, saepe dolorum exercitationem facilis architecto ullam magni?</p>
               <p className="m-5 pb-1 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae eligendi, sit,
             eaque optio magnam voluptatum minima et corrupti possimus nihil porro ullam! Rerum 
             magnam, quis quae a cupiditate quas.Lorem ipsum dolor sit amet consectetur adipisicing 
             elit. Ab quae eligendi, sit.<br />
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis porro fugit
              facere nobis earum reiciendis tempore distinctio nulla, unde laudantium totam
               repellat cupiditate, saepe dolorum exercitationem facilis architecto ullam magni?</p>
               <div className="text-center text-white pb-5">
               <FontAwesomeIcon style={{fontSize:50,paddingRight:15}} icon={faFacebook} />
               <FontAwesomeIcon  style={{fontSize:50,paddingRight:15}} icon={faTwitter} />
               <FontAwesomeIcon  style={{fontSize:50}} icon={faLinkedin} />
               </div>
        </div>
    );
};

export default Description;