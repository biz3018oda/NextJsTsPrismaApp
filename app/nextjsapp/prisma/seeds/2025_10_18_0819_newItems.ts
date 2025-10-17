import { PrismaClient } from "../../src/generated/prisma";

const prisma = new PrismaClient();

export default async function seedOwners() {
  const new1 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
  });

  const new2 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
  });

  const new3 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      author: "@helloimnik",
    },
  });

  const new4 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      author: "@nolanissac",
    },
  });

  const new5 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      author: "@hjrc33",
    },
  });

  const new6 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
    },
  });

  const new7 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      author: "@tjdragotta",
    },
  });

  const new8 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      author: "@katie_wasserman",
    },
  });

  const new9 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      author: "@silverdalex",
    },
  });

  const new10 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
  });

  const new11 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      author: "@peterlaster",
    },
  });

  const new12 = await prisma.newItem.create({
    data: {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      author: "@southside_customs",
    },
  });

  console.log({
    new1,
    new2,
    new3,
    new4,
    new5,
    new6,
    new7,
    new8,
    new9,
    new10,
    new11,
    new12,
  });
}
