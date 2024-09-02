const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'package.json');

fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error leyendo el archivo package.json:', err);
    process.exit(1);
  }

  let packageJson;
  try {
    packageJson = JSON.parse(data);
  } catch (err) {
    console.error('Error parseando el archivo package.json:', err);
    process.exit(1);
  }

  const { version } = packageJson;

  if (!version) {
    console.error('No se encontró el campo "version" en package.json.');
    process.exit(1);
  }

  const [major, minor, patch] = version.split('.').map(Number);

  const newVersion = `${major}.${minor}.${patch + 1}`;

  packageJson.version = newVersion;

  fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error escribiendo el archivo package.json:', err);
      process.exit(1);
    }

    console.log(`Versión incrementada a ${newVersion}`);
  });
});
