/**********FIRST-SECTION-JS**********/

/***********INPTU-TEXT-CHANGE******************* */

let file = document.getElementById('upload');
file.oninput = () =>{
    let filename = file.files[0].name;
    document.querySelector('label').innerText = filename;
  
}

/*************POPUP-JS******************/

document.getElementById('open-popup-btn').addEventListener('click',function(){document.getElementsByClassName('popup')[0].classList.add('active');
});
// document.getElementById('dismiss-popup-btn').addEventListener('click',function(){document.getElementsByClassName('popup')[0].classList.remove('active');
// });

/************PROGRESS-BAR-JS********** */
const progress = document.querySelector('.progress-bar');
setTimeout(()=>{
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;
},100)
    


/*********END-FIRST-SECTION-JS*********/


/******START-SECOUND-SECTION-JS******/
document.getElementById('open-popup-btnn').addEventListener('click',function(){document.getElementsByClassName('popup-two')[0].classList.add('active');
});
const progresss = document.querySelector('.progress-bar-two');
setTimeout(()=>{
    progresss.style.width = progresss.getAttribute('data-done') + '%';
    progresss.style.opacity = 1;
},100)

/****************NUMBER-INPUT******************/

$(document).ready(function(){
    $('.btn').on('click', function(){
var btn = $(this).closest('.spinner').find('input').val();
if(btn == 10){
    $(this).closest('.spinner').find('input').val('10');
}else{
  var btnVal = ++btn ;
  $(this).closest('.spinner').find('input').val(btnVal);
}
    });
})

/*********END-SECOUND-SECTION-JS*********/

/******START-THIRD--SECTION-JS******/

document.getElementById('open-popup-btnn').addEventListener('click',function(){document.getElementsByClassName('popupp')[0].classList.add('activee');
});
/************PROGRESS-BAR-JS********** */
// const progresss = document.querySelector('.progress-barr');
// setTimeout(()=>{
//     progresss.style.width = progresss.getAttribute('data-done') + '%';
//     progresss.style.opacity = 1;
// },1500)