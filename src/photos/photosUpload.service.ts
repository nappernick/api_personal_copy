import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class PhotosUploadService {
  constructor(public dataSource: DataSource) {}

  async storePhoto(file: File): Promise<any> {
    return file;
  }
}
