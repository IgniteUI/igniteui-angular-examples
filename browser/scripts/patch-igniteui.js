const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../node_modules/igniteui-angular/lib/core/styles/themes/generators/_base.scss');

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix the action-strip-theme call
  content = content.replace(
    /\$action-strip-theme-map: action-strip-theme\(\s*\$schema: \$schema,\s*\);/g,
    '$action-strip-theme-map: action-strip-theme($schema);'
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✓ Patched igniteui-angular SCSS for Sass compatibility');
} else {
  console.log('⚠ Could not find igniteui-angular _base.scss file to patch');
}
