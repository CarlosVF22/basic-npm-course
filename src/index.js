const messages =[
    "Carlos",
    "Paula",
    "Carolina",
    "Voy a dominar el mundo",
    "Diego",
    "Laura",
];

const randomMsg = ()=> {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports ={randomMsg};