$(function(){

	var cWidth = $('.card:first').width() + parseInt($('.card:first').css('borderLeftWidth'))*2;
	var cLeg = cWidth/2;
	var cards = $('.card');
	var leftWidth = $('#left').width(); //425
	var leftHeight = $('#left').height(); //300
	
	function rand(factor){
		return Math.round(Math.random() * factor); 
	}
	
	function resetZ(id) {
	
		var z = parseInt($('#' + id).css('z-index'));
		var card = cards.splice(z,1)[0];
		cards.push(card);
		cards.each(function(index){
			$(this).css('z-index', index);
		});
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
	
	$('.card').draggable({
		scroll: false, 
		containment: "section", 
		start: function(e) {
			$(e.target).css('transform', 'rotate(' + 0 + 'deg)');
		},
		drag: function() {
			//console.log('dragging');
		},
		stop: function() {
			//console.log('drag stopped');
		}
	});
	
	$('.card').mousedown(function(e) {
		resetZ(e.target.id);
	});
});












