{
  let tab = document.getElementsByClassName('tab');
  let i 
  for (i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function(){
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('show')
    });
  }
}
