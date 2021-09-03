import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'PRGG05 - Framework test - NestJS <br> Lucas van der Vegt';
  }
}
