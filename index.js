import tmi from 'tmi.js';

const options = {
    identity: {
        username: 'mariseladb',
        password: 'oauth:3hp7s29zlxj04g0884x6o1xlrq7kfa'
    },
    channels: [
        'mariseladb'

    ]
}

const client = new tmi.client(options);

client.on('connected', (address, port)=>{
    client.say(options.channels[0], 'Holaaap');
    console.log(`Bot listening at: ${address}:${port}`);
});

client.on('message', (target, ctx, msg, self) =>{
    if(msg === 'ping'){
        client.say(target, 'pong');
    }
});

client.connect();