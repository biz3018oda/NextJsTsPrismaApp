-- CreateTable
CREATE TABLE "NewItem" (
    "id" SERIAL NOT NULL,
    "img" TEXT,
    "title" TEXT,
    "author" TEXT,

    CONSTRAINT "NewItem_pkey" PRIMARY KEY ("id")
);
