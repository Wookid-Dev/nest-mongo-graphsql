import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetSchema } from './pets.schema';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { PetController } from './pets.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'Pet', schema: PetSchema }]),
  ],
  controllers: [PetController],
  providers: [PetsResolver, PetsService],
})
export class PetsModule {}
