import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css";
export default function Recipe() {
  const carousel = useRef(null);
  const collapsible = useRef(null);
  const [collapsibleInstance, setCollapsibleInstance] = useState(null);
  useEffect(() => {
    M.Carousel.init(carousel.current, {
      fullWidth: true,
    });
    setCollapsibleInstance(
      M.Sidenav.init(M.Collapsible.init(collapsible.current))
    );
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div ref={carousel} className="carousel carousel-slider">
            <a className="carousel-item" href="#one!">
              <img src="https://lorempixel.com/800/400/food/1" alt="" />
            </a>
            <a className="carousel-item" href="#two!">
              <img src="https://lorempixel.com/800/400/food/2" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-xs-12 ">
                <p>
                    <h4>Tittle <i className="material-icons">favorite</i> <i className="material-icons">favorite_border</i></h4> 
                </p> 
              </div>
              <div className="col-xs-6">
                
              </div>
              <div className="col-xs-6">

              </div>
          </div>
      
        <div className="row">
          <div className="col-xs-12">
            
            <div className="card-panel hoverable">
                <span class="card-title">Ingredients</span>
                <ul class="collection">
                    <li class="collection-item">Alvin <div className="secondary-content">sdsas</div></li>
                </ul>   
              <blockquote>
                This is an example quotation that uses the blockquote tag.
              </blockquote>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="card-panel hoverable">
                <span class="card-title">Ingredients</span>
                <ul class="collection">
                    <li class="collection-item">Alvin <div className="secondary-content">sdsas</div></li>
                </ul>   
              <blockquote>
                This is an example quotation that uses the blockquote tag.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <ul ref={collapsible} className="collapsible">
        <li>
          <div className="collapsible-header">
            <i className="material-icons">filter_drama</i>First
          </div>
          <div className="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">place</i>Second
          </div>
          <div className="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">whatshot</i>Third
          </div>
          <div className="collapsible-body">
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
      </ul>
    </>
  );
}
