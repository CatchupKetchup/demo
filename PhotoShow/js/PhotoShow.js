// JavaScript Document
function photoShow(obj,cusDate,endFn){	
	//delay:表示同一层图片动作间隔时间长度、singledelay：表示行列动作间的间隔时间长度、rotate：true表示偏转角度变为0，false表示初始状态
	var oldDate = {distanceL:0,distanceT:0,beginL:obj.children().css("left"),beginT:obj.children().css("top"),delay:0,singledelay:0,rotate:true,mode:true};
	var dateShow = changeDate(oldDate,cusDate.dateShow);
	var dateShow2 = changeDate(oldDate,cusDate.dateShow2);
	var dateClose = changeDate(oldDate,cusDate.dateClose);
	var dateClose2 = changeDate(oldDate,cusDate.dateClose2);
	
	dateClose.rotate = false
	dateClose2.rotate = false

	for(var i = 0; i<obj.children().length; i++){
		obj.children().eq(i).attr("rotate",obj.children().eq(i).children().eq(j).css("transform"));
		for(var j = 0; j<obj.children().eq(i).children().length; j++){
			obj.children().eq(i).children().eq(j).attr("rotate",obj.children().eq(i).children().eq(j).css("transform"));
		};
	};

	
	obj.get(0).onOff = true;
	obj.click(function(){
		if(this.onOff){
			this.onOff = false;
			Phrase(obj,dateShow2);
			clearTimeout(obj.timer)
			obj.timer = setTimeout(function(){
				for(var i=0; i<obj.children().length; i++){
					Phrase(obj.children().eq(i),dateShow);
				};
			},dateShow2.singledelay)
		}else{
			this.onOff = true;
			Phrase(obj,dateClose2);
			clearTimeout(obj.timer)
			obj.timer = setTimeout(function(){
				for(var i=0; i<obj.children().length; i++){
					Phrase(obj.children().eq(i),dateClose);
				};
			},dateClose2.singledelay)
		}
	})
}

function Phrase(obj,date){
	var picnum = obj.children().length/obj.length;
	var target = obj.children().eq(obj.children().length-1);
	var dir = 1
	move(target,0);
	function move(target,delaytime){
		clearTimeout(target.get(0).timer)
		target.get(0).timer = setTimeout(function(){
			if(date.mode){
				var n = target.prevAll().length
			}else{
				var n = parseInt(target.prevAll().length/2+0.5)
				dir = - dir
			}
			target.css("left",dir*n*apartNumUnit(date.distanceL,"num")+apartNumUnit(date.beginL,"num")+apartNumUnit(date.distanceL,"unit"));
			target.css("top",dir*n*apartNumUnit(date.distanceT,"num")+apartNumUnit(date.beginT,"num")+apartNumUnit(date.distanceT,"unit"));
			if(date.rotate){
				target.css("transform","rotate(0deg)");
			}else{
				target.css("transform",target.attr("rotate"));
			}
			if(target.prev().length){
				target = target.prev();
				if(target.prev().length){
					move(target,date.delay)
				}else{
					move(target,0)
				};
			};
		},delaytime)
	}
}
