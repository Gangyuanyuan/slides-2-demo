let n
初始化()
setInterval(function(){
	makeLeave(getImage(n))
		.one('transitionend', function(e){
			makeEnter($(e.currentTarget))
		})
	makeCurrent(getImage(n+1))
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
function 初始化(){
	n = 1
	$(`.images > img:nth-child(${n})`).addClass('current')
		.siblings().addClass('enter')
}
function makeCurrent($node){
	return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
	return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node){
	return $node.removeClass('current leave').addClass('enter')
}
function getImage(n){
	return $(`.images > img:nth-child(${x(n)})`)
}