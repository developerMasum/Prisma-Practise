import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // -- get all
  const getAllFromDb = await prisma.post.findMany();
  //   get single
  const findFirst = await prisma.post.findFirst({
    where: {
      published: false,
    },
  });
  // get single and throw error
  //   const findFirstAndError = await prisma.post.findFirstOrThrow({
  //     where: {
  //       published: true,
  //     },
  //   });
  //   unique find
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 8,
    },
  });

  console.log({ findUnique });
};

main();
