# Дискорд Бот на TypeScript от cvrspark (ru)

## Структура проекта

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

### Установка

1. Клонируйте репозиторий:
   ```bash
   git clone <repository-url>
   gh repo clone cvrspark/discord-ts-layout
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Соберите проект:
   ```bash
   npm run build
   ```

4. Выложите команды:
   ```bash
   npm run deploy
   ```

5. Запустите бота:
   ```bash
   npm start
   ```

### Разработка

1. Режим наблюдения:
   ```bash
   npm run watch
   ```

2. Режим разработки:
   ```bash
   npm run dev
   ```

### Примеры кода

#### Команды
```typescript
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('example')
        .setDescription('Пример команды'),
    async execute(interaction: ChatInputCommandInteraction) {
        // Логика выполнения команды
    },
};
```

#### Кнопки
```typescript
import { ButtonInteraction } from 'discord.js';

export default {
    data: {
        customId: 'example_button',
    },
    async execute(interaction: ButtonInteraction) {
        // Логика выполнения кнопки
    },
};
```

#### Выпадающие меню
```typescript
import { StringSelectMenuInteraction } from 'discord.js';

export default {
    data: {
        customId: 'example_select',
    },
    async execute(interaction: StringSelectMenuInteraction) {
        // Логика выполнения выпадающего меню
    },
};
```

#### Модальные окна
```typescript
import { ModalSubmitInteraction } from 'discord.js';

export default {
    data: {
        customId: 'example_modal',
    },
    async execute(interaction: ModalSubmitInteraction) {
        // Логика выполнения модального окна
    },
};
```

### Лицензия

Этот проект лицензирован на условиях лицензии MIT.




