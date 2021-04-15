import React from 'react';
import { Link } from 'react-router-dom';


import logob from "../images/feature-tile-icon-01.0f9928d7.svg";



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
        <img src={logob} width="64" height="64" alt="Features tile icon 01"/>

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
        <img src={logob} width="64" height="64" alt="Features tile icon 01"/>

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
        <img src={logob} width="64" height="64" alt="Features tile icon 01"/>

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
        <img src={logob} width="64" height="64" alt="Features tile icon 01"/>

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
        <img src={logob} width="64" height="64" alt="Features tile icon 01"/>

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
        <img src={logob} width="64" height="64" alt="Features tile icon 01"/>

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
