function getDate()
{
    var date = new Date();
    var year = date.getFullYear();
    var month = [ "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря" ];
    var month_Index =  date.getMonth();
    var date = date.getDate();
     document.getElementById('timedisplay').innerHTML = date + ' ' + month[month_Index] + ' ' + year;
}
setInterval(getDate, 0);