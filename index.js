
const electron = require('electron');
const {app, BrowserWindow} = electron;


let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({width:1536, height:864, webPreferences: {
            nodeIntegration: true
    }})
    mainWindow.loadURL(`file://${__dirname}/index.html`)

    exports.openWindow = () => {
        let win = new BrowserWindow({width:1536, height:864, webPreferences: {
            nodeIntegration: true
        }})
        win.loadURL(`file://${__dirname}/` + filename + `.html`)
    }
})

function signUp (){
    var userEmail = document.getElementById("email2").value;
    var userPassword = document.getElementById("password").value;

    /*firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error){
        if(error != null){
            console.log(error.message);
            return;
        }
        alert("User Created!");
    })
}*/
}

function signIn (){
    signInBtn.addEventListener("click", function(){
        var userEmail = document.getElementById("email2").value;
        var userPassword = document.getElementById("password").value;
    })
}

