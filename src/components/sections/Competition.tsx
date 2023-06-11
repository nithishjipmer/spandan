import React from 'react';
import '../css/hexagon-comp.css'
import { Fade } from "react-awesome-reveal";
import edm from '../assets/edm.jpg'
import sf3 from '../assets/streetfair3.jpeg'
import sp2 from '../assets/stageplay2.jpeg'
import ss from "../assets/solosinging2.jpg"
import pubg2 from "../assets/pubg2.jpg"
import band from '../assets/bands2.jpg'
import fp from "../assets/FacePaint.jpg"
import dance from "../assets/dance2.jpg"
import fanatics from "../assets/fanatics.jpg"
import fashion from "../assets/fashion.jpg"
class Competition extends React.Component {
    render() {
        return(
            <div className="competition">
                <ul id = "hexGrid" className = "clr">

                <li className = "hex">
                            <div className="hexIn">
                                        <img src={edm} alt="pubg"/>   
                                 
                                <h1>SUNBURN Campus</h1>
                                <a href = "/edm">GO!</a>
                            </div> 
                    </li>

                    <li className = "hex">
                            <div className="hexIn">
                                    
                                        <img src={sf3} alt="pubg"/>   
                                    
                                <h1>Carnival</h1>
                                <a href = "/mela">GO!</a>
                            </div> 
                    </li>

                    <li className = "hex">
                            <div className="hexIn">
                                   
                                        <img src={sp2} alt="pubg"/>   
                                   
                                <h1>Curtain Call</h1>
                                <a href = "/stage">GO!</a>
                            </div> 
                    </li>


                    <li className = "hex">
                            <div className="hexIn">
                                    
                                        <img src={pubg2} alt="pubg"/>   
                                   
                                <h1>LAN Gaming</h1>
                                <a href = "/lan">GO!</a>
                            </div> 
                    </li>

                    <li className = "hex">
                            <div className="hexIn">
                                  
                                        <img src={ss} alt="Solo-singing"/>   
                                  
                                    <h1>Solo-Singing</h1> 
                                    <a href = "/Singing">GO!</a>                            
                            </div> 
                    </li>

                    <li className = "hex">
                            <div className="hexIn">
                                   
                                        <img src={band} alt="Band"/>   
                               
                                    <h1>Battle of Bands</h1> 
                                    <a href = "/overtone">GO!</a>
                            </div> 
                    </li>
                    
                    <li className = "hex">
                            <div className="hexIn">
                                
                                        <img src ={fp}  alt="face"/>   
                                    
                                    <h1>Painting</h1> 
                                    <a href = "/facepainting">GO!</a>
                            </div> 
                    </li>

                    <li className = "hex">
                            <div className="hexIn">
                                    
                                        <img src={dance} alt="Dancing"/>   
                                    
                                    <h1>Group Dance</h1> 
                                    <a href = "/groupdance">GO!</a>
                            </div> 
                    </li>

                    <li className = "hex">
                            <div className="hexIn">
                                    
                                        <img src={fanatics} alt="BOF"/>      
                                    
                                    <h1>League of Fanatics</h1> 
                                    <a href = "/lof">GO!</a>
                            </div> 
                    </li>

                    <li className = "hex">
                            <div className="hexIn">
                                    
                                        <img src={fashion} alt="fashion"/>
                                    
                                    <h1>Fashion Show</h1> 
                                    <a href = "/fashion">GO!</a>
                            </div> 
                    </li>
                    <li className="hex"></li>
                    
                </ul>
            </div>

        );
    }
}

export default Competition;
