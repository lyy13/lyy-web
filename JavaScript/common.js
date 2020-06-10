function my$(id) {
	return document.getElementById(id);
}

// 处理浏览器兼容性问题
// 获取第一个子元素
function getFirstElementChild(element){
	var node,nodes=element.childNodes,i=0;
	while(node=nodes[i++]){
		if (node.nodeType===1) {
			return node;
		}
	}
	return null;
}

// 获取下一个兄弟元素
function getNextElementSibling(element){
	var el =element;
	while (el=el.nextSibling){
		if(el.nodeType===1){
			return el;
		}
	}
	return null;
}

// addEvenntListener
function addEventListener(element,eventName,fn){
	if (element.addEventListener) {
		element.addEventListener(eventName,fn);
	}else if(element.attachEvent){
		element.attachEvent('on'+eventName,fn);
	}else{
		element['on'+eventName]=fn;
	}
}

// 处理移除事件的兼容性问题
function removeEventListener(element,eventName,fn){
	if (element.removeEventListener) {
		element.removeEventListener(eventName,fn);
	}else if(element.detachEvent){
		element.detachEvent('on'+eventName,fn);
	}else{
		element['on'+eventName]=null;
	}
}


// 获取页面滚动距离
function getScroll(){
	var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	return {
		scrollLeft: scrollLeft,
		scrollTop: scrollTop
	}
}


// 获取鼠标在页面中的位置
function getPage(e){
	var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
	var pageY = e.pageY || e.clientY + getScroll().scrollTop;
	return {
		pageX: pageX,
		pageY: pageY
	}
}