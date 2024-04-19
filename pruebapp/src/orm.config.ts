import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'kev',
    password: 'postgres',
    database: 'my_db',
synchronize: true,
entities: ['dist/**/**/*.entity.js'],

}