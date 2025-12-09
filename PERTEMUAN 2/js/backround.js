var colors = ["#E2852E","#F5C857" ,"#FFEE91", "#ABE0F0"];
var index = 0;
function ubahBackground(){
    document.body.style.backgroundColor = colors[index];
    index++;

    if(index>= colors.length){
        index =0;
    }
}