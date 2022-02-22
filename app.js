
var elements = document.getElementsByClassName('ellipsis');
var activities = document.getElementsByClassName('activity');
var color1 = 'hsl(235, 46%, 20%)';
var color2 = 'hsl(235, 45%, 41%)';
activity_hover_handler('onload')
for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('mouseover', ()=>{
        elements[i].src = 'images/icon-ellipsis-white.svg';
        activities[i].style.backgroundColor = color1;
        activity_hover_handler('mouseover');
    });
    elements[i].addEventListener('mouseleave', ()=>{
        elements[i].src = 'images/icon-ellipsis.svg';
        activity_hover_handler('mouseleave');
;    });
}

function activity_hover_handler(eventType){
    for (let i=0; i < activities.length; i++){
        if (eventType == 'mouseover'){
            add_event(activities[i], 'mouseover', color1);
        } else if (eventType == 'mouseleave') {
            add_event(activities[i], 'mouseover', color2);
            add_event(activities[i], 'mouseleave', color1);
        } else {
            add_event(activities[i], 'mouseover', color2);
            add_event(activities[i], 'mouseleave', color1);
        }
    }
}

function add_event(element, eventType, color){
    element.addEventListener(eventType, ()=>{
        element.style.backgroundColor = color;
    });
}

var dailyPeriod = document.getElementById('daily-period');
var weeklyPeriod = document.getElementById('weekly-period');
var monthlyPeriod = document.getElementById('monthly-period');
var dailyElements = document.getElementsByClassName('daily');
var weeklyElements = document.getElementsByClassName('weekly');
var monthlyElements = document.getElementsByClassName('monthly');

dailyPeriod.addEventListener('onclick', ()=>{
    change_display(dailyElements);
});

function change_display(elements){
    if (elements == dailyElements){
        for (let i = 0; i < elements.length; i++){
            elements[i].style.display = 'block';
            weeklyElements[i].style.display = 'none';
            monthlyElements[i].style.display = 'none';
        }
    } else if (elements == weeklyElements){
        for (let i = 0; i < elements.length; i++){
            elements[i].style.display = 'block';
            dailyElements[i].style.display = 'none';
            monthlyElements[i].style.display = 'none';
        }
    } else {
        for (let i = 0; i < elements.length; i++){
            elements[i].style.display = 'block';
            dailyElements[i].style.display = 'none';
            weeklyElements[i].style.display = 'none';
        }
    }
    
}