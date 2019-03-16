var socket = new WebSocket("WSS://"+location.host+"/chatWS")
var submit = document.getElementById("SubmitButton");
var input = document.getElementById("inputText");
var messagesHistory = [];

 var user = "";

//When the user hits enter, send thing to all
function submitText(){
  if(document.getElementById("inputText").value.trim() != ""){
    var username = getUrlParameter("username");
    console.log(document.getElementById("inputText").value);
    socket.send(username + ": " + document.getElementById("inputText").value);
    document.getElementById("inputText").value = "";
    document.getElementById("inputText").focus();
  }
}



function addToChat(thingToAdd){
  document.getElementById("messages").innerHTML= document.getElementById("messages").innerHTML+"<br />"+thingToAdd;
    messagesHistory.push(document.getElementById("messages").innerHTML+"<br />"+username+": "+thingToAdd);
    

}
socket.addEventListener('open', function (event) {
});




// Listen to messages 
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
    addToChat(event.data);
});

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function toChat(){
  window.location = "chat.html";
}

function timer(startTime){
  var currTime = new Date().getTime();
  distance = startTime-currTime;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60).toString());
  var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();
  if(seconds.length < 2){
    seconds += "0"
  }
  if(minutes.length < 2){
    minutes += "0"
  }
  document.body.getElementById('timerButton').value = "00" + ":" + minutes + ":" + seconds;
  }

function uniKeyCode(event) {
  var key = event.which || event.keyCode;
  if (keyCode==13) {
    submitText();
  }
}