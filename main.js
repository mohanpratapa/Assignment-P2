




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






