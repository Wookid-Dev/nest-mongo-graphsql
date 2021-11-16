import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { PetType } from './dto/create-pet.dto';
import { PetInput } from './inputs/pet.input';

@Resolver()
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [PetType])
  async pets() {
    return this.petsService.findAll();
  }

  @Mutation(() => PetType)
  async createPet(@Args('input') input: PetInput) {
    return this.petsService.create(input);
  }
}
