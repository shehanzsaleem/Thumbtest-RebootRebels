import React from 'react';
// import { Link } from 'react-router-dom';
import $, { ajax } from 'jquery';
import * as tf from '@tensorflow/tfjs';
// let model; 
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';



const TARGET_CLASSES = {
    0: "Badness",
    1: "Goodness"
};
const MAX_LENGTH = 3;
let modeljson;






 














function model() {
    return (
        // <IconContext.Provider value={{ color: '#fff', size: 64 }}> 
        <div className='container mt-5'>
            <div className='row mb-5'>
                <div className='col-12'>
                    <div id="modelprogress" className='progress progress-bar progress-bar-striped progress-bar-animated mb-2'>Loading Model</div>


                </div>
            </div>
            <div className='row mb-5'>
              
                <div className='col-12'>
                    <button id='downloadModel' onClick={


                        async function () { //Progress bar and Loading of the Model
                            $('.progress-bar').show();
                            console.log("Loading model...");

                            modeljson = await tf.loadLayersModel('/model-thumbnail/model.json');
                            // const contentLength = modeljson.headers.get('content-length');

                            // console.log(contentLength);
                            // modeljson.summary();
                            console.log("Model loaded.");
                            $('#modelprogress').hide();
                            var downloadModel = document.getElementById("modelprogress");

                        }
                    }
                        className='btn btn-secondary' >Download Model(8MB)</button>
               </div>
               </div>
            <div className='row mb-5'>



                <div className='col-6'>
                    
            
            

            
        <div className="file-upload">
  <div className="file-select">
    <div className="file-select-button" id="fileName">Choose Video</div>
    <div className="file-select-name" id="noFile">No video chosen...</div> 
    <input id='image-selector' className='file-upload border-0' type='file' accept="image/x-png,image/gif,image/jpeg" onChange={
                        async function (e) {
                            if (Array.from(e.target.files).length > MAX_LENGTH) {
                                e.preventDefault();
                                alert(`Cannot upload files more than ${MAX_LENGTH}`);
                                return;
                            }
                            else {
                                console.log("Images Selected...");
                                let reader0 = new FileReader();
                                let file0 = $("#image-selector").prop('files')[0];
                                reader0.readAsDataURL(file0);
                                reader0.onload = function () {
                                    let dataURL = reader0.result;
                                    $("#selected-image0").attr("src", dataURL);
                                    $("#prediction-list0").empty();
                                }
                                let reader1 = new FileReader();
                                let file1 = $("#image-selector").prop('files')[1];
                                reader1.readAsDataURL(file1);
                                reader1.onload = function () {
                                    let dataURL = reader1.result;
                                    $("#selected-image1").attr("src", dataURL);
                                    $("#prediction-list1").empty();
                                }
                                let reader2 = new FileReader();
                                let file2 = $("#image-selector").prop('files')[2];
                                reader2.readAsDataURL(file2);
                                reader2.onload = function () {
                                    let dataURL = reader2.result;
                                    $("#selected-image2").attr("src", dataURL);
                                    $("#prediction-list2").empty();
                                }
                            }
                        }
                    } multiple />
  </div>
</div>

            
            
                </div>
             

             
                <div className='col-6'>
                    <button id='predict-button' onClick={




                        async function () {
                            console.log("Button Clicked...");
                            for (let i = 0; i < 3; i++) {
                                let image = $('#selected-image' + i).get(0);
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
                                        // return b.probability - a.probability;
                                        return a.probability;
                                    }).slice(1, 2);
                                $("#prediction-list" + i).empty();
                                $("#prediction-percentage" + i).empty();
                                top5.forEach(function (p) {
                                    // $("#prediction-list"+i).append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
                                    $("#prediction-percentage" + i).append(`${(p.probability * 100).toFixed(2)}%`);
                                });
                            }









                        }
                    } className='btn btn-primary float-right'>Check Score</button>
                </div>

         
         
         
            </div>
            <div className='row mb-5'>
                <div className='col-12'>
                    <h2 className=''>Thumbnail</h2>
                </div>
                <div className='col-4'>
                    {/* <img id='selected-image0' className='' width='500' alt='' /> */}
                    <h2 className=''>Score1</h2>
                </div>
                <div className='col-4'>
                    {/* <img id='selected-image1' className='' width='500' alt='' /> */}
                    <h2 className=''>Score2</h2>
                </div>
                <div className='col-4'>
                    {/* <img id='selected-image2' className='' width='500' alt='' /> */}
                    <h2 className=''>Score3</h2>
                </div>
                <div className='col-12'>
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-12'>
                    {/* <h2 className=''>Your Scores</h2> */}
                </div>


                <div className='col-lg-4 col-md-12'>
                    <div className='score__container-card'>
                        <div className='score__container-cardInfo'>
                          
                            {/* <h3>Second </h3> */}
                            <ol id='prediction-list0'>
                            </ol>
                            <h4 id='prediction-percentage0'></h4>
                            <div class="containerp">
                                <div className='image-wrapper'>
                                  
                                <img id="selected-image0" className="score_best" 
   />
                                </div>  </div>
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
                <div className='col-lg-4 col-md-12'>
                    <div className='score__container-card'>
                        <div className='score__container-cardInfo'>
                           
                            {/* <h3>Best</h3> */}
                            <ol id='prediction-list1'>
                            </ol>
                            <h4 id='prediction-percentage1'></h4>
                            <div class="containerp">
                                <div className='image-wrapper'>
                                    <img id="selected-image1" className="score_best" />
                                </div>
                            </div>
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
                <div className='col-lg-4 col-md-12'>
                    <div className='score__container-card'>
                        <div className='score__container-cardInfo'>
                           
                            {/* <h3>Third</h3> */}
                            <ol id='prediction-list2'>
                            </ol>
                            <h4 id='prediction-percentage2'></h4>
                            <div class="containerp">
                                <div className='image-wrapper'>
                                <img id="selected-image2" className="score_best"  />
                                </div></div>
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
