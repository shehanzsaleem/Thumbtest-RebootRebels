import React, { Component } from 'react';
import '../App.css';
import icon from '../images/icon.png';





class Titlebanner extends Component {
    state = {  }
    render() { 
        return ( 
          <div class="row">
            <div class="col-12">
                <div class="title-banner">
                    <div class="center">
                        <h3><span class="icon"></span>Test Your Youtube Thumnail</h3>
                        <h6 class="thin">Score Your Youtube Thumnail based on Machine Learning</h6>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Titlebanner;