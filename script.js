let str = ""
let buttons = document.querySelectorAll(".btn")  //select all buttons
Array.from(buttons).forEach(button => {
  //creating array of buttons
  button.addEventListener('click', (e) => {      // for all button, adding click event
    // console.log(e.target)                    //e.target is the button that was clicked and e is the event object
    if (e.target.innerHTML == '=') {            //e.target gives the entire html of e and .innerHTMl gives the html 
      try {
        str = eval(str) ////eval is a funciton that evaluates the string and returns the res
      }
      catch (err) {
        str = "ERROR"
        document.querySelector('input').value = str
      }
      document.querySelector('input').value = str  //changing the value in input to str
    }
    else if (e.target.innerHTML == 'AC') {
      str = ""
      document.querySelector('input').value = str
    }
    else {
      str += e.target.innerHTML                  //concatenating the html of e.target to str
      document.querySelector('input').value = str
    }
  })
})