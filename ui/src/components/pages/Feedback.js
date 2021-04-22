import React, { useState, useEffect } from "react";


//import 'bootstrap/dist/css/bootstrap.css';
//import { Link } from 'react-router-dom'

import firebase from "firebase/app";
import $ from 'jquery';


// If you enabled Analytics in your project, add the Firebase SDK for Analytics

// import "firebase/analytics";

// Add the Firebase products that you want to use

import "firebase/auth";
import "firebase/firestore";



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-firestore.js"></script>




// <meta charset="UTF-8">
// <meta http-equiv="X-UA-Compatible" content="IE=edge">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <title>Crowd Source ThumbTest Data</title>
// <link rel="stysheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css">

// <link href="grid.css" rel="stysheet" />

// <link href="sty.css" rel="stysheet" />

// <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js">
// </script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js">
// </script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js">
// </script>
// <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js">
// </script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js">
// </script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.dom.min.js">
// </script>


var firebaseConfig = {
    apiKey: "AIzaSyAewdopP2CsgfQ7qLukausWYO_I1zzZlSU",
    authDomain: "thumbnails-6d746.firebaseapp.com",
    projectId: "thumbnails-6d746",
    storageBucket: "thumbnails-6d746.appspot.com",
    messagingSenderId: "636145686193",
    appId: "1:636145686193:web:af7795f5114f7556b77490",
    measurementId: "G-76N3RXB95K"
};



// Initialize Firebase

// firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }




const database = firebase.firestore();


database.settings({
    timestampsInSnapshots: true
});





function Feedback() {


    
    useEffect(() => {
      
refreshImages();
        console.log("OK")
    }, [])




let dataToSave = "";


// document.getElementById("buttonleft").addEventListener("click", function () {
//     dataToSave = document.getElementById("buttonleft").innerHTML;
//     console.log("Saving Data " + dataToSave);

//     writeUserData(dataToSave);

//     refreshImages();
//     //   location.reload();
// });



// document.getElementById("buttonright").addEventListener("click", function () {
//     dataToSave = document.getElementById("buttonright").innerHTML;
//     console.log("Saving Data " + dataToSave);
//     writeUserData(dataToSave);
//     refreshImages();

//     //   location.reload();

// });



function refreshImages() {

    document.getElementById("first_div").style.order = (Math.round(Math.random()));
    addDivs(addImage);



}

function addDivs(e) {



    e();
}

const [rightimagename, setrightimagename] = useState("100013_1.jpg");
const [leftimagename, setleftimagename] = useState("200078_0.jpg");

 

 
function addImage() {
    var goodThumbnail = ["100013_1.jpg",
        "100020_1.jpg",
        "100100_1.jpg",
        "100106_1.jpg",
        "100183_1.jpg",
        "100190_1.jpg",
        "100198_1.jpg",
        "100275_1.jpg",
        "100282_1.jpg",
        "100403_1.jpg",
        "100431_1.jpg",
        "100451_1.jpg",
        "100474_1.jpg",
        "100509_1.jpg",
        "100565_1.jpg",
        "100609_1.jpg",
        "100758_1.jpg",
        "101115_1.jpg",
        "101131_1.jpg",
        "101278_1.jpg",
        "101299_1.jpg",
        "101330_1.jpg",
        "101408_1.jpg",
        "101409_1.jpg",
        "101432_1.jpg",
        "101504_1.jpg",
        "101524_1.jpg",
        "101545_1.jpg",
        "101577_1.jpg",
        "101600_1.jpg",
        "101816_1.jpg",
        "101855_1.jpg",
        "101871_1.jpg",
        "101995_1.jpg",
        "102094_1.jpg",
        "102215_1.jpg",
        "102251_1.jpg",
        "102349_1.jpg",
        "102532_1.jpg",
        "102831_1.jpg",
        "102931_1.jpg",
        "103171_1.jpg",
        "103385_1.jpg",
        "103458_1.jpg",
        "103517_1.jpg",
        "103521_1.jpg",
        "103585_1.jpg",
        "103620_1.jpg",
        "103644_1.jpg",
        "103814_1.jpg",
        "103895_1.jpg",
        "103958_1.jpg",
        "104032_1.jpg",
        "104118_1.jpg",
        "104174_1.jpg",
        "104264_1.jpg",
        "104269_1.jpg",
        "104310_1.jpg",
        "104351_1.jpg",
        "104369_1.jpg",
        "104597_1.jpg",
        "104611_1.jpg",
        "104757_1.jpg",
        "104814_1.jpg",
        "104834_1.jpg",
        "104892_1.jpg",
        "105037_1.jpg",
        "105075_1.jpg",
        "105258_1.jpg",
        "105265_1.jpg",
        "105267_1.jpg",
        "105281_1.jpg",
        "105333_1.jpg",
        "105429_1.jpg",
        "105478_1.jpg",
        "105496_1.jpg",
        "105894_1.jpg",
        "106168_1.jpg",
        "106191_1.jpg",
        "106197_1.jpg",
        "106274_1.jpg",
        "106439_1.jpg",
        "106524_1.jpg",
        "106542_1.jpg",
        "106551_1.jpg",
        "106706_1.jpg",
        "106796_1.jpg",
        "106818_1.jpg",
        "106970_1.jpg",
        "106980_1.jpg",
        "107046_1.jpg",
        "107114_1.jpg",
        "107128_1.jpg",
        "107193_1.jpg",
        "107325_1.jpg",
        "107396_1.jpg",
        "107506_1.jpg",
        "107518_1.jpg",
        "107592_1.jpg",
        "107691_1.jpg",
        "107731_1.jpg",
        "107885_1.jpg",
        "107897_1.jpg",
        "108130_1.jpg",
        "108169_1.jpg",
        "108215_1.jpg",
        "108259_1.jpg",
        "108277_1.jpg",
        "108308_1.jpg",
        "108384_1.jpg",
        "108560_1.jpg",
        "108562_1.jpg",
        "108676_1.jpg",
        "108832_1.jpg",
        "108854_1.jpg",
        "108862_1.jpg",
        "108863_1.jpg",
        "109015_1.jpg",
        "109075_1.jpg",
        "109125_1.jpg",
        "109290_1.jpg",
        "109355_1.jpg",
        "109528_1.jpg",
        "109533_1.jpg",
        "109585_1.jpg",
        "109677_1.jpg",
        "109823_1.jpg",
        "109930_1.jpg",
        "109939_1.jpg",
        "110037_1.jpg",
        "110239_1.jpg",
        "110290_1.jpg",
        "110304_1.jpg",
        "110657_1.jpg",
        "110699_1.jpg",
        "111073_1.jpg",
        "111278_1.jpg",
        "111308_1.jpg",
        "111340_1.jpg",
        "111380_1.jpg",
        "111458_1.jpg",
        "111601_1.jpg",
        "111696_1.jpg",
        "111785_1.jpg",
        "111868_1.jpg",
        "111971_1.jpg",
        "112083_1.jpg",
        "112108_1.jpg",
        "112217_1.jpg",
        "112461_1.jpg",
        "112672_1.jpg",
        "112679_1.jpg",
        "112871_1.jpg",
        "112952_1.jpg",
        "112974_1.jpg",
        "112979_1.jpg",
        "112985_1.jpg",
        "113131_1.jpg",
        "113133_1.jpg",
        "113203_1.jpg",
        "113421_1.jpg",
        "113474_1.jpg",
        "113695_1.jpg",
        "113803_1.jpg",
        "113998_1.jpg",
        "114030_1.jpg",
        "114042_1.jpg",
        "114138_1.jpg",
        "114261_1.jpg",
        "114333_1.jpg",
        "114338_1.jpg",
        "114361_1.jpg",
        "114498_1.jpg",
        "114671_1.jpg",
        "114830_1.jpg",
        "114904_1.jpg",
        "114934_1.jpg",
        "114957_1.jpg",
        "114978_1.jpg",
        "115098_1.jpg",
        "115133_1.jpg",
        "115219_1.jpg",
        "115245_1.jpg",
        "115288_1.jpg",
        "115310_1.jpg",
        "115598_1.jpg",
        "115607_1.jpg",
        "115903_1.jpg",
        "116007_1.jpg",
        "116029_1.jpg",
        "116109_1.jpg",
        "116220_1.jpg",
        "116337_1.jpg",
        "116679_1.jpg",
        "116729_1.jpg",
        "116902_1.jpg",
        "116977_1.jpg",
        "117007_1.jpg",
        "117161_1.jpg",
        "117225_1.jpg",
        "117243_1.jpg",
        "117276_1.jpg",
        "117392_1.jpg",
        "117397_1.jpg",
        "117434_1.jpg",
        "117488_1.jpg",
        "117532_1.jpg",
        "117782_1.jpg",
        "117828_1.jpg",
        "117894_1.jpg",
        "117929_1.jpg",
        "118025_1.jpg",
        "118051_1.jpg",
        "118055_1.jpg",
        "118086_1.jpg",
        "118124_1.jpg",
        "118135_1.jpg",
        "118225_1.jpg",
        "118442_1.jpg",
        "118465_1.jpg",
        "118475_1.jpg",
        "118482_1.jpg",
        "118538_1.jpg",
        "118823_1.jpg",
        "118849_1.jpg",
        "118916_1.jpg",
        "118962_1.jpg",
        "119134_1.jpg",
        "119315_1.jpg",
        "119384_1.jpg",
        "119485_1.jpg",
        "119557_1.jpg",
        "119562_1.jpg",
        "119611_1.jpg",
        "119727_1.jpg",
        "119758_1.jpg",
        "119781_1.jpg",
        "120078_1.jpg",
        "120082_1.jpg",
        "120224_1.jpg",
        "120280_1.jpg",
        "120296_1.jpg",
        "120331_1.jpg",
        "120387_1.jpg",
        "120400_1.jpg",
        "120427_1.jpg",
        "120450_1.jpg",
        "120455_1.jpg",
        "120532_1.jpg",
        "120708_1.jpg",
        "120796_1.jpg",
        "120817_1.jpg",
        "120842_1.jpg",
        "120923_1.jpg",
        "121009_1.jpg",
        "121165_1.jpg",
        "121343_1.jpg",
        "121379_1.jpg",
        "121396_1.jpg",
        "121404_1.jpg",
        "121411_1.jpg",
        "121413_1.jpg",
        "121581_1.jpg",
        "121632_1.jpg",
        "121759_1.jpg",
        "121889_1.jpg",
        "121936_1.jpg",
        "121955_1.jpg",
        "121958_1.jpg",
        "121974_1.jpg",
        "121976_1.jpg",
        "121989_1.jpg",
        "122043_1.jpg",
        "122149_1.jpg",
        "122167_1.jpg",
        "122228_1.jpg",
        "122239_1.jpg",
        "122322_1.jpg",
        "122359_1.jpg",
        "122618_1.jpg",
        "122802_1.jpg",
        "122840_1.jpg",
        "122911_1.jpg",
        "122950_1.jpg",
        "123068_1.jpg",
        "123073_1.jpg",
        "123092_1.jpg",
        "123107_1.jpg",
        "123129_1.jpg",
        "123187_1.jpg",
        "123193_1.jpg",
        "123248_1.jpg",
        "123372_1.jpg",
        "123399_1.jpg",
        "123427_1.jpg",
        "123468_1.jpg",
        "123613_1.jpg",
        "123735_1.jpg",
        "123765_1.jpg",
        "123947_1.jpg",
        "123986_1.jpg",
        "124235_1.jpg",
        "124298_1.jpg",
        "124516_1.jpg",
        "124580_1.jpg",
        "124639_1.jpg",
        "124772_1.jpg",
        "124787_1.jpg",
        "124912_1.jpg",
        "125031_1.jpg",
        "125046_1.jpg",
        "125061_1.jpg",
        "125223_1.jpg",
        "125274_1.jpg",
        "125354_1.jpg",
        "125384_1.jpg",
        "125482_1.jpg",
        "125553_1.jpg",
        "125593_1.jpg",
        "125759_1.jpg",
        "125771_1.jpg",
        "125825_1.jpg",
        "125830_1.jpg",
        "125936_1.jpg",
        "125986_1.jpg",
        "126298_1.jpg",
        "126354_1.jpg",
        "126480_1.jpg",
        "126585_1.jpg",
        "126613_1.jpg",
        "126744_1.jpg",
        "126771_1.jpg",
        "126838_1.jpg",
        "126874_1.jpg",
        "126901_1.jpg",
        "126968_1.jpg",
        "127083_1.jpg",
        "127092_1.jpg",
        "127095_1.jpg",
        "127135_1.jpg",
        "127392_1.jpg",
        "127645_1.jpg",
        "127751_1.jpg",
        "127778_1.jpg",
        "128074_1.jpg",
        "128272_1.jpg",
        "128465_1.jpg",
        "128606_1.jpg",
        "128672_1.jpg",
        "128827_1.jpg",
        "128840_1.jpg",
        "128856_1.jpg",
        "128972_1.jpg",
        "128982_1.jpg",
        "129126_1.jpg",
        "129147_1.jpg",
        "129154_1.jpg",
        "129226_1.jpg",
        "129333_1.jpg",
        "129416_1.jpg",
        "129474_1.jpg",
        "129514_1.jpg",
        "129570_1.jpg",
        "129624_1.jpg",
        "129675_1.jpg",
        "129796_1.jpg",
        "129893_1.jpg",
        "129953_1.jpg",
        "129984_1.jpg",
        "130051_1.jpg",
        "130155_1.jpg",
        "130318_1.jpg",
        "130489_1.jpg",
        "130589_1.jpg",
        "130598_1.jpg",
        "130800_1.jpg",
        "130902_1.jpg",
        "130938_1.jpg",
        "131051_1.jpg",
        "131153_1.jpg",
        "131278_1.jpg",
        "131311_1.jpg",
        "131326_1.jpg",
        "131414_1.jpg",
        "131429_1.jpg",
        "131477_1.jpg",
        "131531_1.jpg",
        "131532_1.jpg",
        "131534_1.jpg",
        "131535_1.jpg",
        "131536_1.jpg",
        "131537_1.jpg",
        "131538_1.jpg",
        "131539_1.jpg",
        "131540_1.jpg",
        "131541_1.jpg",
        "131542_1.jpg",
        "131543_1.jpg",
        "131544_1.jpg",
        "131549_1.jpg",
        "131682_1.jpg",
        "131702_1.jpg",
        "131734_1.jpg",
        "131797_1.jpg",
        "131799_1.jpg",
        "131891_1.jpg",
        "132012_1.jpg",
        "132035_1.jpg",
        "132123_1.jpg",
        "132421_1.jpg",
        "132571_1.jpg",
        "132656_1.jpg",
        "132928_1.jpg",
        "132961_1.jpg",
        "133027_1.jpg",
        "133091_1.jpg",
        "133093_1.jpg",
        "133107_1.jpg",
        "133166_1.jpg",
        "133224_1.jpg",
        "133261_1.jpg",
        "133580_1.jpg",
        "133781_1.jpg",
        "133811_1.jpg",
        "133860_1.jpg",
        "133871_1.jpg",
        "134293_1.jpg",
        "134324_1.jpg",
        "134408_1.jpg",
        "134474_1.jpg",
        "134520_1.jpg",
        "134665_1.jpg",
        "134685_1.jpg",
        "134757_1.jpg",
        "134786_1.jpg",
        "134839_1.jpg",
        "134959_1.jpg",
        "135017_1.jpg",
        "135109_1.jpg",
        "135124_1.jpg",
        "135129_1.jpg",
        "135182_1.jpg",
        "135278_1.jpg",
        "135333_1.jpg",
        "135362_1.jpg",
        "135388_1.jpg",
        "135395_1.jpg",
        "135483_1.jpg",
        "135547_1.jpg",
        "135558_1.jpg",
        "135599_1.jpg",
        "135672_1.jpg",
        "135784_1.jpg",
        "135841_1.jpg",
        "135862_1.jpg",
        "135915_1.jpg",
        "136101_1.jpg",
        "136397_1.jpg",
        "136419_1.jpg",
        "136452_1.jpg",
        "136624_1.jpg",
        "136704_1.jpg",
        "136858_1.jpg",
        "136881_1.jpg",
        "136945_1.jpg",
        "137052_1.jpg",
        "137155_1.jpg",
        "137175_1.jpg",
        "137221_1.jpg",
        "137230_1.jpg",
        "137239_1.jpg",
        "137360_1.jpg",
        "137425_1.jpg",
        "137560_1.jpg",
        "137566_1.jpg",
        "137596_1.jpg",
        "137703_1.jpg",
        "137710_1.jpg",
        "137785_1.jpg",
        "137992_1.jpg",
        "138051_1.jpg",
        "138159_1.jpg",
        "138179_1.jpg",
        "138192_1.jpg",
        "138442_1.jpg",
        "138659_1.jpg",
        "138696_1.jpg",
        "138757_1.jpg",
        "138776_1.jpg",
        "138806_1.jpg",
        "138859_1.jpg",
        "138890_1.jpg",
        "138975_1.jpg",
        "139072_1.jpg",
        "139130_1.jpg",
        "139189_1.jpg",
        "139207_1.jpg",
        "139336_1.jpg",
        "139350_1.jpg",
        "139384_1.jpg"
    ];
    var badThumbnail = ["200078_0.jpg",
        "200233_0.jpg",
        "200260_0.jpg",
        "200289_0.jpg",
        "200296_0.jpg",
        "200306_0.jpg",
        "200435_0.jpg",
        "200456_0.jpg",
        "200482_0.jpg",
        "200507_0.jpg",
        "200510_0.jpg",
        "200520_0.jpg",
        "200613_0.jpg",
        "200633_0.jpg",
        "200650_0.jpg",
        "200781_0.jpg",
        "200789_0.jpg",
        "200859_0.jpg",
        "200865_0.jpg",
        "200906_0.jpg",
        "201051_0.jpg",
        "201063_0.jpg",
        "201066_0.jpg",
        "201073_0.jpg",
        "201183_0.jpg",
        "201203_0.jpg",
        "201229_0.jpg",
        "201284_0.jpg",
        "201327_0.jpg",
        "201398_0.jpg",
        "201729_0.jpg",
        "201782_0.jpg",
        "201883_0.jpg",
        "201897_0.jpg",
        "201920_0.jpg",
        "202016_0.jpg",
        "202107_0.jpg",
        "202250_0.jpg",
        "202256_0.jpg",
        "202338_0.jpg",
        "202356_0.jpg",
        "202413_0.jpg",
        "202428_0.jpg",
        "202430_0.jpg",
        "202437_0.jpg",
        "202512_0.jpg",
        "202582_0.jpg",
        "202586_0.jpg",
        "202607_0.jpg",
        "202632_0.jpg",
        "202666_0.jpg",
        "202738_0.jpg",
        "202843_0.jpg",
        "202863_0.jpg",
        "202955_0.jpg",
        "203010_0.jpg",
        "203139_0.jpg",
        "203209_0.jpg",
        "203280_0.jpg",
        "203288_0.jpg",
        "203383_0.jpg",
        "203401_0.jpg",
        "203455_0.jpg",
        "203526_0.jpg",
        "203591_0.jpg",
        "203645_0.jpg",
        "203718_0.jpg",
        "203765_0.jpg",
        "203789_0.jpg",
        "203854_0.jpg",
        "203887_0.jpg",
        "203950_0.jpg",
        "203966_0.jpg",
        "203976_0.jpg",
        "204028_0.jpg",
        "204091_0.jpg",
        "204205_0.jpg",
        "204282_0.jpg",
        "204302_0.jpg",
        "204323_0.jpg",
        "204450_0.jpg",
        "204486_0.jpg",
        "204488_0.jpg",
        "204571_0.jpg",
        "204574_0.jpg",
        "204852_0.jpg",
        "204886_0.jpg",
        "204917_0.jpg",
        "204925_0.jpg",
        "204936_0.jpg",
        "205098_0.jpg",
        "205128_0.jpg",
        "205136_0.jpg",
        "205188_0.jpg",
        "205250_0.jpg",
        "205260_0.jpg",
        "205295_0.jpg",
        "205334_0.jpg",
        "205365_0.jpg",
        "205383_0.jpg",
        "205403_0.jpg",
        "205439_0.jpg",
        "205475_0.jpg",
        "205494_0.jpg",
        "205513_0.jpg",
        "205519_0.jpg",
        "205546_0.jpg",
        "205624_0.jpg",
        "205691_0.jpg",
        "205776_0.jpg",
        "205842_0.jpg",
        "205919_0.jpg",
        "205933_0.jpg",
        "206063_0.jpg",
        "206124_0.jpg",
        "206129_0.jpg",
        "206144_0.jpg",
        "206299_0.jpg",
        "206456_0.jpg",
        "206503_0.jpg",
        "206525_0.jpg",
        "206629_0.jpg",
        "206756_0.jpg",
        "206781_0.jpg",
        "206801_0.jpg",
        "206916_0.jpg",
        "207144_0.jpg",
        "207194_0.jpg",
        "207235_0.jpg",
        "207294_0.jpg",
        "207361_0.jpg",
        "207412_0.jpg",
        "207521_0.jpg",
        "207661_0.jpg",
        "207669_0.jpg",
        "207758_0.jpg",
        "207797_0.jpg",
        "207858_0.jpg",
        "207896_0.jpg",
        "207911_0.jpg",
        "207947_0.jpg",
        "208035_0.jpg",
        "208146_0.jpg",
        "208277_0.jpg",
        "208381_0.jpg",
        "208413_0.jpg",
        "208422_0.jpg",
        "208431_0.jpg",
        "208452_0.jpg",
        "208487_0.jpg",
        "208500_0.jpg",
        "208620_0.jpg",
        "208641_0.jpg",
        "208643_0.jpg",
        "208663_0.jpg",
        "208691_0.jpg",
        "208699_0.jpg",
        "208702_0.jpg",
        "208732_0.jpg",
        "208752_0.jpg",
        "208800_0.jpg",
        "208828_0.jpg",
        "208856_0.jpg",
        "208873_0.jpg",
        "208915_0.jpg",
        "208963_0.jpg",
        "209040_0.jpg",
        "209094_0.jpg",
        "209126_0.jpg",
        "209144_0.jpg",
        "209216_0.jpg",
        "209227_0.jpg",
        "209228_0.jpg",
        "209365_0.jpg",
        "209377_0.jpg",
        "209384_0.jpg",
        "209499_0.jpg",
        "209520_0.jpg",
        "209584_0.jpg",
        "209636_0.jpg",
        "209654_0.jpg",
        "209656_0.jpg",
        "209707_0.jpg",
        "209720_0.jpg",
        "209812_0.jpg",
        "209829_0.jpg",
        "209873_0.jpg",
        "210118_0.jpg",
        "210151_0.jpg",
        "210215_0.jpg",
        "210236_0.jpg",
        "210237_0.jpg",
        "210368_0.jpg",
        "210411_0.jpg",
        "210417_0.jpg",
        "210475_0.jpg",
        "210587_0.jpg",
        "210664_0.jpg",
        "210683_0.jpg",
        "210688_0.jpg",
        "210730_0.jpg",
        "210752_0.jpg",
        "210769_0.jpg",
        "210987_0.jpg",
        "211020_0.jpg",
        "211089_0.jpg",
        "211152_0.jpg",
        "211251_0.jpg",
        "211256_0.jpg",
        "211288_0.jpg",
        "211331_0.jpg",
        "211580_0.jpg",
        "211740_0.jpg",
        "211742_0.jpg",
        "211744_0.jpg",
        "211763_0.jpg",
        "211841_0.jpg",
        "212100_0.jpg",
        "212257_0.jpg",
        "212328_0.jpg",
        "212329_0.jpg",
        "212374_0.jpg",
        "212388_0.jpg",
        "212401_0.jpg",
        "212432_0.jpg",
        "212438_0.jpg",
        "212535_0.jpg",
        "212625_0.jpg",
        "212668_0.jpg",
        "212676_0.jpg",
        "212700_0.jpg",
        "212796_0.jpg",
        "212811_0.jpg",
        "212827_0.jpg",
        "212849_0.jpg",
        "212872_0.jpg",
        "212893_0.jpg",
        "212905_0.jpg",
        "212931_0.jpg",
        "213025_0.jpg",
        "213039_0.jpg",
        "213042_0.jpg",
        "213093_0.jpg",
        "213144_0.jpg",
        "213246_0.jpg",
        "213291_0.jpg",
        "213297_0.jpg",
        "213339_0.jpg",
        "213348_0.jpg",
        "213372_0.jpg",
        "213405_0.jpg",
        "213418_0.jpg",
        "213486_0.jpg",
        "213585_0.jpg",
        "213619_0.jpg",
        "213647_0.jpg",
        "213663_0.jpg",
        "213679_0.jpg",
        "213717_0.jpg",
        "213802_0.jpg",
        "213971_0.jpg",
        "214004_0.jpg",
        "214008_0.jpg",
        "214018_0.jpg",
        "214028_0.jpg",
        "214119_0.jpg",
        "214164_0.jpg",
        "214380_0.jpg",
        "214406_0.jpg",
        "214435_0.jpg",
        "214506_0.jpg",
        "214523_0.jpg",
        "214563_0.jpg",
        "214568_0.jpg",
        "214571_0.jpg",
        "214659_0.jpg",
        "214833_0.jpg",
        "214877_0.jpg",
        "214881_0.jpg",
        "214892_0.jpg",
        "214904_0.jpg",
        "214994_0.jpg",
        "215003_0.jpg",
        "215014_0.jpg",
        "215056_0.jpg",
        "215075_0.jpg",
        "215231_0.jpg",
        "215300_0.jpg",
        "215362_0.jpg",
        "215449_0.jpg",
        "215627_0.jpg",
        "215668_0.jpg",
        "215721_0.jpg",
        "215724_0.jpg",
        "215754_0.jpg",
        "215768_0.jpg",
        "215772_0.jpg",
        "215791_0.jpg",
        "215917_0.jpg",
        "215949_0.jpg",
        "215959_0.jpg",
        "215984_0.jpg",
        "215998_0.jpg",
        "216007_0.jpg",
        "216046_0.jpg",
        "216129_0.jpg",
        "216153_0.jpg",
        "216174_0.jpg",
        "216193_0.jpg",
        "216200_0.jpg",
        "216252_0.jpg",
        "216321_0.jpg",
        "216364_0.jpg",
        "216447_0.jpg",
        "216588_0.jpg",
        "216654_0.jpg",
        "216682_0.jpg",
        "216713_0.jpg",
        "216752_0.jpg",
        "216759_0.jpg",
        "216809_0.jpg",
        "216878_0.jpg",
        "216906_0.jpg",
        "216922_0.jpg",
        "216969_0.jpg",
        "216976_0.jpg",
        "216997_0.jpg",
        "217101_0.jpg",
        "217131_0.jpg",
        "217133_0.jpg",
        "217248_0.jpg",
        "217358_0.jpg",
        "217389_0.jpg",
        "217413_0.jpg",
        "217512_0.jpg",
        "217551_0.jpg",
        "217624_0.jpg",
        "217785_0.jpg",
        "217933_0.jpg",
        "217956_0.jpg",
        "217964_0.jpg",
        "218012_0.jpg",
        "218149_0.jpg",
        "218289_0.jpg",
        "218290_0.jpg",
        "218345_0.jpg",
        "218448_0.jpg",
        "218627_0.jpg",
        "218652_0.jpg",
        "218659_0.jpg",
        "218685_0.jpg",
        "218777_0.jpg",
        "218814_0.jpg",
        "218879_0.jpg",
        "218889_0.jpg",
        "218899_0.jpg",
        "218912_0.jpg",
        "218958_0.jpg",
        "218965_0.jpg",
        "218967_0.jpg",
        "218973_0.jpg",
        "218986_0.jpg",
        "218987_0.jpg",
        "219089_0.jpg",
        "219141_0.jpg",
        "219318_0.jpg",
        "219357_0.jpg",
        "219408_0.jpg",
        "219450_0.jpg",
        "219478_0.jpg",
        "219585_0.jpg",
        "219686_0.jpg",
        "219694_0.jpg",
        "219728_0.jpg",
        "219809_0.jpg",
        "219859_0.jpg",
        "219862_0.jpg",
        "219896_0.jpg",
        "219924_0.jpg",
        "220000_0.jpg",
        "220098_0.jpg",
        "220111_0.jpg",
        "220155_0.jpg",
        "220284_0.jpg",
        "220403_0.jpg",
        "220454_0.jpg",
        "220458_0.jpg",
        "220502_0.jpg",
        "220514_0.jpg",
        "220568_0.jpg",
        "220635_0.jpg",
        "220665_0.jpg",
        "220712_0.jpg",
        "220801_0.jpg",
        "220842_0.jpg",
        "220855_0.jpg",
        "220876_0.jpg",
        "220932_0.jpg",
        "220949_0.jpg",
        "221024_0.jpg",
        "221034_0.jpg",
        "221061_0.jpg",
        "221090_0.jpg",
        "221138_0.jpg",
        "221235_0.jpg",
        "221263_0.jpg",
        "221284_0.jpg",
        "221289_0.jpg",
        "221385_0.jpg",
        "221419_0.jpg",
        "221440_0.jpg",
        "221482_0.jpg",
        "221486_0.jpg",
        "221494_0.jpg",
        "221568_0.jpg",
        "221597_0.jpg",
        "221653_0.jpg",
        "221691_0.jpg",
        "221717_0.jpg",
        "221721_0.jpg",
        "221792_0.jpg",
        "221853_0.jpg",
        "221856_0.jpg",
        "221914_0.jpg",
        "221979_0.jpg",
        "222053_0.jpg",
        "222054_0.jpg",
        "222209_0.jpg",
        "222254_0.jpg",
        "222263_0.jpg",
        "222290_0.jpg",
        "222568_0.jpg",
        "222575_0.jpg",
        "222644_0.jpg",
        "222721_0.jpg",
        "222774_0.jpg",
        "223070_0.jpg",
        "223127_0.jpg",
        "223167_0.jpg",
        "223212_0.jpg",
        "223217_0.jpg",
        "223248_0.jpg",
        "223257_0.jpg",
        "223361_0.jpg",
        "223383_0.jpg",
        "223384_0.jpg",
        "223393_0.jpg",
        "223427_0.jpg",
        "223522_0.jpg",
        "223527_0.jpg",
        "223530_0.jpg",
        "223610_0.jpg",
        "223613_0.jpg",
        "223702_0.jpg",
        "223738_0.jpg",
        "223880_0.jpg",
        "224001_0.jpg",
        "224019_0.jpg",
        "224191_0.jpg",
        "224232_0.jpg",
        "224288_0.jpg",
        "224306_0.jpg",
        "224321_0.jpg",
        "224328_0.jpg",
        "224369_0.jpg",
        "224379_0.jpg",
        "224432_0.jpg",
        "224451_0.jpg",
        "224582_0.jpg",
        "224601_0.jpg",
        "224639_0.jpg",
        "224649_0.jpg",
        "224718_0.jpg",
        "224764_0.jpg",
        "224801_0.jpg",
        "224910_0.jpg",
        "224919_0.jpg",
        "224944_0.jpg",
        "224959_0.jpg",
        "225014_0.jpg",
        "225052_0.jpg",
        "225066_0.jpg",
        "225108_0.jpg",
        "225126_0.jpg",
        "225168_0.jpg",
        "225263_0.jpg",
        "225320_0.jpg",
        "225347_0.jpg",
        "225470_0.jpg",
        "225478_0.jpg",
        "225524_0.jpg",
        "225525_0.jpg",
        "225569_0.jpg",
        "225581_0.jpg",
        "225618_0.jpg",
        "225629_0.jpg",
        "225645_0.jpg",
        "225690_0.jpg",
        "225767_0.jpg",
        "225816_0.jpg"
    ];
    var item1 = goodThumbnail[Math.floor(Math.random() * goodThumbnail.length)];
    var item2 = badThumbnail[Math.floor(Math.random() * badThumbnail.length)];


    setrightimagename(item1);
    setleftimagename(item2);

    // document.getElementById("leftimage").src = "image/" + item1;
    // document.getElementById("rightimage").src = "image/" + item2;


    $('#buttonleft').text(item1);
    $('#buttonright').text(item2);
}




function writeUserData(imageUrl) {

    database.collection('thumbnail').add({
        image: imageUrl
    })


}
















    return (




        <div className="container">

            <div className="row mt-5">
                <p>
                    Hi Guys, We are Collecting Data to get Human Opinions on our Systems Accuracy!
<br />

                </p>
                <h5>
                    You are Given a Choice Between 2 Potential Youtube Thumbnails(Suppose it is For the Same Video, by the Same Creator). <br />
    Please Select the Thumbnail that you think will get the Most Clicks
</h5>
            </div>
            <div className="row mt-5">
                <div className="col-6 first_div" id="first_div">
                    <div className="crop">
                        <img id="rightimage" width="100%" src={require(`../images/image/${rightimagename}`).default} />
                        <div id="details" className="sty-scope ytd-rich-grid-media">
                            <a id="avatar-link" className="yt-simple-endpoint sty-scope ytd-rich-grid-media" tabindex="-1"
                                title="Clément Mihailescu" href="/channel/UCaO6VoaYJv4kS-TQO_M-N_g">

                                <yt-img-shadow id="avatar" width="48" className="sty-scope ytd-rich-grid-media no-transition"  loaded="">
                                    {/* <!--css-build:shady--> */}
                                    <img id="img" className="sty-scope yt-img-shadow" alt="" width="48" src={require("../images/dp.jpg").default} />
                                </yt-img-shadow>
                            </a>
                            <div id="meta" className="sty-scope ytd-rich-grid-media">
                                <h3 className="sty-scope ytd-rich-grid-media">
                                    <a id="video-title-link">
                                        Performance test: A Simple Definition
                        </a>
                                </h3>
                                <div className="byline sty-scope ytd-rich-grid-media">
                                    <ytd-badge-supported-renderer className="ad-badge sty-scope ytd-rich-grid-media"
                                        hidden="">
                                        {/* <!--css-build:shady--> */}
                                        <dom-repeat id="repeat" as="badge" className="sty-scope ytd-badge-supported-renderer">
                                            <template is="dom-repeat">
                                            </template>
                                        </dom-repeat>
                                    </ytd-badge-supported-renderer>
                                    <ytd-video-meta-block rich-meta="" className="grid sty-scope ytd-rich-grid-media"
                                        mini-mode="">
                                        {/* <!--css-build:shady--> */}
                                        <div id="metadata" className="sty-scope ytd-video-meta-block">
                                            <div id="byline-container" className="sty-scope ytd-video-meta-block">
                                                <ytd-channel-name id="channel-name"
                                                    className="sty-scope ytd-video-meta-block">
                                                    {/* <!--css-build:shady--> */}
                                                    <div id="container" className="sty-scope ytd-channel-name">
                                                        <div id="text-container" className="sty-scope ytd-channel-name">
                                                            <yt-formatted-string id="text" title=""
                                                                className="sty-scope ytd-channel-name complex-string"
                                                                ellipsis-truncate="" has-link-only_="">
                                                                <a className="yt-simple-endpoint sty-scope yt-formatted-string"
                                                                    spellcheck="false"
                                                                    href="/channel/UCaO6VoaYJv4kS-TQO_M-N_g" dir="auto"
                                                                    >Mike
                                                        Andrews</a>

                                                            </yt-formatted-string>
                                                        </div>
                                                        <tp-yt-paper-tooltip fit-to-visible-bounds=""
                                                            className="sty-scope ytd-channel-name" role="tooltip"
                                                            tabindex="-1">
                                                            {/* <!--css-build:shady--> */}
                                                            <div id="tooltip"
                                                                className="hidden sty-scope tp-yt-paper-tooltip">
                                                                Clément Mihailescu
                                                </div>
                                                        </tp-yt-paper-tooltip>
                                                    </div>
                                                    <ytd-badge-supported-renderer className="sty-scope ytd-channel-name"
                                                        >
                                                        {/* <!--css-build:shady--> */}
                                                        <div
                                                            className="badge badge-sty-type-verified sty-scope ytd-badge-supported-renderer">
                                                            <yt-icon className="sty-scope ytd-badge-supported-renderer">
                                                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                                                                    focusable="false" className="sty-scope yt-icon"
                                                                    >
                                                                    <g className="sty-scope yt-icon">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"
                                                                            className="sty-scope yt-icon">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                                {/* <!--css-build:shady--> */}
                                                            </yt-icon>
                                                            <span className="sty-scope ytd-badge-supported-renderer">
                                                            </span>
                                                            <tp-yt-paper-tooltip position="top"
                                                                className="sty-scope ytd-badge-supported-renderer"
                                                                role="tooltip" tabindex="-1">
                                                                {/* <!--css-build:shady--> */}
                                                                <div id="tooltip"
                                                                    className="hidden sty-scope tp-yt-paper-tooltip">
                                                                    Verified
                                                    </div>
                                                            </tp-yt-paper-tooltip>
                                                        </div>
                                                        <dom-repeat id="repeat" as="badge"
                                                            className="sty-scope ytd-badge-supported-renderer">
                                                            <template is="dom-repeat">
                                                            </template>
                                                        </dom-repeat>
                                                    </ytd-badge-supported-renderer>
                                                </ytd-channel-name>
                                                <div id="separator" className="sty-scope ytd-video-meta-block">•</div>
                                            </div>
                                            <div id="metadata-line" className="sty-scope ytd-video-meta-block">
                                                <span className="sty-scope ytd-video-meta-block">24K
                                        views</span>
                                                <span className="sty-scope ytd-video-meta-block">1 month
                                        ago</span>
                                                <dom-repeat strip-whitespace="" className="sty-scope ytd-video-meta-block">
                                                    <template is="dom-repeat">
                                                    </template>
                                                </dom-repeat>
                                            </div>
                                        </div>
                                        <div id="additional-metadata-line" className="sty-scope ytd-video-meta-block">
                                            <dom-repeat className="sty-scope ytd-video-meta-block">
                                                <template is="dom-repeat">
                                                </template>
                                            </dom-repeat>
                                        </div>
                                    </ytd-video-meta-block>
                                </div>
                                <div className="metadata-snippet-container sty-scope ytd-rich-grid-media" hidden="">
                                    <yt-formatted-string className="description-snippet sty-scope ytd-rich-grid-media">This is
                                    the story of my very first software engineering job interview at a company called
                                    Replit. I hadn't done any coding interviews before this one, and I had just
                            graduated from a coding...</yt-formatted-string>
                                </div>
                                <div className="sty-scope ytd-rich-grid-media" hidden="">
                                    <ul className="playlist-video-list sty-scope ytd-rich-grid-media">
                                        <dom-repeat as="video" className="sty-scope ytd-rich-grid-media">
                                            <template is="dom-repeat">
                                            </template>
                                        </dom-repeat>
                                    </ul>
                                    <yt-formatted-string className="view-more-link sty-scope ytd-rich-grid-media" hidden="">
                                        {/* <!--css-build:shady--> */}
                                    </yt-formatted-string>
                                </div>
                                <ytd-badge-supported-renderer className="video-badge sty-scope ytd-rich-grid-media"
                                    disable-upgrade="" hidden="">
                                </ytd-badge-supported-renderer>
                                <div id="buttons" className="sty-scope ytd-rich-grid-media">
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="btn btn-danger  mt-3" id="buttonright"  onClick={
                        async function () {
                            dataToSave = document.getElementById("buttonright").innerHTML;
                            console.log("Saving Data " + dataToSave);
                            writeUserData(dataToSave);
                            refreshImages();
                        
                            //   location.reload();
                        
                        }
                    }> This </div>
                </div>


                <div className="col-6 second_div" id="second_div">
                    <div className="crop">
                        <img id="leftimage" width="100%" src={require(`../images/image/${leftimagename}`).default} />
                        <div id="details" className="sty-scope ytd-rich-grid-media">
                            <a id="avatar-link" className="yt-simple-endpoint sty-scope ytd-rich-grid-media" tabindex="-1"
                                title="Clément Mihailescu" href="/channel/UCaO6VoaYJv4kS-TQO_M-N_g">
                                <yt-img-shadow id="avatar" width="48" className="sty-scope ytd-rich-grid-media no-transition" loaded="">
                                    {/* <!--css-build:shady--> */}
                                    <img id="img" className="sty-scope yt-img-shadow" alt="" width="48" src={require("../images/dp.jpg").default} />
                                </yt-img-shadow>
                            </a>
                            <div id="meta" className="sty-scope ytd-rich-grid-media">
                                <h3 className="sty-scope ytd-rich-grid-media">
                                    <a id="video-title-link">
                                        Performance test: A Simple Definition
                        </a>
                                </h3>
                                <div className="byline sty-scope ytd-rich-grid-media">
                                    <ytd-badge-supported-renderer className="ad-badge sty-scope ytd-rich-grid-media"
                                        hidden="">
                                        {/* <!--css-build:shady--> */}
                                        <dom-repeat id="repeat" as="badge" className="sty-scope ytd-badge-supported-renderer">
                                            <template is="dom-repeat">
                                            </template>
                                        </dom-repeat>
                                    </ytd-badge-supported-renderer>
                                    <ytd-video-meta-block rich-meta="" className="grid sty-scope ytd-rich-grid-media"
                                        mini-mode="">
                                        {/* <!--css-build:shady--> */}
                                        <div id="metadata" className="sty-scope ytd-video-meta-block">
                                            <div id="byline-container" className="sty-scope ytd-video-meta-block">
                                                <ytd-channel-name id="channel-name"
                                                    className="sty-scope ytd-video-meta-block">
                                                    {/* <!--css-build:shady--> */}
                                                    <div id="container" className="sty-scope ytd-channel-name">
                                                        <div id="text-container" className="sty-scope ytd-channel-name">
                                                            <yt-formatted-string id="text" title=""
                                                                className="sty-scope ytd-channel-name complex-string"
                                                                ellipsis-truncate="" has-link-only_="">
                                                                <a className="yt-simple-endpoint sty-scope yt-formatted-string"
                                                                    spellcheck="false"
                                                                    href="/channel/UCaO6VoaYJv4kS-TQO_M-N_g" dir="auto">Mike
                                                        Andrews</a>

                                                            </yt-formatted-string>
                                                        </div>
                                                        <tp-yt-paper-tooltip fit-to-visible-bounds=""
                                                            className="sty-scope ytd-channel-name" role="tooltip"
                                                            tabindex="-1">
                                                            {/* <!--css-build:shady--> */}
                                                            <div id="tooltip"
                                                                className="hidden sty-scope tp-yt-paper-tooltip">
                                                                Clément Mihailescu
                                                </div>
                                                        </tp-yt-paper-tooltip>
                                                    </div>
                                                    <ytd-badge-supported-renderer className="sty-scope ytd-channel-name">
                                                        {/* <!--css-build:shady--> */}
                                                        <div
                                                            className="badge badge-sty-type-verified sty-scope ytd-badge-supported-renderer">
                                                            <yt-icon className="sty-scope ytd-badge-supported-renderer">
                                                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
                                                                    focusable="false" className="sty-scope yt-icon" >
                                                                    <g className="sty-scope yt-icon">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"
                                                                            className="sty-scope yt-icon">
                                                                        </path>
                                                                    </g>
                                                                </svg>
                                                                {/* <!--css-build:shady--> */}
                                                            </yt-icon>
                                                            <span className="sty-scope ytd-badge-supported-renderer">
                                                            </span>
                                                            <tp-yt-paper-tooltip position="top"
                                                                className="sty-scope ytd-badge-supported-renderer"
                                                                role="tooltip" tabindex="-1">
                                                                {/* <!--css-build:shady--> */}
                                                                <div id="tooltip"
                                                                    className="hidden sty-scope tp-yt-paper-tooltip">
                                                                    Verified
                                                    </div>
                                                            </tp-yt-paper-tooltip>
                                                        </div>
                                                        <dom-repeat id="repeat" as="badge"
                                                            className="sty-scope ytd-badge-supported-renderer">
                                                            <template is="dom-repeat">
                                                            </template>
                                                        </dom-repeat>
                                                    </ytd-badge-supported-renderer>
                                                </ytd-channel-name>
                                                <div id="separator" className="sty-scope ytd-video-meta-block">•</div>
                                            </div>
                                            <div id="metadata-line" className="sty-scope ytd-video-meta-block" >
                                                <span className="sty-scope ytd-video-meta-block" >24K
                                        views</span>
                                                <span className="sty-scope ytd-video-meta-block" >1 month
                                        ago</span>
                                                <dom-repeat strip-whitespace="" className="sty-scope ytd-video-meta-block">
                                                    <template is="dom-repeat">
                                                    </template>
                                                </dom-repeat>
                                            </div>
                                        </div>
                                        <div id="additional-metadata-line" className="sty-scope ytd-video-meta-block">
                                            <dom-repeat className="sty-scope ytd-video-meta-block">
                                                <template is="dom-repeat">
                                                </template>
                                            </dom-repeat>
                                        </div>
                                    </ytd-video-meta-block>
                                </div>
                                <div className="metadata-snippet-container sty-scope ytd-rich-grid-media" hidden="">
                                    <yt-formatted-string className="description-snippet sty-scope ytd-rich-grid-media">This is
                                    the story of my very first software engineering job interview at a company called
                                    Replit. I hadn't done any coding interviews before this one, and I had just
                            graduated from a coding...</yt-formatted-string>
                                </div>
                                <div className="sty-scope ytd-rich-grid-media" hidden="">
                                    <ul className="playlist-video-list sty-scope ytd-rich-grid-media">
                                        <dom-repeat as="video" className="sty-scope ytd-rich-grid-media">
                                            <template is="dom-repeat">
                                            </template>
                                        </dom-repeat>
                                    </ul>
                                    <yt-formatted-string className="view-more-link sty-scope ytd-rich-grid-media" hidden="">
                                        {/* <!--css-build:shady--> */}
                                    </yt-formatted-string>
                                </div>
                                <ytd-badge-supported-renderer className="video-badge sty-scope ytd-rich-grid-media"
                                    disable-upgrade="" hidden="">
                                </ytd-badge-supported-renderer>
                                <div id="buttons" className="sty-scope ytd-rich-grid-media">
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="btn btn-danger  mt-3" id="buttonleft" onClick={
                        async function () {
                            dataToSave = document.getElementById("buttonright").innerHTML;
                            console.log("Saving Data " + dataToSave);
                            writeUserData(dataToSave);
                            refreshImages();
                        
                            //   location.reload();
                        
                        }
                    }> This </div>
                </div>




            </div>




            <div className="row mt-5" id="content">



            </div>
        </div>









    )

}


export default Feedback;