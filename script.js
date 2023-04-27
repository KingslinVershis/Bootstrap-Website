var thor=document.querySelector('.thor');
var cap=document.querySelector('.cap');
var iron=document.querySelector('.iron');
var hulk=document.querySelector('.hulk');


var bat=document.querySelector('.bat');
var superr=document.querySelector('.super');
var flash=document.querySelector('.flash');
var adam=document.querySelector('.adam');


var leo=document.querySelector('.leo');
var rolex=document.querySelector('.rolex');
var thailex=document.querySelector('.thailex');
var dili=document.querySelector('.dili');

//MCU

thor.addEventListener('mouseover',function(){
    thor.src="img/thunder.gif";
})
thor.addEventListener('mouseout',function(){
    thor.src="img/thor.jpg";
})


cap.addEventListener('mouseover',function(){
    cap.src="img/captain.gif";
})
cap.addEventListener('mouseout',function(){
    cap.src="img/captain.jpg";
})

iron.addEventListener('mouseover',function(){
    iron.src="img/tony.gif";
})
iron.addEventListener('mouseout',function(){
    iron.src="img/iron.jpg";
})

hulk.addEventListener('mouseover',function(){
    hulk.src="img/hulk.gif";
})
hulk.addEventListener('mouseout',function(){
    hulk.src="img/hulk.jpg";
})


//DCU

bat.addEventListener('mouseover',function(){
    bat.src="img/bat.gif";
})
bat.addEventListener('mouseout',function(){
    bat.src="img/batman.jpg";
})

superr.addEventListener('mouseover',function(){
    superr.src="img/superman.gif";
})
superr
.addEventListener('mouseout',function(){
    superr
    .src="img/superman.jpg";
})

flash.addEventListener('mouseover',function(){
    flash.src="img/flashh.gif";
})
flash.addEventListener('mouseout',function(){
    flash.src="img/flash.jpg";
})

adam.addEventListener('mouseover',function(){
    adam.src="img/blackadam.gif";
})
adam.addEventListener('mouseout',function(){
    adam.src="img/adam.jpg";
})


//LCU

leo.addEventListener('mouseover',function(){
    leo.src="img/vj.gif";
})
leo.addEventListener('mouseout',function(){
    leo.src="img/leo.jpg";
})

rolex.addEventListener('mouseover',function(){
    rolex.src="img/rolex.gif";
})
rolex.addEventListener('mouseout',function(){
    rolex.src="img/rolex.jpg";
})

thailex.addEventListener('mouseover',function(){
    thailex.src="img/thailex.gif";
})
thailex.addEventListener('mouseout',function(){
    thailex.src="img/thailex.jpg";
})

dili.addEventListener('mouseover',function(){
    dili.src="img/karthi.gif";
})
dili.addEventListener('mouseout',function(){
    dili.src="img/dili.jpg";
})

//Animation

/*const images=document.querySelectorAll('.img-fluid');
const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('reveal');
        }
        else{
            entry.target.classList.remove('reveal');
        }
    });
});
images.forEach((el) => observer.observe)(el);*/





const elements=document.querySelectorAll(".name")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show",entry.isIntersecting)
    })
})
elements.forEach(element =>
    {
  observer.observe(element)})




const images=document.querySelectorAll(".img-fluid")
const observers = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("reveal",entry.isIntersecting)
    })
})
images.forEach(image =>
    {
  observers.observe(image)})
  