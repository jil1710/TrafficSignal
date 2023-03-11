var traffic_color = ["red","yellow","green"];
var count = 0;

function trafficLightChange(){
    var light1 = document.getElementsByClassName('light_1');
    var light2 = document.getElementsByClassName('light_4');
    var poll1 = document.getElementsByClassName('poll_1')[0];
    var poll2 = document.getElementsByClassName('poll_4')[0];
    for(var j=0;j<light1.length;j++){
        light1[j].style.background = 'black'
        light2[j].style.background = 'black'
    }

    light1[count].style.background = traffic_color[count];
    light2[count].style.background = traffic_color[count];
    poll1.style.border = "3px solid " + traffic_color[count];
    poll2.style.border = "3px solid " + traffic_color[count];
    poll1.style.boxShadow = "1px 1px 15px -1px " + traffic_color[count];
    poll2.style.boxShadow = "1px 1px 15px -1px " + traffic_color[count];
    if(count < light1.length)
    {
        count++;
    }

    if(count>=3){
        count=0
    }
    
}


window.onload = ()=>{
    trafficLightChange();
}

setInterval(trafficLightChange,6000)