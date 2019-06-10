import { OneToOne, JoinColumn, Entity, PrimaryColumn } from 'typeorm';
import { Author } from '../authors/author.entity';
import { Book } from '../books/book.entity';

@Entity({name: "author_books"})
export class AuthorBooks {

    @PrimaryColumn("int") authorId: number;

    @PrimaryColumn("int") bookId: number;


    @OneToOne(() => Author)
    @JoinColumn()
    author: Author;

    @OneToOne(() => Book)
    @JoinColumn()
    book: Book;

}




