import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('PRUEBA_SERVICE') private client: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  newUser(user:any){
    const mockUser={
      email:'hola@gmail.com',
      nombre :'juan',
    }
    this.client.emit("new_email",mockUser)
    return "mensaje enviado"
  }
}
