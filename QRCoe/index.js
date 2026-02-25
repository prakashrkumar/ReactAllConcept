

document.querySelector("#qr-generate").addEventListener("click",handleQRCode)
function handleQRCode(){
   const input=document.querySelector("#inputText").value;
   if(!input){
    alert("please enter text or url");
    return;
   }
   const code=document.querySelector("#code");
   new QRious({
    element:code,
    value:input,

})
code.style.display="block";
}