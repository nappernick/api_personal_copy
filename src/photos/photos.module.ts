import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosUploadService } from './photosUpload.service';

@Module({
  controllers: [PhotosController],
  providers: [PhotosUploadService],
})
export class PhotosModule {}
