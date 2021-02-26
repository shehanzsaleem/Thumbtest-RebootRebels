import React from "react";
import './Home.css';


function Home(){
    return(

<div>
    <body>
<div className="container app-main">

<div className="row">
    <div className="col-12">
        <div className="title-banner">
            <div className="center">
                <h3><span className="icon"></span>Test Your Youtube Thumnail</h3>
                <h6 className="thin">Score Your Youtube Thumnail based on Machine Learning</h6>
            </div>
        </div>
    </div>
</div>
<div className="row">

    <div className="col-12">
        <div className="box">
            <div className="inner-box">
                <div className="inner-box-content center">
                    <br/>
                    <input type="file" id="myFile" name="filename" className="button" />

                </div>
            </div>
        </div>
    </div>

</div>
{/* <div className="row">
    <div className="col-md-4 col-12">
        <div className="info-box">

            <h5>Powered by Machine Learning</h5>
            <p className="small thin">Score Your Youtube Thumnail based on Machine Learning</p>
        </div>
    </div>
    <div className="col-md-4 col-12">
        <div className="info-box">

            <h5>The Ultimate Thumnail Tool for Youtubers</h5>
            <p className="small thin">Score Your Youtube Thumnail based on Machine Learning</p>
        </div>
    </div>
    <div className="col-md-4 col-12">
        <div className="info-box">

            <h5>Score your Thumbnail in Seconds</h5>
            <p className="small thin">Score Your Youtube Thumnail based on Machine Learning</p>
        </div>
    </div>

</div> */}

</div>



</body>

</div>


    );

}

export default Home;