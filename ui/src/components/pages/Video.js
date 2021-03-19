import React from "react";


function Video() {
    return (

        <div className='container mt-5'>
                <div className='video_icon'>

                    <ul className='up_icons'>
                        <li>
                            <i class="bi bi-box-arrow-in-down"></i>
                        </li>
                    </ul>

                    <p style={{textAlign:'center'}}>
                        Click the button to Choose a video.
                    </p>

                </div>
            <div className='row mb-5'>
                
            
                <div className='col-12'>
                    <div className='col-35'>
                    {/* <i class="bi bi-box-arrow-in-down"></i>*/}
                    <br></br> <br></br>
                        <input id='video-selector' className='form-control border-0' type='file'  onChange={
                            
                                async function (e) {}
                            } /*multiple *//>

                    </div>


                    <br></br>
                    <div className='col-13'>
                        
                        
                        <button type="button" id='predict-button' onClick={
                            async function () {
                                console.log("Button Clicked...");
                                
                            }
                        }class="btn btn-light  float-right btn-outline-primary">Generate Thumbnail</button>



                    </div>
                </div>

                </div>

        {/*set 1*/}
            <div className='row mb-5'>

                {/*boxes*/}

                <div className='col-md-4'>
                    <div className='video_tumbnail-box'>
                        <div className='score__container-cardInfo'>

                            {   /*<div className='icon'>
                                <FaFire />
                            </div>  */}  

                            {/*<ol id='prediction-list0'></ol> 
                            <h4 id='prediction-percentage0'></h4>*/}

                            <div class="containerp">

                                <div /*className='image-wrapper'*/>
                                    <img id="selected-image0" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>
            


                <div className='col-md-4'>
                    <div className='video_tumbnail-box'>
                        <div className='score__container-cardInfo'>

                            {   /*<div className='icon'>
                                <FaFire />
                            </div>  */}  

                            {/*<ol id='prediction-list0'></ol> 
                            <h4 id='prediction-percentage0'></h4>*/}

                            <div class="containerp">

                                <div /*className='image-wrapper'*/>
                                    <img id="selected-image0" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='video_tumbnail-box'>
                        <div className='score__container-cardInfo'>

                            {   /*<div className='icon'>
                                <FaFire />
                            </div>  */}  

                            {/*<ol id='prediction-list0'></ol> 
                            <h4 id='prediction-percentage0'></h4>*/}

                            <div class="containerp">

                                <div /*className='image-wrapper'*/>
                                    <img id="selected-image0" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            
            {/*set 2*/}

            <div className='row mb-5'>

                {/*boxes*/}

                <div className='col-md-4'>
                    <div className='video_tumbnail-box'>
                        <div className='score__container-cardInfo'>

                            {   /*<div className='icon'>
                                <FaFire />
                            </div>  */}  

                            {/*<ol id='prediction-list0'></ol> 
                            <h4 id='prediction-percentage0'></h4>*/}

                            <div class="containerp">

                                <div /*className='image-wrapper'*/>
                                    <img id="selected-image0" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>
            


                <div className='col-md-4'>
                    <div className='video_tumbnail-box'>
                        <div className='score__container-cardInfo'>

                            {   /*<div className='icon'>
                                <FaFire />
                            </div>  */}  

                            {/*<ol id='prediction-list0'></ol> 
                            <h4 id='prediction-percentage0'></h4>*/}

                            <div class="containerp">

                                <div /*className='image-wrapper'*/>
                                    <img id="selected-image0" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='video_tumbnail-box'>
                        <div className='score__container-cardInfo'>

                            {   /*<div className='icon'>
                                <FaFire />
                            </div>  */}  

                            {/*<ol id='prediction-list0'></ol> 
                            <h4 id='prediction-percentage0'></h4>*/}

                            <div class="containerp">

                                <div /*className='image-wrapper'*/>
                                    <img id="selected-image0" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>


            </div>


             {/*set 3*/}

             <div className='row mb-5'>

                {/*boxes*/}

                <div className='col-md-4'>
                    <div className='video_tumbnail-box'>
                        <div className='score__container-cardInfo'>

                            {   /*<div className='icon'>
                                <FaFire />
                            </div>  */}  

                            {/*<ol id='prediction-list0'></ol> 
                            <h4 id='prediction-percentage0'></h4>*/}

                            <div class="containerp">

                                <div /*className='image-wrapper'*/>
                                    <img id="selected-image0" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>



                <div className='col-md-4'>
                    <div className='video_tumbnail-box'>
                        <div className='score__container-cardInfo'>

                            {   /*<div className='icon'>
                                <FaFire />
                            </div>  */}  

                            {/*<ol id='prediction-list0'></ol> 
                            <h4 id='prediction-percentage0'></h4>*/}

                            <div class="containerp">

                                <div /*className='image-wrapper'*/>
                                    <img id="selected-image0" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
                                </div> 
                            </div>

                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='video_tumbnail-box'>
                        <div className='score__container-cardInfo'>

                            {   /*<div className='icon'>
                                <FaFire />
                            </div>  */}  

                            {/*<ol id='prediction-list0'></ol> 
                            <h4 id='prediction-percentage0'></h4>*/}

                            <div class="containerp">

                                <div /*className='image-wrapper'*/>
                                    <img id="selected-image0" /*className="score_second" /*src="./sample_thumbnail_01"*/ />
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