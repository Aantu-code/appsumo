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

/*********END-FIRST-SECTION-JS*********/


/******START-SECOUND-SECTION-JS******/

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