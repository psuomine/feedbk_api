
import { Entity } from "./Entity";
import { UniqueEntityID } from "./UniqueEntityID";

// This class will implement domain events later
export abstract class AggregateRoot<T> extends Entity<T> {
  get id (): UniqueEntityID {
    return this._id;
  }
}