import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async()=>{
    // const offSetData = await prisma.post.findMany({
    //     skip: 2,
    //     take: 2
    // })
    // console.log(offSetData);
    // const offSetData = await prisma.post.findMany({
    //     skip: 2,
    //     take: 2,
    //     cursor:{
    //         id:15
    //     }
    // })
    // console.log(offSetData);

    const sortedData = await prisma.post.findMany({
        orderBy:{
            authorName:'asc'
        }
    })
console.log(sortedData);
}

paginationSorting()