/*
  Warnings:

  - You are about to drop the column `ratingAvg` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `ratingCount` on the `Pokemon` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "ratingAvg",
DROP COLUMN "ratingCount";
