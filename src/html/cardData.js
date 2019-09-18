let cardData = [
    {
        info:'1', imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpda1qXuToP8yfDlqiK95vGCNvyqiSq19dTgMTBSvtZqeOz-k'
    },{
        info:'2', imgUrl:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg'
    },{
        info:'3', imgUrl:'https://images.pexels.com/photos/132472/pexels-photo-132472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },{
        info:'4', imgUrl:'https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },{
        info:'5', imgUrl:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg'
    },{
        info:'6', imgUrl:'https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },{
        info:'7', imgUrl:'https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492__340.jpg'
    }
];

var cardz = ''; 
var cr = cardData.map((cd)=>{
    cardz = cardz + `<div class="card1" ><img class='img-set' src='${cd.imgUrl}' alt='${cd.info}' /><h5 class='text-style' >${cd.info}</h5></div>`
})
document.getElementById('cardz12').innerHTML = cardz;