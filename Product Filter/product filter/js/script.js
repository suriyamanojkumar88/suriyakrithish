let buttons=document.querySelectorAll('.btn');
let boxes=document.querySelectorAll('.box');
let searchBox=document.querySelector('#search');

// search product by Textbox
searchBox.addEventListener('keyup',(e)=>{
searchText=e.target.value.toLowerCase().trim();

boxes.forEach((box)=>{
    let data=box.dataset.item;
    if(data.includes(searchText)){
      box.style.display='block';  
    }else{
      box.style.display='none';
    }
});
buttons.forEach((button)=>{
    button.classList.remove('btn-clicked')
});
buttons[0].classList.add('btn-clicked')
});

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        let btnfilter=e.target.dataset.filter;
        boxes.forEach((box=>{
           if(btnfilter=='all'){
             box.style.display='block';
           }else{
              let boxfilter=box.dataset.item;
              if(btnfilter==boxfilter){
                box.style.display='block';
              }else{
                box.style.display='none';
              }
           } 
        }))
    })
});

function setActiveBtn(e){
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked')
    });
    e.target.classList.add('btn-clicked');
}