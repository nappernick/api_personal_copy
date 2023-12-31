import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserDto {
  @IsNumber()
  uid: number;

  @IsString()
  ulogin: string;

  @IsString()
  upass: string;

  @IsOptional()
  @IsString()
  ufirstn: string;

  @IsOptional()
  @IsString()
  ulastn: string;

  @IsEmail()
  uemail: string;

  @IsOptional()
  @IsNumber()
  uphone: number;

  @IsOptional()
  @IsNumber()
  uphonemobile: number;

  @IsOptional()
  @IsDate()
  uadddts: Date;

  @IsOptional()
  @IsNumber()
  uaddid: number;

  @IsOptional()
  @IsDate()
  ueditdts: Date;

  @IsOptional()
  @IsNumber()
  ueditid: number;

  @IsOptional()
  @IsDate()
  ulastlogin: Date;

  @IsOptional()
  @IsDate()
  ulastdts: Date;

  @IsOptional()
  @IsDate()
  ulastpassdts: Date;

  @IsString()
  urole: string;

  @IsOptional()
  @IsString()
  uestimate: string;

  @IsOptional()
  @IsString()
  uclients: string;

  @IsOptional()
  @IsString()
  ujobs: string;

  @IsOptional()
  @IsString()
  uinstaller: string;

  @IsOptional()
  @IsString()
  utemplates: string;

  @IsOptional()
  @IsString()
  usuper: string;

  @IsOptional()
  @IsString()
  ustatus: string;

  @IsOptional()
  @IsNumber()
  uexpire: number;

  @IsOptional()
  @IsString()
  utitl: string;

  @IsOptional()
  @IsString()
  usys: string;

  @IsOptional()
  @IsBoolean()
  ulock: boolean;

  @IsOptional()
  @IsString()
  umenuoverride: string;

  @IsOptional()
  @IsNumber()
  ucid: number;

  @IsOptional()
  @IsString()
  uaddpart: string;

  @IsOptional()
  @IsString()
  uaddpartrate: string;

  @IsOptional()
  @IsString()
  udefLot: string;

  @IsOptional()
  @IsString()
  ucntE: string;

  @IsOptional()
  @IsString()
  ucolor: string;

  @IsOptional()
  @IsString()
  ukey: string;

  @IsOptional()
  @IsString()
  uperms: string;

  @IsOptional()
  @IsString()
  ustart: string;

  @IsOptional()
  @IsString()
  ustartmobile: string;

  @IsOptional()
  @IsString()
  ufieldRe: string;

  @IsOptional()
  @IsString()
  uroles: string;

  @IsOptional()
  @IsString()
  urolesBKUP: string;

  @IsOptional()
  @IsString()
  uassign: string;

  @IsOptional()
  @IsString()
  uwidgets: string;

  @IsOptional()
  @IsNumber()
  urate: number;

  @IsOptional()
  @IsString()
  ulang: string;

  @IsOptional()
  @IsString()
  uintegrationcc: string;

  @IsOptional()
  @IsString()
  ucompanies: string;

  @IsOptional()
  @IsString()
  uservices: string;

  @IsOptional()
  @IsNumber()
  usalesgoal: number;

  @IsOptional()
  @IsNumber()
  usalesgoaly: number;

  @IsOptional()
  @IsNumber()
  ustagingaccess: number;

  @IsOptional()
  @IsNumber()
  umasteraccess: number;
}
