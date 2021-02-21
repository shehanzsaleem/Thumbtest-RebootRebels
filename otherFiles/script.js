function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





function chart1GetData() {
  console.log("CALLED");
  var preFix = "https://spreadsheets.google.com/feeds/list/";



  var SheetID = "14jVH5kZAF5OT9GNLT0dsj7g-xbfH1KmCJesqEfvnQW8";

  var postFix = "/1/public/values?alt=json";
  var spreadsheetURL = preFix + SheetID + postFix;
  console.log(spreadsheetURL);
  function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  }
  $.getJSON(spreadsheetURL, function (data) {
    var entry = data.feed.entry;
    var length = entry.length;


    var c1 = [];
    var c2 = [];





    // day = day.push(data.feed.entry[i]['gsx$day']['$t']);
    // dayminutes = dayminutes.push(data.feed.entry[i]['gsx$hoursum']['$t']);


    for (var i = 0; i <= length - 1; i++) {


      //    console.log(i);

      var c1_data = data.feed.entry[i]['gsx$views']['$t'];
      var c2_data = data.feed.entry[i]['gsx$viewsfiltered']['$t'];

      c1.push(c1_data);
      c2.push(c2_data);

      // console.log(data.feed.entry[i]['gsx$hoursum']['$t']);
      // console.log(dayminutes);

    }


    // day.reverse();
    // dayminutes.reverse();

    // console.log(dayminutes.length);

    // var rangeOfChart = 70;




    // dayminutes = sma(dayminutes, 100);

    // dayminutes = dayminutes.slice(100,);



    var labelss = [];

    for (var i = 0; i < c1.length; i++) {
      labelss.push(i);

    }


    // day.reverse();



    c1 = sma(c1,1000);
    c2 = sma(c2, 1000);



    var ctx = document.getElementById('myChart');




    // var myChart = new Chart(ctx, {
    //   type: 'line',
    //   data: {
    //     labels: labelss,
    //     datasets: [{
    //       label: '# of Votes',
    //       data: c1,
    //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //       borderColor: 'rgba(255, 159, 64, 1)',
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });



    

var config = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelss,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255, 0, 0, 0)',
      borderColor: 'rgba(255, 0, 0, 1)',
      data: c1,
      fill: false,
    }, {
      label: 'My Second dataset',
      fill: false,
      backgroundColor: 'rgba(0, 0, 255, 0)',
      borderColor: 'rgba(0, 0, 255, 1)',
      data: c2
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }
});





  });

}












function sma(arr, range) {
  if (!Array.isArray(arr)) {
      throw TypeError('expected first argument to be an array');
  }
  // var fn = typeof format === 'function' ? format : toFixed;
  var num = range || arr.length;
  var res = [];
  var len = arr.length + 1;
  var idx = num - 1;





  // Math.avg()

  for (var i = 0; i < range; i++) {



      // res.push(2.6+ (Math.random()*0.1));
      res.push(0);
  }




  while (++idx < len) {
      res.push((avg(arr, idx, num)));
  }

  console.log(average_of_array(arr));
  // console.log(res);

  return res;


}

function avg(arr, idx, range) {
  return sum(arr.slice(idx - range, idx)) / range;
}

function sum(arr) {
  var len = arr.length;
  var num = 0;
  while (len--) num += Number(arr[len]);
  return num;
}



let average_of_array = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average_of_array([1, 2, 3, 4, 5]));