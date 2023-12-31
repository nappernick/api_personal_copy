import { ConfigService } from '@nestjs/config';

import * as fs from 'fs';
import * as path from 'path';

// Path to your .env file
const envPath = path.resolve(__dirname, '.env');

function updateEnvFile(key, value) {
  try {
    // Read the contents of the .env file
    const envContents = fs.readFileSync(envPath, 'utf-8');

    // Split the content line by line
    const lines = envContents.split(/\r?\n/);

    // Variable to store whether we found the key
    let keyFound = false;

    // Iterate over the lines
    const newLines = lines.map((line) => {
      // Check if the current line contains the key
      if (line.match(new RegExp(`^${key}=`))) {
        keyFound = true;
        // Replace the line with the new key value
        return `${key}=${value}`;
      }
      return line;
    });

    // If the key wasn't found, add it to the end.
    if (!keyFound) {
      newLines.push(`${key}=${value}`);
    }

    // Join the lines back to a single string
    const updatedContent = newLines.join('\n');

    // Write the new .env content back to the file
    fs.writeFileSync(envPath, updatedContent, 'utf-8');

    console.log(`.env updated: ${key}=${value}`);
  } catch (error) {
    console.error('An error occurred while updating the .env file', error);
  }
}
export function setDatabaseConfig(configService: ConfigService<any, any>) {
  try {
    // Retrieve the prefix for DB-related environment variables
    const useDBPrefix = configService.get<string>('USE_DB');
    if (!useDBPrefix) {
      try {
        updateEnvFile('USE_DB', process.env.USE_DB || 'dbuacme_apidev');
      } catch (e) {}
      throw new Error(`The 'USE_DB' environment variable is not set`);
    }

    // Construct the names of the required DB environment variables
    const requiredDBEnvVars = [
      `${useDBPrefix}_HOST`,
      `${useDBPrefix}_NAME`,
      `${useDBPrefix}_USER`,
      `${useDBPrefix}_PASSWORD`,
    ];

    requiredDBEnvVars.forEach((dbVarName) => {
      const varValue = configService.get<string>(dbVarName);
      if (!varValue) {
        throw new Error(`Environment variable '${dbVarName}' is not set`);
      }
    });
    if (!process.env.USE_DB) {
      updateEnvFile('USE_DB', useDBPrefix);
    }
    return { useDBPrefix, requiredDBEnvVars };
  } catch (error) {
    console.error(error.message);
    // Handle the error gracefully as needed
    // For example, you can return null or a default value
    return null;
  }
}
