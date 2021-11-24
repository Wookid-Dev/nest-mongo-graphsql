import { HttpService } from '@nestjs/axios';
import { Controller, Get, Post } from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('pet')
export class PetController {
  constructor(
    private petsService: PetsService,
    private HttpService: HttpService,
  ) {}

  @Get()
  async getPets() {
    return this.petsService.getPets();
  }

  @Get('/test')
  async testPost() {
    return this.petsService.testPost();
  }
}
