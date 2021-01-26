// import logo from './logo.svg';
import logo from './images/Logo/Logo-02.png';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">

      <header className="topnav" id="myTopnav">
        <a href="#home">
          <img id="logo" src={logo} />
        </a>

      </header>


      <div className="container app-main" style="background-color: #2f2e33;">

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
                  <br />
                  <input type="file" id="myFile" name="filename" className="button" />

                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="row">
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

        </div>

      </div>
   
   
    </div>



  );
}

export default App;
