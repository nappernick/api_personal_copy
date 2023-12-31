import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Lead } from '../../leads/entities/lead.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  ulogin: string;

  @Column()
  upass: string;

  @Column()
  ufirstn: string;

  @Column()
  ulastn: string;

  @Column()
  uemail: string;

  @Column({ nullable: true })
  uphone?: number;

  @Column({ nullable: true })
  uphonemobile?: number;

  @Column({ type: 'timestamp', nullable: true })
  uadddts?: Date;

  @Column({ nullable: true })
  uaddid?: number;

  @Column({ type: 'timestamp', nullable: true })
  ueditdts?: Date;

  @Column({ nullable: true })
  ueditid?: number;

  @Column({ type: 'timestamp', nullable: true })
  ulastlogin?: Date;

  @Column({ type: 'timestamp', nullable: true })
  ulastdts?: Date;

  @Column({ type: 'timestamp', nullable: true })
  ulastpassdts?: Date;

  @Column({ nullable: true })
  urole?: string;

  @Column({ nullable: true })
  uestimate?: string;

  @Column({ nullable: true })
  uclients?: string;

  @Column({ nullable: true })
  ujobs?: string;

  @Column({ nullable: true })
  uinstaller?: string;

  @Column({ nullable: true })
  utemplates?: string;

  @Column({ nullable: true })
  usuper?: string;

  @Column({ nullable: true })
  ustatus?: string;

  @Column({ nullable: true })
  uexpire?: number;

  @Column({ nullable: true })
  utitl?: string;

  @Column({ nullable: true })
  usys?: string;

  @Column({ nullable: true })
  ulock?: string;

  @Column({ nullable: true })
  umenuoverride?: string;

  @Column({ nullable: true })
  ucid?: number;

  @Column({ nullable: true })
  uaddpart?: string;

  @Column({ nullable: true })
  uaddpartrate?: string;

  @Column({ nullable: true })
  udefLot?: string;

  @Column({ nullable: true })
  ucntE?: string;

  @Column({ nullable: true })
  ucolor?: string;

  @Column({ nullable: true })
  ukey?: string;

  @Column({ nullable: true })
  uperms?: string;

  @Column({ nullable: true })
  ustart?: string;

  @Column({ nullable: true })
  ustartmobile?: string;

  @Column({ nullable: true })
  ufieldRe?: string;

  @Column({ nullable: true })
  uroles?: string;

  @Column({ nullable: true })
  urolesBKUP?: string;

  @Column({ nullable: true })
  uassign?: string;

  @Column({ nullable: true })
  uwidgets?: string;

  @Column({ nullable: true, type: 'float' })
  urate?: number;

  @Column({ nullable: true })
  ulang?: string;

  @Column({ nullable: true })
  uintegrationcc?: string;

  @Column({ nullable: true })
  ucompanies?: string;

  @Column({ nullable: true })
  uservices?: string;

  @Column({ nullable: true, type: 'float' })
  usalesgoal?: number;

  @Column({ nullable: true, type: 'float' })
  usalesgoaly?: number;

  @Column({ nullable: true, type: 'float' })
  ustagingaccess?: number;

  @Column({ nullable: true, type: 'float' })
  umasteraccess?: number;

  // One-to-many relationship with PQ_leads
  // @OneToMany(() => Lead, (lead) => lead.user)
  leads: Lead[];
}
