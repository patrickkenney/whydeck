var cWidth = $('.card:first').width() + parseInt($('.card:first').css('borderLeftWidth'))*2;
var cLeg = cWidth/2;
var cards = $('.card');
var leftWidth = $('#left').width(); //425
var leftHeight = $('#left').height(); //300

function rand(factor){
	return Math.round(Math.random() * factor); 
}

$('.card').each(function(index) {
	$(this).css({
		'position': 'absolute',
		'left': rand(leftWidth-(Math.hypot(cLeg,cLeg)+cLeg)),
		'top': rand(leftHeight-(Math.hypot(cLeg,cLeg)+cLeg)),
		'transform': 'rotate(' + rand(360) + 'deg)' ,
		'background-color': 'rgb('+rand(255)+ ',' +rand(255)+','+rand(255)+')',
		'z-index': index
	});
});

cards.click(function(){
	var c = cards.splice($(this).css('z-index'),1);
	cards.push(c[0]);

	cards.each(function(index){
		$(this).css('z-index', index);
	});
});

$('.card').draggable({scroll: false, containment: "section"});












