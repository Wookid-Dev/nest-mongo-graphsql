import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet } from './interfaces/pet.interface';
import { PetInput } from './inputs/pet.input';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

@Injectable()
export class PetsService {
  constructor(
    @InjectModel('Pet') private readonly petModel: Model<Pet>,
    private readonly HttpService: HttpService,
  ) {}

  async create(createPetDto: PetInput): Promise<Pet> {
    const createdPet = new this.petModel(createPetDto);
    return await createdPet.save();
  }

  async findAll(): Promise<Pet[]> {
    return await this.petModel.find().exec();
  }

  public async getPets() {
    return 'ok';
  }

  public testPost(): Observable<AxiosResponse<object>> {
    return this.HttpService.get(
      'https://jsonplaceholder.typicode.com/posts',
    ).pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data;
      }),
    );
  }
}

// /** source/controllers/posts.ts */
// import { Request, Response, NextFunction } from 'express';
// import axios, { AxiosResponse } from 'axios';
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// interface Post {
//     fact: String;
//     length: Number;
// }

// // getting all posts
// const getPosts = async (req: Request, res: Response, next: NextFunction) => {
//     // get some posts
//     let result: AxiosResponse = await axios.get(`https://catfact.ninja/fact`);
//     let posts: [Post] = result.data;
//     return res.status(200).json({
//         message: posts
//     });
// };

// // getting a single post
// const getPost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from the req
//     let id: string = req.params.id;
//     // get the post
//     let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     let post: Post = result.data;
//     return res.status(200).json({
//         message: post
//     });
// };

// // updating a post
// const updatePost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from the req.params
//     let id: string = req.params.id;
//     // get the data from req.body
//     let title: string = req.body.title ?? null;
//     let body: string = req.body.body ?? null;
//     // update the post
//     let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         ...(title && { title }),
//         ...(body && { body })
//     });
//     // return response
//     return res.status(200).json({
//         message: response.data
//     });
// };

// // deleting a post
// const deletePost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from req.params
//     let id: string = req.params.id;
//     // delete the post
//     let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     // return response
//     return res.status(200).json({
//         message: 'post deleted successfully'
//     });
// };

// // adding a post
// const addPost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the data from req.body
//     let title: string = req.body.title;
//     let body: string = req.body.body;
//     // add the post
//     let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
//         title,
//         body
//     });
//     // return response
//     return res.status(200).json({
//         message: response.data
//     });
// };

// const testPost = () => {
//     const Http = new XMLHttpRequest();
//     const url ='https://jsonplaceholder.typicode.com/posts';
//     Http.open('GET', url);
//     Http.send();

//     Http.onreadystatechange = () => {
//         console.log(Http.responseText)
//     }
// }

// export default { getPosts, getPost, updatePost, deletePost, addPost, testPost };
