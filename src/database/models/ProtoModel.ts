import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("protos")
export class ProtoModel {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  dateString: string;

  @Column()
  isStored: boolean;
}
