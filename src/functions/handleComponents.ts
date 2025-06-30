import { Client } from 'discord.js';
import fs from 'fs';
import path from 'path';

function loadComponentsFromDirectory(client: Client, dirPath: string, componentType: 'buttons' | 'selectMenus' | 'modals') {
    if (!fs.existsSync(dirPath)) {
        return;
    }

    const items = fs.readdirSync(dirPath);

    for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            loadComponentsFromDirectory(client, itemPath, componentType);
        } else if (item.endsWith('.ts') || item.endsWith('.js')) {
            try {
                const component = require(itemPath).default;
                
                if (component && 'data' in component && 'execute' in component) {
                    const customId = component.data.customId;
                    
                    switch (componentType) {
                        case 'buttons':
                            client.buttons.set(customId, component);
                            console.log(`Loaded button: ${customId}`);
                            break;
                        case 'selectMenus':
                            client.selectMenus.set(customId, component);
                            console.log(`Loaded select menu: ${customId}`);
                            break;
                        case 'modals':
                            client.modals.set(customId, component);
                            console.log(`Loaded modal: ${customId}`);
                            break;
                    }
                } else if (component) {
                    console.log(`[WARNING] The ${componentType} at ${itemPath} is missing a required "data" or "execute" property.`);
                } else {
                    console.log(`[WARNING] The ${componentType} at ${itemPath} has no default export or is empty.`);
                }
            } catch (error) {
                console.log(`[ERROR] Failed to load ${componentType} from ${itemPath}:`, error);
            }
        }
    }
}

export function handleComponents(client: Client) {
    console.log('Loading components...');
    
    const buttonsPath = path.join(__dirname, '..', 'components', 'buttons');
    loadComponentsFromDirectory(client, buttonsPath, 'buttons');

    const selectMenusPath = path.join(__dirname, '..', 'components', 'selectMenus');
    loadComponentsFromDirectory(client, selectMenusPath, 'selectMenus');

    const modalsPath = path.join(__dirname, '..', 'components', 'modals');
    loadComponentsFromDirectory(client, modalsPath, 'modals');

    console.log(`Loaded ${client.buttons.size} buttons, ${client.selectMenus.size} select menus, ${client.modals.size} modals total.`);
}
