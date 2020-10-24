import { PrismaClient } from "@prisma/client";
import { Site } from "../domain/site";

export interface ISiteRepo {
  save(site: Site): Promise<void>;
}

export class SiteRepo implements ISiteRepo {
  private prisma: any;

  constructor() {
    this.prisma = new PrismaClient();
  }
}
