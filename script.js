let download = document.querySelector('.download-btn')

let percent = document.querySelector('.view2-elem h4')

let load = document.querySelector('.load')

download.addEventListener('click',function(){
    let grow =0
    var int = setInterval(function(){ 
        grow++
        load.style.width = grow + '%';
        percent.innerHTML = grow + '%';
    },50)

    setTimeout(function(){
        clearInterval(int)
        percent.style.opacity = 0.75
        download.style.opacity = 0.75;
        download.innerHTML = "Downloaded"
    },5000)
})