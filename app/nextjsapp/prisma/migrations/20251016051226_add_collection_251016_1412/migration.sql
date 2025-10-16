-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "image" TEXT,
    "title" TEXT,
    "author" TEXT,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);
