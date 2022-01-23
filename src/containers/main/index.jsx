import React from "react";  
import { useMediaQuery } from 'react-responsive';
import Home from "../home";
import "./main.scss";

function Main(){
    

const disdesk = useMediaQuery({ query: '(min-width: 500px)' })
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 425px  )' })

    return(

        <div>         
            {disdesk &&         
            <div>         
                <img className="backg" src="./assets/images/Dribbble Shot HD 1.png" />                     
                    <div className="scroll-x" drag="x" >
                        <div className="carousel">                      
                        <h1 className="text-lk">
                                Mobile screen only, <br/>resize your browser or browse on your mobile.
                           
                        </h1>
                        </div>                       
                    </div>
                
                </div>
                    }
                    
                
                {isTabletOrMobile && <Home />}                            
        </div>
    );
}

export default Main; 