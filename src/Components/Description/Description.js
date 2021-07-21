import React from 'react';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Description = () => {
    return (
        <div className="container">
            <Header></Header>
            <div style={{ height:200,border:'1px solid yellow',width:1100,marginBottom:50}}>
            <h2>description</h2>
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
               <div className="text-center text-white pb-5"style={{Bottom:100,height:20}}>
               <FontAwesomeIcon style={{fontSize:50,paddingRight:10}} icon={faFacebook} />
               <FontAwesomeIcon  style={{fontSize:50,paddingRight:10}} icon={faTwitter} />
               <FontAwesomeIcon  style={{fontSize:50}} icon={faLinkedin} />
               </div>
        </div>
    );
};

export default Description;