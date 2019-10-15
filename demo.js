
function multiplication (x)
{ 
  return x*72
};



// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up



localStorage.setItem('number',0);
document.querySelector('#MyAppcalculate').addEventListener('click',function(){
  console.log("in func")
    const i = parseInt(document.querySelector('#firstNumber').value)
    document.querySelector('#inr').innerHTML = "dollers in rupees "+multiplication(i)
})
const updateWithJoke = async (event) => {
  localStorage.setItem('number',parseInt(localStorage.getItem('number'))+1)
    document.querySelector('#result').innerHTML = ''
    const url = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'
    const response = await fetch(url)
    const obj = await response.json()
    const joke = obj.value.joke || 'No joke for you.'
    document.querySelector('#result').innerHTML = joke
    document.querySelector('#local').innerHTML = "cont for number of jokes ="+localStorage.getItem('number')
  }
  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
  })