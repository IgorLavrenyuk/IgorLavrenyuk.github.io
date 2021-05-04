window.addEventListener('load', ()=> {
const allBtns = document.querySelectorAll('.main-details-btn > a')

const title = document.querySelector('.modal_title')
const text = document.querySelector('.modal_text')

allBtns.forEach((btn) => btn.addEventListener('click', (e)=> {
const atr = e.target.getAttribute('data-keyWord')

    if(atr) {

    fetch(`https://courrs-work.herokuapp.com/?key=${atr}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data,'data777');
    title.innerHTML = data[0].title
    text.innerHTML = data[0].text
  });
    }

}))

})