// JavaScript Document

// get absolute location to screen   ==> p = getPos(obj)  ==> p.left/p.top
	function getPos(obj) {
		
		var pos = {left:0, top:0};
		
		while (obj) {
			pos.left += obj.offsetLeft;
			pos.top += obj.offsetTop;
			obj = obj.offsetParent;
		}
		
		return pos;
		
	}

//	return a new Json that the common element in newJson is replace by newJson's
	function changeDate(Json,newJson){
		var Json1 = new Object()
		
		for(var attr in Json){
			Json1[attr] = Json[attr];
		}
		
		for(var attr in newJson){
			if(typeof newJson[attr] == "object"){
				Json1[attr] = changeDate(Json1[attr],newJson[attr]);
			}else{
				Json1[attr] = newJson[attr];
			}
		}
		
		return Json1;
		
	}


//take apart val to number and unit

function apartNumUnit(obj,NumOrU){
	if(typeof obj == "number"){
		obj = obj + "px"
	}
	if(NumOrU == "num"){
		return parseInt(obj);
	}else if(NumOrU == "unit"){
		var disLNum = parseInt(obj);
		return obj.replace(disLNum.valueOf(),"");
	};
}
