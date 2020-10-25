import { PrismaClient } from "@prisma/client";
import { Site } from "../domain/site";

export interface ISiteRepo {
  save(site: Site): Promise<void>;
}

export class SiteRepo implements ISiteRepo {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async save(site: Site): Promise<void> {
    const exists = await this.prisma.site.findOne({
      where: { id: site.id.toString() },
    });

    if (exists) {
      return;
    }

    await this.prisma.site.create({
      data: {
        id: site.id.toString(),
        name: site.name,
      },
    });
  }
}
