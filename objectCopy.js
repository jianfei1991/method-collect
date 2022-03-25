var obj = {
	a:1,
	b:{
		b1:1,
		b2:[1,2,3],
		b3:null,
		b4:function (a){
			return '"'+a+'"';
		}
	},
	c:[function(a,b){return a+b},
	function(a,b){return a-b},
	function(a,b){return a*b}]
}