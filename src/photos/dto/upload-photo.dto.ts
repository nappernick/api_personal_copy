import { IsNumber, IsString, IsDate, IsOptional } from 'class-validator';

export class PhotoUploadDto {
  @IsNumber()
  readonly photoid: number;

  @IsNumber()
  @IsOptional()
  readonly pjobid: number;

  @IsNumber()
  @IsOptional()
  readonly pwoid: number;

  @IsString()
  @IsOptional()
  readonly pwotype: string;

  @IsString()
  @IsOptional()
  readonly puser: string;

  @IsNumber()
  @IsOptional()
  readonly photoname: number;

  @IsString()
  @IsOptional()
  readonly photoext: string;

  @IsDate()
  @IsOptional()
  readonly photodts: Date;

  @IsString()
  @IsOptional()
  readonly photolabel: string;

  @IsString()
  @IsOptional()
  readonly phototags: string;

  @IsNumber()
  @IsOptional()
  readonly photoorder: number;

  @IsNumber()
  @IsOptional()
  readonly photoidcc: number;

  @IsNumber()
  @IsOptional()
  readonly photodtscc: number;

  @IsString()
  @IsOptional()
  readonly photoreq: string;

  @IsString()
  @IsOptional()
  readonly photonotes: string;

  // The type for PQ_photosChecklist is not specified, hence marked as any
  @IsOptional()
  readonly PQ_photosChecklist: any;

  @IsNumber()
  @IsOptional()
  readonly pcid: number;

  @IsString()
  @IsOptional()
  readonly pcwotype: string;

  @IsString()
  @IsOptional()
  readonly pcwowtypes: string;

  @IsString()
  @IsOptional()
  readonly pcname: string;

  @IsString()
  @IsOptional()
  readonly pcdata: string;

  // The type for PQ_photosChecklistIDX is not specified, hence marked as any
  @IsOptional()
  readonly PQ_photosChecklistIDX: any;

  @IsNumber()
  @IsOptional()
  readonly pciid: number;

  @IsNumber()
  @IsOptional()
  readonly pcipcid: number;

  @IsNumber()
  @IsOptional()
  readonly pciwoid: number;

  @IsNumber()
  @IsOptional()
  readonly pcireq: number;

  // The type for PQ_photosIDX is not specified, hence marked as any
  @IsOptional()
  readonly PQ_photosIDX: any;

  @IsNumber()
  @IsOptional()
  readonly pidxid: number;

  @IsNumber()
  @IsOptional()
  readonly pidxjobid: number;

  @IsNumber()
  @IsOptional()
  readonly pidxphotoid: number;

  @IsString()
  @IsOptional()
  readonly pidxptype: string;

  @IsNumber()
  @IsOptional()
  readonly pidxorder: number;

  // The type for PQ_prodServe is not specified, hence marked as any
  @IsOptional()
  readonly PQ_prodServe: any;

  @IsNumber()
  @IsOptional()
  readonly psid: number;

  @IsString()
  @IsOptional()
  readonly pstype: string;

  @IsString()
  @IsOptional()
  readonly psmarket: string;

  @IsString()
  @IsOptional()
  readonly pscat: string;

  @IsString()
  @IsOptional()
  readonly pstitle: string;

  @IsString()
  @IsOptional()
  readonly psdesc: string;

  @IsNumber()
  @IsOptional()
  readonly psqty: number;

  @IsString()
  @IsOptional()
  readonly psqtytype: string;

  @IsString()
  @IsOptional()
  readonly pstemplate: string;

  @IsNumber()
  @IsOptional()
  readonly pscost: number;

  @IsString()
  @IsOptional()
  readonly psview: string;
}
