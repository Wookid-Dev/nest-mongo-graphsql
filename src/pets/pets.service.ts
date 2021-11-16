import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet } from './interfaces/pet.interface';
import { PetInput } from './inputs/pet.input';

@Injectable()
export class PetsService {
  constructor(@InjectModel('Pet') private readonly petModel: Model<Pet>) {}

  async create(createPetDto: PetInput): Promise<Pet> {
    const createdPet = new this.petModel(createPetDto);
    return await createdPet.save();
  }

  async findAll(): Promise<Pet[]> {
    return await this.petModel.find().exec();
  }
}
