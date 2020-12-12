function shake() {

    var ball = document.getElementById("ball")
    var messageText = document.getElementById("message")


    if (messageText != null) {
        messageText.parentNode.removeChild(messageText);
    }

    ball.classList.add("shake");

    setTimeout(function() { ball.classList.remove("shake"); }, 1500);

    setTimeout(function() { getFortune(); }, 1500);
}

function getFortune() {
    var userQues = document.getElementById("userques");

    var fortunes = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes -- definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes, Signs point to yes', 'Reply hazy', 'try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Dont count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']


    var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    var parent = document.getElementById("fortune");
    parent.innerHTML = "";
    var newMessage = document.createElement("div");
    newMessage.setAttribute('id', "message");
    newMessage.innerHTML = "\"" + fortune + "\"";
    parent.appendChild(newMessage);
}

function usertake() {
    var name = document.getElementById("user").value;
    localStorage.setItem('name', name);
    if (name != "") {
        var parent = document.getElementById("fortune");
        parent.innerHTML = "";
        var newMessage = document.createElement("div");
        newMessage.setAttribute('id', "message");
        newMessage.innerHTML = "\"" + "Hello! " + name + "\"";
        parent.appendChild(newMessage);
        var button = document.getElementById("fortune-btn");
        console.log(button)
        button.style.display = "block";

    } else {
        var parent = document.getElementById("fortune");
        parent.style.marginTop = 20;
        parent.innerHTML = "Hello Almighty, It will be easy for me if you will enter your name.";
        var button = document.getElementById("fortune-btn");
        console.log(button)
        button.style.display = "none";
    }
}

function load() {
    document.getElementById("userhead").innerHTML = "Enter Your Question Mr." + localStorage.getItem('name');
}

function change() {
    var head = document.getElementById("heading");
    head.innerHTML = "Input Your Ques Here Mr." + localStorage.getItem('name');
    var getBtn = document.getElementById("get");
    getBtn.onclick = change();
}