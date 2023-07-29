function displayTime(){

    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mnts = dateTime.getMinutes();
    var scnds = dateTime.getSeconds();

    var date = dateTime.getDate();
    var month = dateTime.getMonth();
    var year = dateTime.getFullYear();

    document.getElementById("hours").innerText = hrs;
    document.getElementById("minutes").innerText = mnts;
    document.getElementById("seconds").innerText = scnds;
    
    document.getElementById("date").innerText = date;
    document.getElementById("months").innerText = month;
    document.getElementById("years").innerText = year;

}
setInterval(displayTime, 10);

