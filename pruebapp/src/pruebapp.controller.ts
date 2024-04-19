import { Controller, Get } from '@nestjs/common';
import { PruebappService } from './pruebapp.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class PruebappController {
  constructor(private readonly pruebappService: PruebappService) {}

/*   @Get()
  getHello(): string {
    return this.pruebappService.getHello();
  } */
  @EventPattern('user_created')
  async handleUserCreated(data: any) {
    console.log("hola")
    // business logic
  }
}
