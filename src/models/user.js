import knex from "../lib/Knex.js";
import { Model } from "objection";

Model.knex(knex);

export class User extends Model {
  static get tableName() {
    return "users";
  }
}