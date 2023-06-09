var click_check = false;
function ul_visible() {
  if (click_check == false) {
    document.getElementById("hidden_ul").style.display = "block";
    document.getElementById("product_turn").style.transform = "rotate(180deg)";
    document.getElementById("product_turn").style.marginTop = "10px";

    click_check = true;
  } else {
    document.getElementById("hidden_ul").style.display = "none";
    document.getElementById("product_turn").style.transform = "rotate(0deg)";
    document.getElementById("hidden_ul").style.display = "none";
    document.getElementById("product_turn").style.marginTop = "0px";
    click_check = false;
  }
}
