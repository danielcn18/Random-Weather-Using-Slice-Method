var info = ["14°C", "Cloudy", "Humidity: 12%", "Precipitation: 10%", "Wind: 26 mph", "Moonrise: 8:16am", "Moonset: 8:12pm", "Chance of rain: 6%"];

function random(){
    var r = Math.floor(Math.random() * (info.length))
    console.log(info[r]);
    console.log(info.slice(r, r+1));

    document.getElementById('show').innerText = info.slice(r, r+1);
}