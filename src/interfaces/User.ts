export interface UserI {
    id?:       number;
    nombre:    string;
    apellidos: string;
    email:     string;
    password:  string;
    updatedAt: Date;
    createdAt: Date;
}