let btn=document.querySelector("#generate");

btn.addEventListener("click",newImg);

let url="https://dog.ceo/api/breeds/image/random"

// using axios

async function  newImg(){
    let res= await axios(url);
    let dogImg=document.querySelector("#dogImg");
    dogImg.setAttribute("src",`${res.data.message}`)
}

//using fetch

// async function  newImg(){
//     let res= await fetch(url);
//     let data=await res.json();
//     let dogImg=document.querySelector("#dogImg");
//     dogImg.setAttribute("src",`${data.message}`)
// }

