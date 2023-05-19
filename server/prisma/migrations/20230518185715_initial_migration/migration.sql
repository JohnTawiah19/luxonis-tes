-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "labels" TEXT[],
    "imgs" TEXT[],

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
