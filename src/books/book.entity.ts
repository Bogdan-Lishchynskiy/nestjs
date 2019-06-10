import { ManyToMany, JoinTable, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from '../authors/author.entity';

@Entity({name: "book"})
export class Book {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string;

    @ManyToMany(() => Author)
    @JoinTable({ name: "author_books" })
    authors: Author[];

}




