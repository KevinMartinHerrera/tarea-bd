import { Module } from '@nestjs/common';
import { PruebappController } from './pruebapp.controller';
import { PruebappService } from './pruebapp.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { config } from './orm.config';

@Module({
  imports: [TypeOrmModule.forRoot (({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'kev',
    password: 'postgres',
    database: 'my_db',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    retryDelay: 3000,
    retryAttempts: 10
  }),), UserModule],
  controllers: [PruebappController],
  providers: [PruebappService],
})
export class PruebappModule {}
