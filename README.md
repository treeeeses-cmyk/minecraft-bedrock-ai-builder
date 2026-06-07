# 🤖 Minecraft Bedrock AI Builder

AI-powered building assistant for Minecraft Bedrock Edition using OpenRouter API.

## 🚀 Быстрый старт - Скачайте и используйте!

### Вариант 1: Скачать как ZIP (Самый простой)

1. **Нажмите зелёную кнопку "Code"** на странице репозитория
2. **Выберите "Download ZIP"**
3. **Распакуйте файл** в удобное место
4. **Откройте папку** и следуйте шагам ниже

### Вариант 2: Использовать Git

```bash
git clone https://github.com/treeeeses-cmyk/minecraft-bedrock-ai-builder.git
cd minecraft-bedrock-ai-builder
```

## ⚡ Установка (2 команды)

```bash
# Установите зависимости
npm install

# Запустите аддон
npm start
```

**Готово! ✅ Аддон установлен и работает!**

---

## 📖 Полная инструкция

👉 **[Читайте подробный гайд установки в INSTALL.md](INSTALL.md)**

## Features

- 🧠 **AI-Powered Designs**: Uses OpenRouter (Llama 2) to generate building plans
- 🏗️ **Auto-Building**: Automatically places blocks according to AI specifications
- 💬 **Natural Language**: Just describe what you want to build!
- ⚡ **Fast Generation**: Rapid structure creation

## 🎮 Использование

После установки в Minecraft используйте:

```
/build create a modern house
/build build a castle
/build make a farm
```

## Как это работает?

1. **Вводите команду**: `/build описание что вы хотите`
2. **AI генерирует план**: OpenRouter создаёт детальный план постройки
3. **Блоки преобразуются**: План конвертируется в координаты блоков
4. **Строится автоматически**: Блоки размещаются в мире Minecraft

## Требования

- ✅ Minecraft Bedrock Edition (Windows 10/11, Xbox, Mobile)
- ✅ Интернет соединение
- ✅ Node.js 16+ (для запуска)
- ✅ API ключ **уже настроен!**

## Структура проекта

```
.
├── src/
│   ├── index.js              # Главный файл
│   ├── ai-builder.js         # AI логика
│   └── minecraft-handler.js  # Интеграция с Minecraft
├── manifest.json             # Конфигурация аддона
├── package.json              # Зависимости
├── .env                       # API ключ (уже настроен!)
└── INSTALL.md                # Инструкция
```

## Настройка

Отредактируйте `.env` для изменения:

```env
OPENROUTER_API_KEY=sk-or-v1-... # API ключ (уже установлен!)
AI_MODEL=meta-llama/llama-2-70b-chat
MAX_BUILD_SIZE=50
BUILD_TIMEOUT=60000
```

## Документация

- **[📥 INSTALL.md](INSTALL.md)** - Как установить (начните отсюда!)
- **[docs/SETUP.md](docs/SETUP.md)** - Полная инструкция установки
- **[docs/API.md](docs/API.md)** - Справка по API
- **[docs/ADVANCED.md](docs/ADVANCED.md)** - Продвинутые функции

## Планы развития

- [x] AI-powered building
- [x] OpenRouter integration
- [x] Pre-configured
- [x] Ready to download & use
- [ ] Minecraft WebSocket connection
- [ ] Better structure parsing
- [ ] Multi-player support
- [ ] Build templates
- [ ] Build history

## Лицензия

MIT

## Помощь и вопросы

Если что-то не работает:
1. 📖 Прочитайте [INSTALL.md](INSTALL.md)
2. 🔍 Проверьте, что установлен **Minecraft Bedrock** (не Java Edition)
3. 🌐 Убедитесь в интернет соединении
4. 💬 Откройте Issue на GitHub

---

**Made with ❤️ by treeeeses-cmyk**

**Status**: ✅ Ready to use
**Version**: 1.0.0
**Release**: June 7, 2026