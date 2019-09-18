var leftData = [
{
    nm:'Cards', listUrl:'./index.html', ic: 'fa fa-book fa-2x' ,ids:'my-course'
},{
    nm:'My Courses', listUrl:'./testPage.html', ic: 'fa fa-bars fa-2x' ,ids:'my-course'
},{
    nm:'Pics-style', listUrl:'./pic.html', ic: 'fa fa-comment-o fa-2x' ,ids:'my-course'
},{
    nm:'Messages', listUrl:'a', ic: 'fa fa-envelope-o fa-2x' ,ids:'my-course'
},{
    nm:'Need Help?', listUrl:'a', ic: 'fa fa-question fa-2x' ,ids:'my-course'
},{
    nm:'Tutorials', listUrl:'a', ic: 'fa fa-pencil fa-2x' ,ids:'my-course'
}];

// var list='';
// for (var i=0; i<leftData.length; i++){
//     list = list + "<div><i class='"+leftData[i].ic+"'></i><a href='"+leftData[i].listUrl+"' id='"+leftData[i].ids+"' >"+leftData[i].nm+"</a></div><hr>"
// }
var list1 = '';
var listMap = leftData.map((cont)=>{
    list1 = list1 + `<a class="butleft" href="${cont.listUrl}" id='${cont.ids}' ><div><i class='${cont.ic}'><span class='text-fam'>  ${cont.nm}</span></i><div></a><hr>`
})
// console.log(document.getElementById("left-list"));
document.getElementById("left-list").innerHTML = list1;



// var car = [{type:"Fiat", url:"https//google.com", color:"white"}];
// ls = ["hi","by"]
// var cat = ""
// for (var i=0; i<car.length; i++){
//    cat = cat + "<div><a href='"+car[i].url+"'>"+car[i].color+"</a></div>";
// }
// console.log(document.getElementById("demo"));
// // Display some data from the object:
// document.getElementById("demo").innerHTML =  cat;