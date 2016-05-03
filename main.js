$(function(){

	var cWidth = $('.card:first').width() + parseInt($('.card:first').css('borderLeftWidth'))*2;
	var cLeg = cWidth/2;
	var cards = $('.card');
	var leftWidth = $('#left').width(); //425
	var leftHeight = $('#left').height(); //300
	
	function rand(factor){
		return Math.round(Math.random() * factor); 
	}
	
	function resetZ(z) {
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

	cards.mousedown(function(e) {
		var z = '';
		if($(e.target.parentNode).hasClass('card')) {
			z = e.target.parentNode.style.zIndex;
		} else {
			z = e.target.style.zIndex;
		}
		resetZ(z);
	});

	cards.click(function(e){
		$(e.target).dialog({
			modal:true,
			show: true,
			hide: true,
			title: "Card Title"
		});
	});

});












