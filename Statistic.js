/**
 * New node file
 */

var fileHelper = require("./fileHelper");

module.exports = {
		output: function(fileIn,fileOut){
			var arr=[];
			var arrMax=[];

			fileHelper.readFile(fileIn, function(data) {
				arr = data;
				if(arr.length == 0) {
					console.log("Rong");
					return;
				}
				var max = parseFloat(data[0].split(";")[2].trim());
				for (var i = 0; i < arr.length; i++) {
					var temp =  parseFloat(data[i].split(";")[2].trim());
					console.log(max+":"+temp+"\n");
					if(temp>=max){
						max = temp;
					}
				}
				//console.log(max);
				for(var i = 0;i<arr.length;i++){
					if(arr[i].split(";")[2]==max){
						arrMax.push(arr[i]);
						console.log(arr[i]);
					}
				}
				fileHelper.writeFile(fileOut, arrMax, false);

			});

		},

}
