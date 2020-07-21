import {Entity, Column} from "typeorm";

@Entity()
export class Ingredients {

    @Column()
    id: number;

    @Column()
    name: string;
   
}