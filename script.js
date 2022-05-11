
function Line_group1_move(){
    window.open("https://jason810496.codes/blog/", '_blank').focus();
}


function Line_group2_move(){
    window.open("https://github.com/jason810496", '_blank').focus();
}



function Line_group3_move(){

    window.open("https://github.com/jason810496", '_blank').focus();
}

var block_1 = document.getElementById("b1");
// block_1.addEventListener("mouseover",Line_group1_animation_in);
// block_1.addEventListener("mouseleave",Line_group1_animation_out);
block_1.addEventListener("click",Line_group1_move);

var block_2 = document.getElementById("b2");
// block_2.addEventListener("mouseover",Line_group2_animation_in);
// block_2.addEventListener("mouseleave",Line_group2_animation_out);
block_2.addEventListener("click",Line_group2_move);

var block_3 = document.getElementById("b3");
// block_3.addEventListener("mouseover",Line_group3_animation_in);
// block_3.addEventListener("mouseleave",Line_group3_animation_out);
block_3.addEventListener("click",Line_group3_move);