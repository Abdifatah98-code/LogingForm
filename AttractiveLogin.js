let Inner_box =document.querySelector("#card");


let Open_btn_register=document.querySelector("#btn_loogin");

let Open_btn_loogin=document.querySelector("#btn_register");

Open_btn_loogin.onclick=()=>{
  
    Inner_box.style.transform="rotateY(0deg)";
}

Open_btn_register.onclick=()=>{
    Inner_box.style.transform="rotateY(-180deg)";
}



