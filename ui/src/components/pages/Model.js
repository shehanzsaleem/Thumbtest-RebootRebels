import React from 'react';
// import { Link } from 'react-router-dom';
import $ from 'jquery';

import * as tf from '@tensorflow/tfjs';

// let model;



const TARGET_CLASSES = {
    0: "Badness",
    1: "Goodness"
};






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
            <br /><br /><br />
            <div className='row'>
                <div className='col-12'>
                    <div className='progress progress-bar progress-bar-striped progress-bar-animated mb-2'>Loading Model</div>
                </div>
            </div>
            <br /><br /><br />

            <div className='row'>
                <div className='col-6'>

                    <input id='image-selector' className='form-control border-0' type='file' onChange={
                        


                        function () {  //Selecting the Image Function

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

// 
                        // (event) => this.handleChange(event) 
                        
                        
                        
                        
                        } />




                </div>
                <div className='col-6'>
                    <button id='predict-button' onClick={




                        async function () {

                            console.log("Button Clicked...");

                            let image = $('#selected-image').get(0);

                            console.log("Selected Image Loaded...");

                            // Pre-processing  the image
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
            <br /><br /><br />
            <div className='row'>
                <div className='col-12'>
                    <h2 className='ml-3'>Thumbnail</h2>
                    <img id='selected-image' className='ml-3' width='500' alt='' />
                </div>
                <div className='col-12'>
                    <h2 className='ml-3'>Score</h2>
                    <ol id='prediction-list'></ol>
                </div>
            </div>

        </div >


    );
}


export default model;
