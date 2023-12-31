import { IsNumber, IsString, IsOptional, IsDate } from 'class-validator';

export class PQLeadsDto {
  @IsNumber()
  readonly lid: number;

  @IsNumber()
  @IsOptional()
  readonly luid: number | null;

  @IsNumber()
  @IsOptional()
  readonly lcid: number | null;

  @IsDate()
  @IsOptional()
  readonly ladate: Date | null;

  @IsString()
  @IsOptional()
  readonly lstatus: string | null;

  @IsString()
  @IsOptional()
  readonly lstatus2: string | null;

  @IsString()
  @IsOptional()
  readonly ltype: string | null;

  @IsString()
  @IsOptional()
  readonly lservice: string | null;

  @IsNumber()
  @IsOptional()
  readonly lstatusuid: number | null;

  @IsString()
  @IsOptional()
  readonly lstatusreason: string | null;

  @IsDate()
  @IsOptional()
  readonly lstatusdate: Date | null;

  @IsDate()
  @IsOptional()
  readonly llastcontact: Date | null;

  @IsNumber()
  @IsOptional()
  readonly llastcontactuid: number | null;

  @IsString()
  @IsOptional()
  readonly lsource: string | null;

  @IsString()
  @IsOptional()
  readonly lcomp: string | null;

  @IsString()
  @IsOptional()
  readonly lcontact: string | null;

  @IsString()
  @IsOptional()
  readonly ltitle: string | null;

  @IsString()
  @IsOptional()
  readonly llname: string | null;

  @IsString()
  @IsOptional()
  readonly laddr1: string | null;

  @IsString()
  @IsOptional()
  readonly laddr2: string | null;

  @IsString()
  @IsOptional()
  readonly lcity: string | null;

  @IsString()
  @IsOptional()
  readonly lst: string | null;

  @IsNumber()
  @IsOptional()
  readonly lzip: number | null;

  @IsString()
  @IsOptional()
  readonly llatlon: string | null;

  @IsString()
  @IsOptional()
  readonly lphone: string | null;

  @IsString()
  @IsOptional()
  readonly lext: string | null;

  @IsString()
  @IsOptional()
  readonly laltphone: string | null;

  @IsString()
  @IsOptional()
  readonly laltext: string | null;

  @IsString()
  @IsOptional()
  readonly lemail: string | null;

  @IsBigInt()
  @IsOptional()
  readonly llotid: bigint | null;

  @IsString()
  @IsOptional()
  readonly lnotes: string | null;

  @IsString()
  @IsOptional()
  readonly lfax: string | null;

  @IsString()
  @IsOptional()
  readonly lcontact2: string | null;

  @IsString()
  @IsOptional()
  readonly ltitle2: string | null;

  @IsBigInt()
  @IsOptional()
  readonly lphone2: bigint | null;

  @IsString()
  @IsOptional()
  readonly lext2: string | null;

  @IsString()
  @IsOptional()
  readonly lemail2: string | null;

  @IsString()
  @IsOptional()
  readonly lemail2cc: string | null;

  @IsString()
  @IsOptional()
  readonly lbtype: string | null;

  @IsNumber()
  @IsOptional()
  readonly lbfloors: number | null;

  @IsString()
  @IsOptional()
  readonly lbroofmat: string | null;

  @IsString()
  @IsOptional()
  readonly lbhatch: string | null;

  @IsNumber()
  @IsOptional()
  readonly lbheight: number | null;

  @IsDate()
  @IsOptional()
  readonly linspection: Date | null;

  @IsDate()
  @IsOptional()
  readonly linspectioncomp: Date | null;

  @IsString()
  @IsOptional()
  readonly linspectionnotes: string | null;

  @IsString()
  @IsOptional()
  readonly llocnotes: string | null;

  @IsNumber()
  @IsOptional()
  readonly lapp: number | null;

  @IsString()
  @IsOptional()
  readonly linvpays: string | null;

  @IsString()
  @IsOptional()
  readonly linsuranceco: string | null;

  @IsString()
  @IsOptional()
  readonly lclaimnum: string | null;

  @IsString()
  @IsOptional()
  readonly lsimpleinspections: string | null;
}
