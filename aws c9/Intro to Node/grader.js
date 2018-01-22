function average(arr){
    var ret = 0;
    for(var i = 0; i < arr.length; i++){
        ret += arr[i];
    }
    return Math.round(ret/arr.length);
}

var scores = [90,95,69,03,30,45,67];
var output = average(scores);
console.log(output);