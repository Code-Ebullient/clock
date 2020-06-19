function currentTime() {
    var thisDate = new Date(); /* creating object of Date class */
  
    var hour = thisDate.getHours();
    var min = thisDate.getMinutes();
    var sec = thisDate.getSeconds();
    /*getHours method is for getting hrs/mins/secs & millisec */
  
    /*checkTime or updateTime method to display current time */
    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("myClock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
  
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  /*This function displays the time two-digit format & 0 is appended if any is less than 10*/
  function checkTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */