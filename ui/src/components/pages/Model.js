import React from 'react';
// import { Link } from 'react-router-dom';
import $ from 'jquery';
import * as tf from '@tensorflow/tfjs';
// let model; 
const TARGET_CLASSES = {
    0: "Badness",
    1: "Goodness"
};





const MAX_LENGTH = 3;






let modeljson;
$(document).ready(async function () { //Progress bar and Loading of the Model
    $('.progress-bar').show();
    console.log("Loading model...");
    modeljson = await tf.loadLayersModel('/model/model.json');
    console.log("Model loaded.");
    $('.progress-bar').hide();
});


function model() {



    return (
        // <IconContext.Provider value={{ color: '#fff', size: 64 }}> 
        <div className='container'>
            <br />
            <br />
            <br />
            <div className='row'>
                <div className='col-12'>
                    <div className='progress progress-bar progress-bar-striped progress-bar-animated mb-2'>Loading Model</div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className='row'>
                <div className='col-6'>
                    <input id='image-selector' className='form-control border-0' type='file' onChange={



                        async function (e) {




                            if (Array.from(e.target.files).length > MAX_LENGTH) {
                                e.preventDefault();
                                alert(`Cannot upload files more than ${MAX_LENGTH}`);
                                return;
                            }
                            else{

                            console.log("Images Selected...");
                            let reader = new FileReader();
                            reader.onload = function () {
                                let dataURL = reader.result;
                                $("#selected-image").attr("src", dataURL);
                                $("#prediction-list").empty();
                            }
                            let file = $("#image-selector").prop('files')[0];
                            reader.readAsDataURL(file);


                        }




                        }










                    } multiple />

                </div>
                <div className='col-6'>
                    <button id='predict-button' onClick={

                        async function () {
                            console.log("Button Clicked...");
                            let image = $('#selected-image').get(0);
                            console.log("Selected Image Loaded...");
                            // Pre-processing the image
                            let tensor = tf.browser.fromPixels(image)
                                .resizeNearestNeighbor([96, 96]) // the image is reduced size here
                                .toFloat()
                                .div(tf.scalar(255.0))
                                .expandDims();
                            console.log("Image PreProcessed...");
                            let predictions = await modeljson.predict(tensor).data();
                            let top5 = Array.from(predictions)
                                .map(function (p, i) { // this is Array.map
                                    return {
                                        probability: p,
                                        className: TARGET_CLASSES[i] // we are selecting the value from the obj
                                    };
                                }).sort(function (a, b) {
                                    return b.probability - a.probability;
                                }).slice(0, 2);
                            $("#prediction-list").empty();
                            top5.forEach(function (p) {
                                $("#prediction-list").append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
                            });
                        }
                    } className='btn btn-primary float-right'>Check Score</button>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className='row'>
                <div className='col-12'>
                    <h2 className='ml-3'>Thumbnail</h2>
                    <img id='selected-image' className='ml-3' width='500' alt='' />
                </div>
                <div className='col-12'>
                    <h2 className='ml-3'>Score</h2>
                    <ol id='prediction-list'>
                    </ol>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>

                    <h2 className='ml-3'>Your Scores</h2>
                </div>


                <div className='col-md-4'>
                    <div className='score__container-card'>

                        <div className='score__container-cardInfo'>
                            {/* <div className='icon'>
 <FaFire/>
 </div> */}
                            <h3>Second </h3>
                            <h4>76.80%</h4>
                            <img className="score_second" /*src="./sample_thumbnail_01"*/ />
                            {/* <p>per month</p>
 <ul className='score__container-features'>
 <li>100 Transactions</li>
 <li>2% Cash Back</li>
 <li>$10,000 Limit</li>
 </ul> */}
                            {/* <Button buttonSize='btn--wide' buttonColor='primary'>
 Choose Plan
 </Button> */}
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='score__container-card'>

                        <div className='score__container-cardInfo'>
                            {/* <div className='icon'>
 <BsXDiamondFill/>
 </div> */}
                            <h3>Best</h3>
                            <h4>95.00%</h4>
                            <img className="score_best" /*src="./sample_thumbnail_01"*/ />
                            {/* <p>per month</p>
 <ul className='score__container-features'>
 <li>1000 Transactions</li>
 <li>3.5% Cash Back</li>
 <li>$100,000 Limit</li>
 </ul> */}
                            {/* <Button buttonSize='btn--wide' buttonColor='blue'>
 Choose Plan
 </Button> */}
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='score__container-card'>
                        <div className='score__container-cardInfo'>
                            {/* <div className='icon'>
 <GiCrystalize/>
 </div> */}
                            <h3>Third</h3>
                            <h4>80.08%</h4>
                            <img className="score_third" /*src="./sample_thumbnail_01"*/ />
                            {/* <div className="score_third">
</div> */}
                            {/* <p>per month</p>
 <ul className='score__container-features'>
 <li>Unlimited Transactions</li>
 <li>5% Cash Back</li>
 <li>Unlimited Spending</li>
 </ul> */}
                            {/* <Button buttonSize='btn--wide' buttonColor='primary'>
 Choose Plan
 </Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default model;
