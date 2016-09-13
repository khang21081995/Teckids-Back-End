/**
 * New node file
 */
var fileHelper = require("./fileHelper");
var Static = require("./Statistic");
//fileHelper.readFile("./data.txt", function(data){
//  console.log(data);
//});

// Static.output("data.txt","output.txt");


$.get( "index.html", function( data ) {
  alert( "Data Loaded: " + data );
});

$(document).ready(function() {
    $('body').on('click','.btnSubmit',function(){
        alert('Button clicked!!!');
    });
}
