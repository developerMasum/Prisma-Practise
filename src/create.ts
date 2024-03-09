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

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "new1",
        content: "cont",
        authorName: "fa",
      },
      {
        title: "news2",
        content: "conts",
        authorName: "fas",
      },
      {
        title: "dnews2",
        content: "dconts",
        authorName: "dfas",
      },
    ],
  });

  console.log({ createMany });
};

main();
