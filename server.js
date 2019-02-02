	
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
 
io.on('connection', (socket) => {
  
  socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.username, event: 'left'});   
  });
 
  socket.on('set-username', (username) => {
    socket.username = username;
    io.emit('users-changed', {user: username, event: 'joined'});    
  });
  
  socket.on('add-message', (message) => {
    io.emit('message', {text: message.text, from: socket.username, created: new Date()});    
  });
});
 
var port = process.env.PORT || 3000;
 
http.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});