function updateTime() {
    var fullDate = new Date();

    let HH = fullDate.getHours();
    let MM = fullDate.getMinutes();
    let SS = fullDate.getSeconds();

    HH = (HH < 10) ? "0" + HH : HH;
    MM = (MM < 10) ? "0" + MM : MM;
    SS = (SS < 10) ? "0" + SS : SS;

    let time = `${HH}:${MM}:${SS}`;
    document.querySelector('#time').innerText = time;
    setTimeout(updateTime, 1000);
}

function updateDate() {
    var fullDate = new Date();
    var monthList =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var year = fullDate.getFullYear();
    var month = monthList[fullDate.getMonth()];
    var date = fullDate.getDate();
    var today = `${month} ${date},${year}`;
    document.querySelector('#date').innerText = today;
}

updateTime();
updateDate();