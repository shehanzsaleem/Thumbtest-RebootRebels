



import React from "react";
import $, { ajax } from 'jquery';
import * as tf from '@tensorflow/tfjs';
const TARGET_CLASSES = {
  0: "Badness",
  1: "Goodness"
};
const MAX_LENGTH = 3;
let modeljson;






function Video() {
  return (
    <div className='container mt-5'>
      <div class="progress">
        <div id="progress" class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className='video_icon'>
        <ul className='up_icons'>
          {/* <li>
 <i class="bi bi-box-arrow-in-down"></i>
 </li> */}
        </ul>
        <p style={{ textAlign: 'center' }}>
          Click the button to Choose a video.
 </p>
      </div>
      <div className='row mb-2'>
        <div className='col-8'>
          {/* <i class="bi bi-box-arrow-in-down"></i>*/}
          <input id='video-selector' className='form-control border-0' type='file' onChange={
            async function (e) { }
          } /*multiple */ />
        </div>
        <div className='col-4'>
          <button type="button" id='predict-button' onClick={


            async function () {
              console.log("Button Clicked...");
              console.log("Video Selected...");
              let reader = new FileReader();
              let file = $("#video-selector").prop('files')[0];
              reader.readAsDataURL(file);
              reader.onload = function () {
                let videoUrl = reader.result;
                extractFrames(videoUrl);
              }

              function extractFrames(video_url) {
                var video = document.createElement('video');
                var array = [];
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var pro = document.querySelector('#progress');

                function initCanvas(e) {
                  canvas.width = this.videoWidth;
                  canvas.height = this.videoHeight;
                }
                function drawFrame(e) {
                  this.pause();
                  ctx.drawImage(this, 0, 0);
                  /* 
                  this will save as a Blob, less memory consumptive than toDataURL
                  a polyfill can be found at
                  https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob#Polyfill
                  */
                  canvas.toBlob(saveFrame, 'image/jpeg');
                  pro.style.width = "100%";
                  pro.innerHTML = ((this.currentTime / this.duration) * 100).toFixed(2) + ' %';
                  // pro.style.width = ((this.currentTime / this.duration) * 100).toFixed(2) + "%";
                  if (this.currentTime < this.duration) {
                    this.play();
                  }
                }
                function saveFrame(blob) {
                  array.push(blob);
                }
                function revokeURL(e) {
                  URL.revokeObjectURL(this.src);
                }

                function onend(e) {
                  var img;
                  // do whatever with the frames
                  var gap = Math.ceil((array.length / 10));
                  var newArray = []
                  // for (var i = 0; i < array.length; i++) {
                  // img = new Image();
                  // img.onload = revokeURL;
                  // img.src = URL.createObjectURL(array[i]);
                  // document.body.appendChild(img);
                  // }
                  // for (var i = 0; i < array.length; i+=gap) {
                  // img = new Image();
                  // img.onload = revokeURL;
                  // img.src = URL.createObjectURL(array[i]);
                  // newArray.push(img.src);
                  // // document.getElementById("selected-image0").src = 
                  // // document.body.appendChild(img);
                  // }
                  for (var i = 0; i < array.length; i++) {
                    img = new Image();
                    img.onload = revokeURL;
                    img.src = URL.createObjectURL(array[i]);
                    // console.log(img.src);
                    // console.log(Math.round(i/gap));
                    // if you haven't already, install the SDK with 'npm install sightengine --save'
                    // var sightengine = require('sightengine')('840618205', 'xnzUkEGjk2D7EPYpV6se');
                    // sightengine.check(['nudity', 'wad', 'properties', 'celebrities', 'offensive', 'faces', 'face-attributes']).set_file(URL.createObjectURL(array[i])).then(function (result) {
                    // // The API response (result)
                    // }).catch(function (err) {
                    // // Handle error
                    // });


                    console.log((Math.floor((i / gap))));

                    document.getElementById("selected-image" + (Math.floor((i / gap)))).src = img.src;
                    // document.body.appendChild(img);


                    if (i > (array.length - 2)) {
                      loadTumbnailModel(getThumbnailScore);
                    }



                  }
                  // for (var j = 0; j < newArray.length; j++) {
                  // document.getElementById("selected-image"+j).src = newArray[j];
                  // }
                  // we don't need the video's objectURL anymore
                  URL.revokeObjectURL(this.src);



                }

                video.muted = true;
                video.addEventListener('loadedmetadata', initCanvas, false);
                video.addEventListener('timeupdate', drawFrame, false);
                video.addEventListener('ended', onend, false);
                // video.src = URL.createObjectURL(this.files[0]);
                video.src = video_url;
                video.play();


                // loadTumbnailModel(getThumbnailScore);

                async function loadTumbnailModel(e) { //Progress bar and Loading of the Model
                  // $('.progress-bar').show();
                  console.log("Loading model...");
                  modeljson = await tf.loadLayersModel('/model-thumbnail/model.json');
                  // const contentLength = modeljson.headers.get('content-length');
                  // console.log(contentLength);
                  // modeljson.summary();
                  console.log("Model loaded.");
                  // $('#modelprogress').hide();
                  var downloadModel = document.getElementById("modelprogress");

                  e();
                }

                async function getThumbnailScore() {
                  console.log("Button Clicked...");
                  for (let i = 0; i < 10; i++) {
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

              }

            }

          } className="btn btn-light float-right btn-outline-primary">Generate Thumbnail</button>
        </div>
      </div>
      {/*set 1*/}
      <div className='row mb-2'>
        {/*boxes*/}
        <div className='col-md-4'>
          <div >
            <div className=' '>
              { /*<div className='icon'>
 <FaFire />
 </div> */}
              {/*<ol id='prediction-list0'></ol> 
 <h4 id='prediction-percentage0'></h4>*/}
              <div className="containerp">
                <div /*className='image-wrapper'*/>
                  <img id="selected-image0" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                  <ol id='prediction-list0'>
                  </ol>
                  <h4 id='prediction-percentage0'></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div >
            <div className=' '>
              { /*<div className='icon'>
 <FaFire />
 </div> */}
              {/*<ol id='prediction-list0'></ol> 
 <h4 id='prediction-percentage0'></h4>*/}
              <div className="containerp">
                <div /*className='image-wrapper'*/>
                  <img id="selected-image1" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                  <ol id='prediction-list1'>
                  </ol>
                  <h4 id='prediction-percentage1'></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div >
            <div className=' '>
              { /*<div className='icon'>
 <FaFire />
 </div> */}
              {/*<ol id='prediction-list0'></ol> 
 <h4 id='prediction-percentage0'></h4>*/}
              <div className="containerp">
                <div /*className='image-wrapper'*/>
                  <img id="selected-image2" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                  <ol id='prediction-list2'>
                  </ol>
                  <h4 id='prediction-percentage2'></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*set 2*/}
      <div className='row mb-2'>
        {/*boxes*/}
        <div className='col-md-4'>
          <div >
            <div className=' '>
              { /*<div className='icon'>
 <FaFire />
 </div> */}
              {/*<ol id='prediction-list0'></ol> 
 <h4 id='prediction-percentage0'></h4>*/}
              <div className="containerp">
                <div /*className='image-wrapper'*/>
                  <img id="selected-image3" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                  <ol id='prediction-list3'>
                  </ol>
                  <h4 id='prediction-percentage3'></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div >
            <div className=' '>
              { /*<div className='icon'>
 <FaFire />
 </div> */}
              {/*<ol id='prediction-list0'></ol> 
 <h4 id='prediction-percentage0'></h4>*/}
              <div className="containerp">
                <div /*className='image-wrapper'*/>
                  <img id="selected-image4" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                  <ol id='prediction-list4'>
                  </ol>
                  <h4 id='prediction-percentage4'></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div >
            <div className=' '>
              { /*<div className='icon'>
 <FaFire />
 </div> */}
              {/*<ol id='prediction-list0'></ol> 
 <h4 id='prediction-percentage0'></h4>*/}
              <div className="containerp">
                <div /*className='image-wrapper'*/>
                  <img id="selected-image5" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                  <ol id='prediction-list5'>
                  </ol>
                  <h4 id='prediction-percentage5'></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*set 3*/}
      <div className='row mb-2'>
        {/*boxes*/}
        <div className='col-md-4'>
          <div >
            <div className=' '>
              { /*<div className='icon'>
 <FaFire />
 </div> */}
              {/*<ol id='prediction-list0'></ol> 
 <h4 id='prediction-percentage0'></h4>*/}
              <div className="containerp">
                <div /*className='image-wrapper'*/>
                  <img id="selected-image6" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                  <ol id='prediction-list6'>
                  </ol>
                  <h4 id='prediction-percentage6'></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div >
            <div className=' '>
              { /*<div className='icon'>
 <FaFire />
 </div> */}
              {/*<ol id='prediction-list0'></ol> 
 <h4 id='prediction-percentage0'></h4>*/}
              <div className="containerp">
                <div /*className='image-wrapper'*/>
                  <img id="selected-image7" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                  <ol id='prediction-list7'>
                  </ol>
                  <h4 id='prediction-percentage7'></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div >
            <div className=' '>
              { /*<div className='icon'>
 <FaFire />
 </div> */}
              {/*<ol id='prediction-list0'></ol> 
 <h4 id='prediction-percentage0'></h4>*/}
              <div className="containerp">
                <div /*className='image-wrapper'*/>
                  <img id="selected-image8" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                  <ol id='prediction-list8'>
                  </ol>
                  <h4 id='prediction-percentage8'></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col-md-4'>
          <div >
            <div className=' '>
              { /*<div className='icon'>
 <FaFire />
 </div> */}
              {/*<ol id='prediction-list0'></ol> 
 <h4 id='prediction-percentage0'></h4>*/}
              <div className="containerp">
                <div /*className='image-wrapper'*/>
                  <img id="selected-image9" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                  <ol id='prediction-list9'>
                  </ol>
                  <h4 id='prediction-percentage9'></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Video;