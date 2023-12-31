import { DataSourceOptions } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Invoice } from '../invoices/entities/invoice.entity';
import { Lead } from '../leads/entities/lead.entity';

// Factory function to create DB config with entities dependent on input array
function createDBConfig(entities: any[]): DataSourceOptions {
  return {
    type: 'mariadb',
    host: process.env.dbuacme_apidev_HOST,
    port: 3306,
    username: process.env.dbuacme_apidev_USER,
    password: process.env.dbuacme_apidev_PASSWORD,
    database: process.env.dbuacme_apidev_NAME,
    entities: entities,
  };
}

// Usage
const configForUser = createDBConfig([User]);
const configForAll = createDBConfig([Invoice, Lead, User]);

export {
  configForAll,
  configForAll as dbConfig,
  configForUser,
  createDBConfig,
};
