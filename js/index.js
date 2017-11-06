$(function(){
	$('#dowebok').fullpage({
		'navigation':true,
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu',	
		afterLoad: function(anchorLink, index){
			if(index==1){
				$('.section1').find('.section_small').fadeIn();
				$(".pros").each(function(){
					var t=$(this);
					t.removeClass("progressbar");
					t.find(".bar").animate({width:0});
					t.find(".label .perc").remove();
				})
			}
			if(index == 2){
				$('.section2').find('.section_small').fadeIn();
				$('.section2').find('.progressbar').fadeIn();
				$(".pros").each(function(){
					$(this).addClass("progressbar");
				})
				$(function() {
					$('.progressbar').each(function(){
						var t = $(this),
						dataperc = t.attr('data-perc'),
						barperc = Math.round(dataperc*5.02);
						t.find('.bar').animate({width:barperc}, dataperc*25);
						t.find('.label').append('<div class="perc"></div>');
						function perc(){
							var length = t.find('.bar').css('width'),
							perc = Math.round(parseInt(length)/5.02),
							labelpos = (parseInt(length)-2);
							t.find('.label').css('left', labelpos);
							t.find('.perc').text(perc+'%');
						}
						perc();
						setInterval(perc,0); 
					});
				});
				
			}
			if(index == 3){
				$('.section3').find('.section_small').delay(500).animate({
					bottom: '50%'
				}, 1500, 'easeOutExpo');
				$(".pros").each(function(){
					var t=$(this);
					t.removeClass("progressbar");
					t.find(".bar").animate({width:0});
					t.find(".label .perc").remove();
				})
				
			}
			if(index == 4){
				$('.section4').find('.section_small').fadeIn(2000);
				$(".pros").each(function(){
					var t=$(this);
					t.removeClass("progressbar");
					t.find(".bar").animate({width:0});
					t.find(".label .perc").remove();
				})
			}
		},
		onLeave: function(index, direction){
			if(index == '1'){
				$('.section1').find('.section_small').fadeOut(2000);
			}
			if(index == '2'){
				$('.section2').find('.section_small').fadeOut(2000);
			}
			if(index == '3'){
				$('.section3').find('.section_small').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('.section_small').fadeOut(2000);
			}
		}
	});
});