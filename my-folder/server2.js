'use strict';
var express = require('express');
var app = express();
var options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric"  
};  

//app.use(express.static('public'));
//app.use(express.static('public'));
app.get("/", function (request, response) {
  response.sendFile("/app"+ '/views/index.html');
});
app.get('/:dateString', function(req,res) {
 // var dateString = req.params.dateString;
  //dateString = dateString.trim();
 // var testempty = (req.param('dateString') ===''); 
//if(!testempty){  res.json(({unix : null, calendarDate: null}))};
  var d = req.params.dateString;
  //if(d.test(/\\/)) {d.replace(/\\g/, "-");}
  if(isNaN(d)) {
    var calendarDate= new Date(d);
    if (calendarDate == 'Invalid Date') { res.json(({unix: null, calendarDate: null}))};
   // calendarDate = calendarDate.getTime();
    //var month = calendarDate.getMonth();
  //  var dat = calendarDate.getDate();
  //  var year = calendarDate.getFullYear();var d = new Date();

  //calendarDate = calendarDate.getDate()  + "-" + (calendarDate.getMonth()+1) + "-" + calendarDate.getFullYear() + " " +
//calendarDate.getHours() + ":" + calendarDate.getMinutes();

// 16-5-2015 9:50
    
    calendarDate = calendarDate.toLocaleDateString("en-us", options);
    var unixDate = new Date(d).getTime()/1000;
     //var unixDate = 145671860;


  }
   else  {
     var unixDate=  d;
     var calendarDate = new Date( d*1000);
     calendarDate = calendarDate.toLocaleDateString("en-us", options);
     //var month = calendarDate.getMonth();
     //var dat = calendarDate.getDate();
     //res.end();
    // console.log( month + dat + year);
   }
    // d = d.trim();
    //  if(d == null || d == "") { unixDate = null; calendarDate = null;}
  // if(testempty) {unixDate= null; calendarDate = null;}
    res.json(({unix : unixDate, calendarDate: calendarDate}));
  
   })
app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
  console.log( 'month + dat + year');
});