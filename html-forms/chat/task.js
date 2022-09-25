const widget = document.querySelector('.chat-widget');


widget.addEventListener("click", () => {
    widget.classList.add('chat-widget_active');
})


const date = new Date;

let time = [date.getHours(), date.getMinutes()].map(function (t) {
    return t < 10 ? "0" + t : t
}).join(":");

const container = document.querySelector('.chat-widget__messages-container');

const randomMessage = () => {
    const harshMessages = [
    "Что надо?",
    "К сожалению, все операторы заняты",
    "Ваш звонок очень важен для нас",
    "Что вы тут забыли?",
    "Мы отвечаем только по вторникам",
    "Нам некогда с вами возиться",
    ];

    const index = Math.floor(Math.random() * harshMessages.length);

    return harshMessages[index];
}


const input = document.getElementById('chat-widget__input');

function harshMessage() {
    const messages = document.querySelector( '.chat-widget__messages' );
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">${randomMessage()}</div>
    </div>`;
};

function enterUserMessage() {
    const messages = document.querySelector( '.chat-widget__messages' );
    messages.innerHTML += `
    <div class = "message message_client">
    <div class = "message__time">${time}</div>
    <div class = "message__text">${input.value}</div>
    </div>`;
    input.value = "";
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (this.value !== "") {
            enterUserMessage();
            harshMessage();
        }
    }
})
