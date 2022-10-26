const texts = ['Burger','Pizza','Desserts','Pasta'];

let count = 0;
let index = 0;
let currentText = 0;
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 400);
})();



// function loader(){
//     document.querySelector('.loader-container').classList.add('fade-out');
//   }
  
//   function fadeOut(){
//     setInterval(loader, 3000);
//   }
  
//   window.onload = fadeOut();


// fetch('https://ig-food-menus.herokuapp.com/pizzas').then((data) =>{
//           return data.json();
//         }).then((completedata)=>{
//           let data1="";
//           completedata.map((values)=>{
//             data1+=`<div class="card" style="width: 200px">
//           <img src=${values.img} class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">${values.name}</h5>
//             <p class="card-text">${values.dsc}</p>
//             <a href="#" class="btn btn-primary">${values.price}</a>
//           </div>
//         </div> `
//           });
//           document.getElementById('show').innerHTML=data1;
//         }).catch((err)=>{
//           console.log(err);
//         });

