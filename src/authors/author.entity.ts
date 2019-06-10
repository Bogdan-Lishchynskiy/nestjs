import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import { Book } from '../books/book.entity';

@Entity({name: "author"})
export class Author {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({ type: "varchar", length: "230" })
    firstName: string;

    @Column({ type: "varchar", length: "230" })
    lastName: string;
}
