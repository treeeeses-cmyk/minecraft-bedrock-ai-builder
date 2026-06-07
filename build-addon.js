const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Create .mcaddon file (which is a ZIP archive)
const output = fs.createWriteStream('minecraft-ai-builder.mcaddon');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', function() {
  console.log('✅ minecraft-ai-builder.mcaddon created successfully!');
  console.log(`📦 File size: ${archive.pointer()} bytes`);
  console.log('🎮 Ready to use in Minecraft Bedrock!');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Add behavior pack to the archive
const behaviorPackPath = path.join(__dirname, 'behavior_packs/AI_Builder');
archive.directory(behaviorPackPath, 'behavior_packs/AI_Builder');

archive.finalize();
