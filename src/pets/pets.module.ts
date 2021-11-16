import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetSchema } from './pets.schema';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pet', schema: PetSchema }])],
  providers: [PetsResolver, PetsService],
})
export class PetsModule {}
