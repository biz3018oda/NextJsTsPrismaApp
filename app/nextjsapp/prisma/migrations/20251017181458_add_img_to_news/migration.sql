-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "date" TEXT,
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);
