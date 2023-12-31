import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lead extends BaseEntity {
  @PrimaryGeneratedColumn()
  lid: number;

  @Column({ type: 'int', nullable: true })
  luid: number | null;

  @Column({ type: 'int', nullable: true })
  lcid: number | null;

  @Column({ type: 'timestamp', nullable: true })
  ladate: Date | null;

  @Column({ nullable: true })
  lstatus: string | null;

  @Column({ nullable: true })
  lstatus2: string | null;

  @Column({ nullable: true })
  ltype: string | null;

  @Column({ nullable: true })
  lservice: string | null;

  @Column({ type: 'int', nullable: true })
  lstatusuid: number | null;

  @Column({ nullable: true })
  lstatusreason: string | null;

  @Column({ type: 'timestamp', nullable: true })
  lstatusdate: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  llastcontact: Date | null;

  @Column({ type: 'int', nullable: true })
  llastcontactuid: number | null;

  @Column({ nullable: true })
  lsource: string | null;

  @Column({ nullable: true })
  lcomp: string | null;

  @Column({ nullable: true })
  lcontact: string | null;

  @Column({ nullable: true })
  ltitle: string | null;

  @Column({ nullable: true })
  llname: string | null;

  @Column({ nullable: true })
  laddr1: string | null;

  @Column({ nullable: true })
  laddr2: string | null;

  @Column({ nullable: true })
  lcity: string | null;

  @Column({ nullable: true })
  lst: string | null;

  @Column({ type: 'int', nullable: true })
  lzip: number | null;

  @Column({ nullable: true })
  llatlon: string | null;

  @Column({ nullable: true })
  lphone: string | null;

  @Column({ nullable: true })
  lext: string | null;

  @Column({ nullable: true })
  laltphone: string | null;

  @Column({ nullable: true })
  laltext: string | null;

  @Column({ nullable: true })
  lemail: string | null;

  @Column({ type: 'bigint', nullable: true })
  llotid: bigint | null;

  @Column({ nullable: true })
  lnotes: string | null;

  @Column({ nullable: true })
  lfax: string | null;

  @Column({ nullable: true })
  lcontact2: string | null;

  @Column({ nullable: true })
  ltitle2: string | null;

  @Column({ type: 'bigint', nullable: true })
  lphone2: bigint | null;

  @Column({ nullable: true })
  lext2: string | null;

  @Column({ nullable: true })
  lemail2: string | null;

  @Column({ nullable: true })
  lemail2cc: string | null;

  @Column({ nullable: true })
  lbtype: string | null;

  @Column({ type: 'int', nullable: true })
  lbfloors: number | null;

  @Column({ nullable: true })
  lbroofmat: string | null;

  @Column({ nullable: true })
  lbhatch: string | null;

  @Column({ type: 'int', nullable: true })
  lbheight: number | null;

  @Column({ type: 'timestamp', nullable: true })
  linspection: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  linspectioncomp: Date | null;

  @Column({ nullable: true })
  linspectionnotes: string | null;

  @Column({ nullable: true })
  llocnotes: string | null;

  @Column({ type: 'int', nullable: true })
  lapp: number | null;

  @Column({ nullable: true })
  linvpays: string | null;

  @Column({ nullable: true })
  linsuranceco: string | null;

  @Column({ nullable: true })
  lclaimnum: string | null;

  @Column({ nullable: true })
  lsimpleinspections: string | null;
}
