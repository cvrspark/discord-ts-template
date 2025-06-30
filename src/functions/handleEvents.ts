import { Client } from 'discord.js';
import fs from 'fs';
import path from 'path';

export function handleEvents(client: Client) {
    const eventsPath = path.join(__dirname, '..', 'events');
    const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.ts') || file.endsWith('.js'));

    for (const file of eventFiles) {
        const filePath = path.join(eventsPath, file);
        const event = require(filePath).default;
        
        if (!event || !event.name || !event.execute) {
            console.log(`[WARNING] The event at ${filePath} is missing required properties.`);
            continue;
        }
        
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
}
