let sliderContainer=document.getElementById('slidercontainer');
let slider=document.getElementById('slider');
let cards=slider.getElementsByTagName('li');
if (document.body.clientWidth < 1000){
	 show=1;
}
if (document.body.clientWidth > 1000){
	 show=4;
}

let sliderContainerWidth=sliderContainer.clientWidth;
let cardsWidth=sliderContainerWidth/show;
slider.style.width=cards.length*cardsWidth+'px';
slider.style.transition='margin';
slider.style.transitionDuration='1s';
for (let index=0; index < cards.length;index++){
	const element=cards[index];
	element.style.width=cardsWidth+'px';
}

function prev(){
	let a=Math.floor(+slider.style.marginLeft.slice(0,-2));
	let b=Math.floor(-cardsWidth*(cards.length-show));
	
	if(a != b)
	// console.log(+slider.style.marginLeft.slice(0,-2))
	// console.log(-cardsWidth*(cards.length-show))
	slider.style.marginLeft=((+slider.style.marginLeft.slice(0,-2))-cardsWidth)+'px';
}
function next(){
	
	if(+slider.style.marginLeft.slice(0,-2)!=0)
	slider.style.marginLeft=((+slider.style.marginLeft.slice(0,-2))+cardsWidth)+'px';


}
