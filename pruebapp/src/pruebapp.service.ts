import { Injectable } from '@nestjs/common';

@Injectable()
export class PruebappService {
  getHello(): string {
    return 'Hello World!';
  }
}
