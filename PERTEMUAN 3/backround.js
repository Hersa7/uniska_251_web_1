var colors = ["#F5F7FA","#F2F2F2" ,"#EAF2FF", "#FFF4F7"];
var index = 0;
function ubahBackground(){
    document.body.style.backgroundColor = colors[index];
    index++;

    if(index>= colors.length){
        index =0;
    }
}