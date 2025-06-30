import { REST, Routes } from 'discord.js';
import { config } from 'dotenv';
import fs from 'fs';
import path from 'path';

config();

const commands: any[] = [];

function loadCommandsFromDirectory(dirPath: string) {
    if (!fs.existsSync(dirPath)) {
        return;
    }

    const items = fs.readdirSync(dirPath);

    for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            loadCommandsFromDirectory(itemPath);
        } else if (item.endsWith('.ts') || item.endsWith('.js')) {
            try {
                const command = require(itemPath).default;
                if (command && 'data' in command && 'execute' in command) {
                    commands.push(command.data.toJSON());
                    console.log(`Found command: ${command.data.name}`);
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

const commandsPath = path.join(__dirname, '..', 'commands');
loadCommandsFromDirectory(commandsPath);

const rest = new REST().setToken(process.env.DISCORD_TOKEN!);

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.GUILD_ID!),
            { body: commands },
        );

        console.log(`Successfully reloaded ${(data as any).length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
})();
