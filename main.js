$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
$('.images > img:nth-child(4)').addClass('enter')
let n = 1
setInterval(function(){
	$(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
		.one('transitionend', function(e){
			$(e.currentTarget).removeClass('leave').addClass('enter')
		})
	$(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
	n += 1
}, 2000)

function x(n){
	if(n>4){
		n = n%4
		if(n===0){
			n = 4
		}
	}
	return n
}