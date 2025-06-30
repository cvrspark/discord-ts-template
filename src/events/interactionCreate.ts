import { Events, Interaction } from 'discord.js';

export default {
    name: Events.InteractionCreate,
    async execute(interaction: Interaction) {
        if (interaction.isChatInputCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                const reply = { content: 'There was an error while executing this command!', ephemeral: true };
                
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp(reply);
                } else {
                    await interaction.reply(reply);
                }
            }
        }
        else if (interaction.isButton()) {
            const button = interaction.client.buttons.get(interaction.customId);
            
            if (!button) {
                console.error(`No button matching ${interaction.customId} was found.`);
                return;
            }

            try {
                await button.execute(interaction);
            } catch (error) {
                console.error(error);
                const reply = { content: 'There was an error while handling this button!', ephemeral: true };
                
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp(reply);
                } else {
                    await interaction.reply(reply);
                }
            }
        }
        else if (interaction.isAnySelectMenu()) {
            const selectMenu = interaction.client.selectMenus.get(interaction.customId);
            
            if (!selectMenu) {
                console.error(`No select menu matching ${interaction.customId} was found.`);
                return;
            }

            try {
                await selectMenu.execute(interaction);
            } catch (error) {
                console.error(error);
                const reply = { content: 'There was an error while handling this select menu!', ephemeral: true };
                
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp(reply);
                } else {
                    await interaction.reply(reply);
                }
            }
        }
        else if (interaction.isModalSubmit()) {
            const modal = interaction.client.modals.get(interaction.customId);
            
            if (!modal) {
                console.error(`No modal matching ${interaction.customId} was found.`);
                return;
            }

            try {
                await modal.execute(interaction);
            } catch (error) {
                console.error(error);
                const reply = { content: 'There was an error while handling this modal!', ephemeral: true };
                
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp(reply);
                } else {
                    await interaction.reply(reply);
                }
            }
        }
    },
};
