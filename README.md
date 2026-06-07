# 🤖 Minecraft Bedrock AI Builder

AI-powered building assistant for Minecraft Bedrock Edition using OpenRouter API.

**[📥 СКАЧАТЬ АДДОН - ГОТОВЫЙ К ИСПОЛЬЗОВАНИЮ](https://github.com/treeeeses-cmyk/minecraft-bedrock-ai-builder/releases/download/v1.0.0/minecraft-ai-builder.mcaddon)**

## Features

- 🧠 **AI-Powered Designs**: Uses OpenRouter (Llama 2) to generate building plans
- 🏗️ **Auto-Building**: Automatically places blocks according to AI specifications
- 💬 **Natural Language**: Just describe what you want to build!
- ⚡ **Fast Generation**: Rapid structure creation

## 🚀 Quick Start (2 шага!)

### 1. Скачайте аддон
[**📥 Скачать minecraft-ai-builder.mcaddon**](https://github.com/treeeeses-cmyk/minecraft-bedrock-ai-builder/releases/download/v1.0.0/minecraft-ai-builder.mcaddon)

### 2. Откройте в Minecraft Bedrock
- Двойной клик на файл `.mcaddon`
- Minecraft автоматически установит аддон
- Готово! ✅

## Usage

Once the addon is installed, use in Minecraft:

```
/build create a modern house with 2 floors
/build build a castle
/build make a simple farm
```

## How It Works

1. **User Input**: Player types a building request
2. **AI Processing**: OpenRouter generates a detailed build plan
3. **Conversion**: Plan is converted to Minecraft block coordinates
4. **Building**: Blocks are placed automatically in the world

## Prerequisites

- Minecraft Bedrock Edition (Windows 10/11, Xbox, Mobile)
- Internet connection
- API key (уже включен в аддон!)

## Project Structure

```
.
├── src/
│   ├── index.js              # Main entry point
│   ├── ai-builder.js         # AI planning logic
│   └── minecraft-handler.js  # Minecraft integration
├── manifest.json             # Behavior pack manifest
├── package.json              # Dependencies
└── .env.example              # Environment template
```

## Configuration

Edit `.env` to customize:

- `OPENROUTER_API_KEY`: Your API key (already set!)
- `AI_MODEL`: LLM model to use
- `MAX_BUILD_SIZE`: Maximum build dimensions
- `BUILD_TIMEOUT`: Time limit for build generation

## Documentation

- [Setup Guide](docs/SETUP.md) - Complete installation instructions
- [API Documentation](docs/API.md) - Class and method reference
- [Advanced Features](docs/ADVANCED.md) - Custom models and integrations

## Roadmap

- [x] AI-powered building
- [x] OpenRouter integration
- [x] Ready-to-download addon
- [ ] Real WebSocket connection to Minecraft server
- [ ] Advanced structure parsing
- [ ] Multi-player support
- [ ] Save/load build templates
- [ ] Build history
- [ ] Schematic format support

## License

MIT

## Contributing

Feel free to submit issues and pull requests!

---

**Made with ❤️ for Minecraft builders**

**Статус**: ✅ Готово к использованию
**Версия**: 1.0.0
**Дата релиза**: June 7, 2026