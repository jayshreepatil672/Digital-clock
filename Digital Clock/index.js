setInterval(() => {
    
    let time = document.getElementById('time')
    var d = new Date()
    var hh = d.getHours()
    var mm = d.getMinutes()
    var ss = d.getSeconds()
    var am = "AM"
    if(hh >= 12)
    {
        am = "PM"
    }
    if(hh >= 12)
    {
        hh = hh - 12
    }
    if(hh >= 0 && hh<=9)
    {
        hh = '0' + hh;
    }
    if(mm >= 0 && mm <= 9)
    {
        mm = '0' + mm;
    }
    if(ss >= 0 && ss<=9)
        {
            ss = '0' + ss;
        }

    time.innerHTML = hh + ' : ' + mm + ' : ' + ss  + "   " + am

});
