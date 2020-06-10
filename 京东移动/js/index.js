window.onload=function(){
	// 头部搜索块js
	var banner = document.querySelector(".jd-banner");
	var bannerheight = banner.offsetHeight;
	var search=document.querySelector(".jd-search");
	// console.log(search);
	window.onscroll=function(){
		var offsettop=document.body.scrollTop;
 		console.log(offsettop);
        var opacity=0;
		opacity=offsettop/bannerheight;
 		search.style.backgroundColor="rgba(233,35,34,"+opacity+")";
	}
}