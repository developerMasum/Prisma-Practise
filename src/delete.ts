import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const deleteData = async () => {
//   const result = await prisma.post.delete({
//     where: {
//         id: 12
//       },
//   });
//   console.log(result);
// };

const deleteManyData = async () => {
  const result = await prisma.post.deleteMany({
    where: {
        content:"content123"
      },
  });
  console.log(result);
};

// deleteData();
deleteManyData()
