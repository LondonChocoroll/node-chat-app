var socket = io(); //critical for server requests

socket.on('connect', function(){
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Andrew',
    text: 'yea that is ok'
  });
});

socket.on('disconnect', function(){
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
  console.log('newMessage', message);
});
