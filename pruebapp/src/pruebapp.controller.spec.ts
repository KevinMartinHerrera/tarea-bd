import { Test, TestingModule } from '@nestjs/testing';
import { PruebappController } from './pruebapp.controller';
import { PruebappService } from './pruebapp.service';

describe('PruebappController', () => {
  let pruebappController: PruebappController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PruebappController],
      providers: [PruebappService],
    }).compile();

    pruebappController = app.get<PruebappController>(PruebappController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(pruebappController.getHello()).toBe('Hello World!');
    });
  });
});
