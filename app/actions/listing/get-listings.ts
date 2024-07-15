import prisma from "@/prisma/db";

interface GetListingsOptions {
  includeImages?: boolean;
  where?: {
    active?: boolean;
    userId?: {
      not?: number;
      equals?: number;
    };
  };
}

export async function getListings(options?: GetListingsOptions) {
  return await prisma.listing.findMany({
    include: {
      images: options?.includeImages ?? true,
    },
    where: options?.where ?? {},
  });
}
