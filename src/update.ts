import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const post = await prisma.post.update({
  //     where: { id: 19 },
  //     data: {
  //       title: "Updated value",
  //       published: true,
  //       authorName:'Josim UDDIN'
  //     },
  //   });

  // -- update many

  //   const updateMany = await prisma.post.updateMany({
  //     where: { authorName: "farhan12"},
  //     data: {
  //       title: "Updated value",
  //       published: true,
  //       authorName:'Josim UDDIN'
  //     },
  //   });
  //   console.log({updateMany});

  // ---upsert

  const upsertData = await prisma.post.upsert({
    where: {
      id: 20,
    },

    update: {
      authorName: "author upsert",
    },
    create: {
      title: "update ti",
      content: "ccccccc",
    },
  });
  console.log(upsertData);
};

updates();
