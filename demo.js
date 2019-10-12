
function multiplication (x)
{ 
  return x*72
};



// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up




document.querySelector('#MyAppcalculate').addEventListener('click',function(){
  console.log("in func")
    const i = parseInt(document.querySelector('#firstNumber').value)
    document.querySelector('#inr').innerHTML = "dollers in rupees "+multiplication(i)
})
const updateWithJoke = async (event) => {
    document.querySelector('#result').innerHTML = ''
    const url = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'
    const response = await fetch(url)
    const obj = await response.json()
    const joke = obj.value.joke || 'No joke for you.'
    document.querySelector('#result').innerHTML = joke
  }
  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
  })