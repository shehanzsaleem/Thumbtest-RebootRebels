import React, { Component } from 'react';
import '../App.css';





class Titlebanner extends Component {
    state = {  }
    render() { 
        return ( 
          <body>
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
        </body>
         );
    }
}
 
export default ChooseFile;