const year = '2017'; 
const month = '09'; 
const day = '21'; 
const str = render('year−{month}-${day}')({year,month,day}); 
console.log(str)//输出2017-09-21

function render(str){
	return function (obj){
		str = str.replace('year',obj.year)
		str = str.replace('{month}',obj.month)
		str = str.replace('${day}',obj.day)
		return str
	}
}