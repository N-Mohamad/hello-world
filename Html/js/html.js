const nom = document.getElementById('nom')
const prenom = document.getElementById('prénom')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = []
    if (nom.value === '' || nom.value == null){
        messages.push('votre nom')
}
if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
}
})


















































//function validate() {
 //   var mail = document.getElementById("email").value;
   // var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    //if (regx.email(mail)){
      //  alert("You have provided a valid Email ID")
        //return true;
    //}
    //else {
      //  alert ("sorry! incorrect Email ID")
        //return false;

 //   }
//}