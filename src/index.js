require('dotenv').config();
const AIBuilder = require('./ai-builder');
const MinecraftHandler = require('./minecraft-handler');

const aiBuilder = new AIBuilder();
const minecraftHandler = new MinecraftHandler();

// Initialize the system
async function init() {
  console.log('🚀 Starting AI Builder for Minecraft Bedrock...');
  
  try {
    await aiBuilder.initialize();
    await minecraftHandler.initialize();
    
    // Setup command listener
    minecraftHandler.onCommand('build', async (args, player) => {
      const prompt = args.join(' ');
      console.log(`📝 Player ${player} requested: ${prompt}`);
      
      try {
        const buildPlan = await aiBuilder.generateBuildPlan(prompt);
        const structures = await aiBuilder.convertToStructures(buildPlan);
        await minecraftHandler.buildStructures(structures, player);
        
        console.log(`✅ Build completed for ${player}`);
      } catch (error) {
        console.error(`❌ Error building: ${error.message}`);
        minecraftHandler.sendMessage(player, `Error: ${error.message}`);
      }
    });
    
    console.log('✨ AI Builder is ready!');
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

init();
