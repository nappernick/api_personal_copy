import { PartialType } from '@nestjs/mapped-types';
import { PhotoUploadDto } from './upload-photo.dto';

export class UpdatePhotoDto extends PartialType(PhotoUploadDto) {}
