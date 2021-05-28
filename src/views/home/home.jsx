import React,{
    useEffect,
    useRef
} from 'react';
import Layout from '../../components/layout/layout' ;
import M from 'materialize-css';
import {Chip} from '../../components/chips/chips'; 
export default function Home() {
    const carousel = useRef(null)
    console.log(carousel)
    useEffect(() => {
        M.Carousel.init(carousel.current,{
            fullWidth: true
          });
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-sx-12">
                    <div ref={carousel} className="carousel carousel-slider">
                        <a className="carousel-item" href="#one!"><img src="https://via.placeholder.com/800x400"/></a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="inline-scroll">
                            
                            <Chip text="hola"/>
                            <Chip text="hola"/>
                            <Chip text="hola"/>
                            <Chip text="hola"/>
                            <Chip text="hola"/>
                            <Chip text="hola"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                    
                        <div className="card">
                            <div className="card-image">
                                <img src="https://via.placeholder.com/800x400"/>
                                <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                                </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
            
    )
}
