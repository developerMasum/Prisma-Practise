import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "new title12345",
  //       content: "content12345",
  //       authorName:"farhan12345"
  //     },
  //   });
  //   console.log(result);

  // -- get all

  const getAllFromDb = await prisma.post.findMany();
  console.log(getAllFromDb);
};

main();
