//sticky header
window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 160){
        document.getElementById('main').setAttribute('class', 'sticky');
    }
    else{
        document.getElementById('main').removeAttribute('class', 'sticky');
    }
});


//scroll effect
// function scrolling(){
//     window.scrollTo(0, 650);
// }
// const serve = document.getElementById('serve');
// serve.addEventListener('click', scrolling);