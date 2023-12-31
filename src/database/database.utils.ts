import { DataSource } from 'typeorm';

import { dbConfig } from '../database/db.config';

export default class DataSourceManager {
  constructor(public readonly dataSource: DataSource) {}
  public static getInstance(): DataSourceManager {
    const dataSourceManagerInstance = DataSourceManager.getInstance();
    return dataSourceManagerInstance;
  }

  async getDBDataSource(dataSourceName: string): Promise<DataSource> {
    if (this.dataSource[dataSourceName]) {
      const dataSource = this.dataSource[dataSourceName];
      return Promise.resolve(
        dataSource.isInitialized ? dataSource : dataSource.initialize(),
      );
    }

    const newDataSource = new DataSource(dbConfig);

    this.dataSource[dataSourceName] = newDataSource;

    return Promise.resolve(newDataSource.initialize());
  }
}
