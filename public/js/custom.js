const express= require("express")

const app=express()

app.use(express.static(path.join(__dirname, 'public')));

function openIt(){

const url='https://youtu.be/yXrnCb57sZU?si=UFcgXOzQOfF1R21B' ;    //for the top button

window.open(url);
}
function open1(){
    const url1='https://whimsygames.co/services/3d-modeling-for-game-art/';  //fo the first service
    window.open(url1);
}

function open2(){
    const url2='https://skywell.software/gamification-services/';  //fo the first service
    window.open(url2);
}

function open3(){
    const url3='https://www.redappletech.com/how-gamification-in-elearning-is-revolutionizing-education/';  //fo the first service
    window.open(url3);
}

function open4(){
    const url4='C:\Users\jumana\Desktop\Gamification1\views\event\create.ejs';  //fo the first service
    window.open(url4);
}











