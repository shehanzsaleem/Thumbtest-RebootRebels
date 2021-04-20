import React from 'react';
import { Link } from 'react-router-dom';


import icon1 from "../images/feature-tile-icon-01.svg";
import icon2 from "../images/feature-tile-icon-02.svg";
import icon3 from "../images/feature-tile-icon-03.svg";
import icon4 from "../images/feature-tile-icon-04.svg";
import icon5 from "../images/feature-tile-icon-05.svg";
import icon6 from "../images/feature-tile-icon-06.svg";




function Features({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart }) {
    return (
        <div className="container mb-5">
            <div className="row">
          
            <div className="col-md-4 col-6 tiles-item-inner text-center">

<div className=" text-center  features-tiles-item-image mb-4">
        <img src={icon1} width="64" height="64" alt="Features tile icon 01"/>

    </div>


    <h5 className="fw-bolder white">
        Robust Workflow
    </h5>
    <p className="">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
    </p>
</div>

<div className="col-md-4 col-6 tiles-item-inner text-center">

<div className=" text-center  features-tiles-item-image mb-4">
<img src={icon2} width="64" height="64" alt="Features tile icon 02"/>

    </div>


    <h5 className="fw-bolder white">
        Robust Workflow
    </h5>
    <p className="">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
    </p>
</div>
<div className="col-md-4 col-6 tiles-item-inner text-center">

<div className=" text-center  features-tiles-item-image mb-4">
    
<img src={icon3} width="64" height="64" alt="Features tile icon 03"/>


    </div>


    <h5 className="fw-bolder white">
        Robust Workflow
    </h5>
    <p className="">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
    </p>
</div>
<div className="col-md-4 col-6 tiles-item-inner text-center">

<div className=" text-center  features-tiles-item-image mb-4">
    
    
<img src={icon4} width="64" height="64" alt="Features tile icon 04"/>


    </div>


    <h5 className="fw-bolder white">
        Robust Workflow
    </h5>
    <p className="">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
    </p>
</div>
<div className="col-md-4 col-6 tiles-item-inner text-center">

<div className=" text-center  features-tiles-item-image mb-4">
       
<img src={icon5} width="64" height="64" alt="Features tile icon 05"/>

    </div>


    <h5 className="fw-bolder white">
        Robust Workflow
    </h5>
    <p className="">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
    </p>
</div>
<div className="col-md-4 col-6 tiles-item-inner text-center">

<div className=" text-center  features-tiles-item-image mb-4">
     
<img src={icon6} width="64" height="64" alt="Features tile icon 06"/>

    </div>


    <h5 className="fw-bolder white">
        Robust Workflow
    </h5>
    <p className="">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
    </p>
</div>

















            </div>

        </div>
    )
}
export default Features;
