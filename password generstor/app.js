const password = document.getElementById('password')
const length = document.getElementById('length')

const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbol = document.getElementById('symbols')


const genratebtn = document.getElementById('generateBtn')
const copybtn = document.getElementById('copybtn')
const message = document.getElementById('message')



function generatePassword(){
    
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let number = "0123456789"
    let special = "!@#$%&*"

    let characters = ""
     
        if(uppercase.checked){
            characters += upper
        }
        if(lowercase.checked){
            characters += lower
        }
        if(numbers.checked){
          characters += number
        }
        if(symbol.checked){
            characters += special
        }

        if(characters.length === 0 ){
            message.textContent = "Please select at list one option"
            password.value = ""
            return;
        }

        let result = ""

        for(let i =0 ;i<length.value;i++){


            let randomIndex = Math.floor(
            Math.random()*  characters.length)



             result += characters[randomIndex]
         
         
        }

        password.value = result;
        message.textContent = ""

        // console.log('hello')      
 }

        genratebtn.addEventListener('click',function(){
            generatePassword()
            alert("Password Generated !")
        })
          

        copybtn.addEventListener('click',function(){
            if (password.value === ""){
                alert("Generte a password first")
                // message.textContent="Generte a password first"
                return;
            }

             navigator.clipboard.writeText(password.value);

             alert("Password copied!")

            //  message.textContent = "Password copied!";
        })
       