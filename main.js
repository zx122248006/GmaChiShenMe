// 2017.9.12 

// 获取时间信息，根据时间，在屏幕中显示吃什么的内容
var $date = new Date()
var $Hours =$date.getHours()

if($Hours >= 7){
	$('.eat').text('早上吃什么？')
}

if($Hours >= 12){
	$('.eat').text('中午吃什么？')
}

if($Hours >= 17){
	$('.eat').text('晚上吃什么？')
}

if($Hours >= 22){
	$('.eat').text('宵夜吃什么？')
}


// 菜单相关

var $arry = new Array();//总菜单
$arry = ['过桥米线','披萨','肯德基','麦当劳','紫菜包饭','韩国烤肉','石锅拌饭','牛肉饭','烤肉自助','寿司','饺子','小笼包','皮蛋瘦肉粥','豆花肠粉','火锅','麻辣烫','丝娃娃','麻辣香锅','食堂','冒菜','豆花','章鱼烧','汉堡王','赛百味','烧烤','川菜','酸辣粉','杂粮煎饼','重庆小面','成都担担面','芝士焗饭','鸡排','花甲粉丝','韩式炸鸡','辟谷','沙拉','牛排','烤鸭','排骨饭','港式茶餐厅'];


// 获取数组的长度用于输出菜单
var $ar = $arry.length;


// 颜色数组
var $color = new Array();
$color = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']



// 菜单快速变换
var int1 = null;
var timer1 = 50;

// 定义函数调用 move() 函数，用于实现菜单文字变换及颜色的随机变换
function Start(){
	int1 = setInterval('move()',timer1)
}

// 用于停止调用 move() 函数。
function Stop(){
	clearInterval(int1);
}

function move(){
	// 菜单变换
	$('.text').text($arry[parseInt(Math.random()*$ar)])

	// 颜色变换
	$('.text').css('color','#'+$color[parseInt(Math.random()*16)]+$color[parseInt(Math.random()*16)]+$color[parseInt(Math.random()*16)]+$color[parseInt(Math.random()*16)]+$color[parseInt(Math.random()*16)]+$color[parseInt(Math.random()*16)])
}


// 增加文字
var int2 = null;
var timer2 = 50;


function add() {
	int2 = setInterval('addtext()',timer2)
}

function addStop(){
	clearInterval(int2)
	// 停止之后使Z的值为0;
	return z = 0;
}

// z是当前背景文字的数量。每循环
function addtext(){
	$('.back').append("<div class='abc'>"+$arry[parseInt(Math.random()*$ar)]+"</div>")
	// 如果文字数量大于菜单的两倍，则自动停止增加文字
	z++;
	if (z >= ($ar*2)) {
		clearInterval(int2)
	}

// 为每一个文字绑定动画
	$('.abc').each(function(){
		$(this).css('animation','mymove 3s infinite');
		
	})
}

// 改变文字位置
// 已经整合到下一个函数中
// 
// 
// var int3 = null;
// var timer3 = 3000;
// function tim3(){
// 	int3 = setTimeout('changePosi()',timer3)

// }

// function addStop3(){
// 	ClearTimeout(int3)
// }

// function changePosi(){
// 	$('.abc').each(function(){
// 		$(this).css('left',parseInt(Math.random()*$ar*30));
// 		$(this).css('top',parseInt(Math.random()*$ar*30));
// 	})

// }


// 改变文字透明度 以及 改变文字的位置
var int4 = null;
var int5 = null;

var timer4 = 10;

function tim4(){
	int4 = setInterval('changePosi()',timer4)
	clearInterval(int5);
}

function tim5(){
	int5 = setInterval('setOpacity()',timer4)
	clearInterval(int4);
}


// 清楚定时器，int5和int2

function clearTim(){
	// clearInterval(int4);
	$('.back').empty();
	clearInterval(int5);
	clearInterval(int2)
}

// 改变背景文字的位置。
function changePosi(){
	$('.abc').each(function(){
		var $opacity = $(this).css('opacity');
		if ($opacity <= 0.02) {
			$(this).css('left',parseInt(Math.random()*$ar*45));
			$(this).css('top',parseInt(Math.random()*$ar*45));
		}
	})

}

// 获取背景文字的透明度，当透明度小于0.02时，移除这个元素
function setOpacity(){
	$('.abc').each(function(){
		var $opacity = $(this).css('opacity');
		if ($opacity <= 0.02) {
			$(this).remove();
		}
	})

}


var i =0;
var j =0;
var z= 0;


$('.start').click(function(){
	// i值用于判断当前的点击状态，
	i++;

	// j值用于统计点击了多少次。
	j++;


	var $a = $('.eat').html();

	// 每次点击都会使i的值自增1，当i的值为1的时候，就执行菜单变换，增加背景文字，改变背景文字
	if (i==1) {
		$(".start").text('吃这个~');
		// 开始菜单变换
		Start();

		// 开始增加文字
		add();

		// 开始变换位置
		tim4();

		if($a == '早上吃什么？'){
			$('.eat').text('早上吃这个。');
		}
		if($a == '中午吃什么？'){
			$('.eat').text('中午吃这个。');
		}
		if($a == '晚上吃什么？'){
			$('.eat').text('晚上吃这个。');
		}
		if($a == '宵夜吃什么？'){
			$('.eat').text('宵夜吃这个。');
		}
	}else{
		// 当i的值为其他的时候，重置i的值为0，重新进行循环判断按钮的点击状态
		$(".start").text('换一个');
		i=0;

		// 停止菜单变换
		Stop();

		// 增加文字停止
		addStop();

		// 设置文字透明度
		tim5();

		// 设定.eat的内容
		if($Hours >= 7){
			$('.eat').text('早上吃什么？')
		}

		if($Hours >= 12){
			$('.eat').text('中午吃什么？')
		}

		if($Hours >= 17){
			$('.eat').text('晚上吃什么？')
		}

		if($Hours >= 22){
			$('.eat').text('宵夜吃什么？')
		}	

	}

	// 当点击次数超过7次，弹出提示，按键消失
	if( j>= 7 ){
		Stop();
		$('.start').hide();
		alert('这么难将就，还吃什么吃，别吃了。')
		clearTim();
	}

})



