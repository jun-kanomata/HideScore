const button = document.createElement('button');
button.id = 'HideScore';
button.innerHTML = 'show score';
document.body.appendChild(button);
button.addEventListener('click',()=>{
  if(document.body.classList.contains('show-score')){
    document.body.classList.remove('show-score');
    button.innerHTML = 'show score';
  }else{
    document.body.classList.add('show-score');
    button.innerHTML = 'hide score';
  }
})