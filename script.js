var iststus = document.querySelector("h5")
var btn = document.querySelector("#add")

var check = 0;

btn.addEventListener("click",function(){
    if(check == 0){
    iststus.innerHTML = "Friends"
    iststus.style.color = "green"
    btn.innerHTML = "Remove"
    check = 1
    }else{
        iststus.innerHTML = "Stranger"
        iststus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
})

