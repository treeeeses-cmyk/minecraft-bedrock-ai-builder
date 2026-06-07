# 🤖 Minecraft Bedrock AI Builder

AI-powered building assistant for Minecraft Bedrock Edition using OpenRouter API.

## Features

- 🧠 **AI-Powered Designs**: Uses OpenRouter (Llama 2) to generate building plans
- 🏗️ **Auto-Building**: Automatically places blocks according to AI specifications
- 💬 **Natural Language**: Just describe what you want to build!
- ⚡ **Fast Generation**: Rapid structure creation

## Prerequisites

- Node.js 16+
- OpenRouter API Key ([get one here](https://openrouter.io))
- Minecraft Bedrock Edition

## Installation

1. Clone the repository:
```bash
git clone https://github.com/treeeeses-cmyk/minecraft-bedrock-ai-builder.git
cd minecraft-bedrock-ai-builder
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
```bash
cp .env.example .env
# Edit .env and add your OpenRouter API key
```

4. Run the application:
```bash
npm start
```

## Usage

Once the server is running, use in Minecraft:

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

- `OPENROUTER_API_KEY`: Your API key
- `AI_MODEL`: LLM model to use
- `MAX_BUILD_SIZE`: Maximum build dimensions
- `BUILD_TIMEOUT`: Time limit for build generation

## Documentation

- [Setup Guide](docs/SETUP.md) - Complete installation instructions
- [API Documentation](docs/API.md) - Class and method reference
- [Advanced Features](docs/ADVANCED.md) - Custom models and integrations

## Roadmap

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