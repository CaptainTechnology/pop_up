
const popup=document.getElementById("popup");
const submit=document.getElementById("submit");
const ok=document.getElementById("ok");



function openpopup(){
    // submit.style.display="none";
    // popup.style.display="inline-block";
    popup.classList.add("open_popup");
}

function closepopup(){
    // popup.style.display="none";
    // submit.style.display="inline-block";
    popup.classList.remove("open_popup");

}