  const connection = io('http://localhost:3001');
  
  connection.on('ReceiveMessage', message =>
  { 
    const li = document.createElement("li");
    li.textContent = message;
    document.getElementById("messagesList").appendChild(li);
    
  });

  document.getElementById("sendButton").addEventListener("click", event => {
      const user = document.getElementById("userInput").value;
      const message = document.getElementById("messageInput").value;
      connection.emit("SandMessage", user + ": " + message);   
      event.preventDefault();
  });


  