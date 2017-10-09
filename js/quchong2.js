var arr = ['6','5','4','8','8','2','2','8'];

function quchong2(arr){
    var newarr = [];
    for(var i=0;i<arr.length;i++){
        if(newarr.indexOf(arr[i]) == -1){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(quchong2(arr));