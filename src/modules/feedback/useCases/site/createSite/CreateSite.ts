import { UseCase } from "../../../../../shared/core/UseCase"; 
import { CreateSiteDTO } from './CreateSiteDTO'
import { Either, Result, left, right } from "../../../../../shared/core/Result";

type Response = Either<
  Result<any>,
  Result<void>
>

export class CreateSite implements UseCase<CreateSiteDTO, Promise<Response>> {

    public async execute(request: CreateSiteDTO): Promise<Response>  {
        return left("yolo");
    }
}