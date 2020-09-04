import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Entity = um model que será salvo no db
// appointments = nome da tabela
// Decorador vai passar que esse nosso modal será salvo dentro da tabela appointments
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
