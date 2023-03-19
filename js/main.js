let imgchange = document.getElementById("img-change")
const btn_darkmode = document.getElementById('btn-darkmode');

btn_darkmode.addEventListener('click', function(){
    document.body.classList.toggle('dark');    
})

function dchange(){
    imgchange.src = "./img/avatar-img-dark.jpg"
}

function change(){
    imgchange.src = "./avatar-img.jpg"
}

btn_darkmode.addEventListener('click', function(){
    if( document.body.classList.contains('dark') ){
        dchange()}else{change()} 
})


