import React,{useEffect, useRef} from 'react';
import M from 'materialize-css';
export default function Recipe() {
    const carousel = useRef(null)
    useEffect(() => {
        M.Carousel.init(carousel.current,{
            fullWidth: true
          });
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-xs-12">
                    <div ref={carousel} class="carousel carousel-slider">
                        <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/800/400/food/1"/></a>
                        <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2"/></a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h4>Title</h4>
                        <div class="card-panel hoverable">
                            Hoverable Card Panel
                            <blockquote>
                                This is an example quotation that uses the blockquote tag.
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
