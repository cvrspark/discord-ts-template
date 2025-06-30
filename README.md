# Discord Bot on TypeScript by cvrspark (en)

## Project Structure

```plaintext
src/
├── commands/
│   └── commandfolder/
│       └── comand.ts
├── context/
│   └── commandContextFolder/
│       └── context.ts
├── components/
│   ├── buttons/
│   │   └── buttonfolder/
│   │       └── button.ts
│   ├── modals/
│   │   └── modalsfolder/
│   │       └── modal.ts
│   └── selectMenus/
│       └── selectmenufolder/
│           └── selectmenu.ts
├── events/
│   └── event.ts
├── functions/
│   └── func.ts
├── types/
│   └── type.ts
├── utils/
│   └── utils.ts
└── index.ts
```

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   gh repo clone cvrspark/discord-ts-layout
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Deploy commands:
   ```bash
   npm run deploy
   ```

5. Start the bot:
   ```bash
   npm start
   ```

### Development

1. Watch mode:
   ```bash
   npm run watch
   ```

2. Developer mode:
   ```bash
   npm run dev
   ```

### Code Examples

#### Commands
```typescript
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('example')
        .setDescription('An example command'),
    async execute(interaction: ChatInputCommandInteraction) {
        // Command execution logic
    },
};
```

#### Buttons
```typescript
import { ButtonInteraction } from 'discord.js';

export default {
    data: {
        customId: 'example_button',
    },
    async execute(interaction: ButtonInteraction) {
        // Button execution logic
    },
};
```

#### Select Menus
```typescript
import { StringSelectMenuInteraction } from 'discord.js';

export default {
    data: {
        customId: 'example_select',
    },
    async execute(interaction: StringSelectMenuInteraction) {
        // Select menu execution logic
    },
};
```

#### Modals
```typescript
import { ModalSubmitInteraction } from 'discord.js';

export default {
    data: {
        customId: 'example_modal',
    },
    async execute(interaction: ModalSubmitInteraction) {
        // Modal execution logic
    },
};
```

### License

This project is licensed under the MIT License.

