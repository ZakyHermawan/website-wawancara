var counter = 0;
function fungsi(){
    let elemen = document.getElementById("main")
    counter = counter+1
    console.log(counter)
    let arr = ["#228B22", "#f3f3f3", "#87ceeb", "#cabeca", "#befded"]

    elemen.style.background = arr[counter%(arr.length)]
    
}
