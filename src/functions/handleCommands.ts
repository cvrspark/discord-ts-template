import { Client } from 'discord.js';
import fs from 'fs';
import path from 'path';

function loadCommandsFromDirectory(client: Client, dirPath: string) {
    if (!fs.existsSync(dirPath)) {
        return;
    }

    const items = fs.readdirSync(dirPath);

    for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            loadCommandsFromDirectory(client, itemPath);
        } else if (item.endsWith('.ts') || item.endsWith('.js')) {
            try {
                const command = require(itemPath).default;
                
                if (command && 'data' in command && 'execute' in command) {
                    client.commands.set(command.data.name, command);
                    console.log(`Loaded command: ${command.data.name}`);
                } else if (command) {
                    console.log(`[WARNING] The command at ${itemPath} is missing a required "data" or "execute" property.`);
                } else {
                    console.log(`[WARNING] The command at ${itemPath} has no default export or is empty.`);
                }
            } catch (error) {
                console.log(`[ERROR] Failed to load command from ${itemPath}:`, error);
            }
        }
    }
}

export function handleCommands(client: Client) {
    const commandsPath = path.join(__dirname, '..', 'commands');
    console.log('Loading commands...');
    loadCommandsFromDirectory(client, commandsPath);
    console.log(`Loaded ${client.commands.size} commands total.`);
}
