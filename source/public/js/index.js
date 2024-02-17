console.log("hola, estoy ejecurando un script")

const socket = io()



const userNameInput = document.getElementById("userName")
const messageInput = document.getElementById("messageInput")
const sendMessageButton = document.getElementById("sendMessageButton")
const messageContainer = document.getElementById("messageContainer")

sendMessageButton.addEventListener("click", () => {
    const inputText = messageInput.value;
    const userName = userNameInput.value;
    socket.emit("message", {inputText, userName});
     messageInput.value = "";
}) 

socket.on("message", (messages) => {
    messageContainer.innerHTML = messages
})

socket.on("messages", (mssges) => {   
const messagesHtml = mssges.map((mssge) =>{
    return `<p>${userName} : ${mssge.mssges} </p>`
}).join("")

console.log(messagesHtml);

messageContainer.innerHTML = messagesHtml


})