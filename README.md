# Discord Bot on TypeScript by cvrspark / Дискорд Бот на TypeScript от cvrspark

## Project Structure / Структура проекта

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

### Installation / Установка

1. Clone the repository / Клонируйте репозиторию:
   ```bash
   git clone <repository-url>
   gh repo clone cvrspark/discord-ts-template
   ```

2. Install dependencies / Установите зависимости:
   ```bash
   npm install
   ```

3. Build the project / Соберите проект:
   ```bash
   npm run build
   ```

4. Deploy commands / Выложите команды:
   ```bash
   npm run deploy
   ```

5. Start the bot / Запустите бота:
   ```bash
   npm start
   ```

### Development

1. Watch mode / Режим наблюдения:
   ```bash
   npm run watch
   ```

2. Developer mode / Режим разработки:
   ```bash
   npm run dev
   ```

### Code Examples / Примеры кода

#### Commands / Команды
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

#### Buttons / Кнопки
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

#### Select Menus / Mеню
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

#### Modals / Модальные окна
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
