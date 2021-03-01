import React from "react";
// import './Contact.css';
import car from './backgroundimage01.jpg';


function Contact(){
    return(
<body>
<div className="contact" style={{ backgroundImage: 'url(${car}) ', width: 'auto', height:'2000px' }}>
    <h1>This is the Contact us page to be designed</h1>
</div>

</body>
    );

}

export default Contact;