const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEl1 = document.getElementById("generated-password1")
let passwordEl2 = document.getElementById("generated-password2")



function makePassword(passwordLength) {

        let password="";
        for (let index = 0; index < passwordLength; index++) {
            password += characters[randomNumber()];
        }
        return password;

}


function randomNumber() {

    let ourNumber = Math.floor(Math.random() * characters.length)
    return ourNumber 
    
}

function generatePassword() {

    const defaultLength = 15;

    const fieldValue = document.getElementById("passwordLength").value;
    const passwordLength = fieldValue === "" ? defaultLength : fieldValue;

    passwordEl1.textContent = makePassword(passwordLength)
    passwordEl2.textContent = makePassword(passwordLength)

}

function copyDivToClipboard(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
   }