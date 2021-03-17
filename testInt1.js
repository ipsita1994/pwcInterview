// let valByKey = ["a","c"];    [get value from key]
// let obj = [{"a": 1,"b": 2,"c": 3},{"a": 4,"b": 5,"c": 6}];  [Request Object]
// Expected Result  =  [{"a":1,"b":2,"c":3,"d":[1,3]},{"a":4,"b":5,"c":6,"d":[4,6]}]
 
// Description: 
// 1. create a typescript file and write a function.
// create a new field "d" collect value from (a,c) key push into d(new key) as you can see my expected result.
//  if you change the key name in the" valByKey" value should be changed in the expected result. also, we can add multiple.
var valByKeys,valObj,expRes, newPushData = [];
var getAr =[];
 function getKey(...args){
    valByKeys = args;
 }
 
function getObj(obj){
    valObj= obj;
    for( let i=0;i<valObj.length;i++){
        for(let j=0; j<valByKeys.length; j++){
            getAr.push( valObj[i][valByKeys[j]]);
        }
        valObj[i].d=getAr;
        getAr=[];
    }
    console.log(valObj);
}
 
 let obj1={
    a: 1,
    b:2,
    c:3
 };
 let obj2={
    a: 4,
    b:5,
    c:6
 };
 let arrObj=[];
 arrObj.push(obj1,obj2);
 getKey('a','c');
 getObj(arrObj);

