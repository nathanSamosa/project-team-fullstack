/*
  Warnings:

  - You are about to drop the column `rating` on the `Rating` table. All the data in the column will be lost.
  - Added the required column `companion` to the `Rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `design` to the `Rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strength` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Rating_profileId_key";

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "rating",
ADD COLUMN     "companion" INTEGER NOT NULL,
ADD COLUMN     "design" INTEGER NOT NULL,
ADD COLUMN     "strength" INTEGER NOT NULL;
