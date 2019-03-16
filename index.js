var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var clientList = [];
var startTime = new Date().getTime();
socket.emit(startTime);

app.ws('/chatWS', function(ws, req) {
  ws.on('message', function(msg) {
    for(var i = 0;i<clientList.length;i++){
      try{
      clientList[i].send(msg);
      console.log(req);
      }
      catch(e){
        console.log(e);
      }
    }
  });
  clientList.push(ws);
  ws.on('close',function(){
    for(var i=0;i<clientList.length;i++){
      if (clientList[i] == ws) {
        clientList.splice(i, 1); 
      }
    }
  })
});

app.use(express.static("static"))
app.listen(3000)
