import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Photos extends BaseEntity {
  @PrimaryGeneratedColumn()
  photoid: number;

  @Column()
  pjobid: number;

  @Column()
  pwoid: number;

  @Column()
  pwotype: string;

  @Column()
  puser: string;

  @Column()
  photoname: number;

  @Column()
  photoext: string;

  @Column({ type: 'timestamp' })
  photodts: Date;

  @Column()
  photolabel: string;

  @Column()
  phototags: string;

  @Column()
  photoorder: number;

  @Column()
  photoidcc: number;

  @Column()
  photodtscc: number;

  @Column()
  photoreq: string;

  @Column()
  photonotes: string;

  @Column({ type: 'json' })
  PQ_photosChecklist: any;

  @Column()
  pcid: number;

  @Column()
  pcwotype: string;

  @Column()
  pcwowtypes: string;

  @Column()
  pcname: string;

  @Column()
  pcdata: string;

  @Column({ type: 'json' })
  PQ_photosChecklistIDX: any;

  @Column()
  pciid: number;

  @Column()
  pcipcid: number;

  @Column()
  pciwoid: number;

  @Column()
  pcireq: number;

  @Column({ type: 'json' })
  PQ_photosIDX: any;

  @Column()
  pidxid: number;

  @Column()
  pidxjobid: number;

  @Column()
  pidxphotoid: number;

  @Column()
  pidxptype: string;

  @Column()
  pidxorder: number;

  @Column({ type: 'json' })
  PQ_prodServe: any;

  @Column()
  psid: number;

  @Column()
  pstype: string;

  @Column()
  psmarket: string;

  @Column()
  pscat: string;

  @Column()
  pstitle: string;

  @Column()
  psdesc: string;

  @Column()
  psqty: number;

  @Column()
  psqtytype: string;

  @Column()
  pstemplate: string;

  @Column()
  pscost: number;

  @Column()
  psview: string;
}
