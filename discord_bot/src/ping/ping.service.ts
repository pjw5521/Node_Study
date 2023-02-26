import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, GatewayIntentBits, Partials } from 'discord.js';

@Injectable()
export class BotService implements OnModuleInit {
    client;
    constructor() {
        this.client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages ], partials: [Partials.Channel] });
    }
    
    onModuleInit(){
        this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}!`);
        });
        
        this.client.on('messageCreate', (message) => {
            if (message.author.bot) return;
            
            if(message.content == 'ping'){
                message.reply("pong!");
            } else if (message.content == 'pong'){
                message.reply("ping!")
            }
            console.log("message created");
          });
          
        // 토큰 넣기 
        this.client.login("MTA3OTIwMTE2MTUxNDU4NjE0Mg.GT3312.LW81E4tSEqKGdIRTnL2wk98PIvUECD3HhRM7fw");
    }
}
