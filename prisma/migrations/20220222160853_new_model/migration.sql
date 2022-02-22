/*
  Warnings:

  - Added the required column `art` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type1` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "art" TEXT NOT NULL,
ADD COLUMN     "type1" TEXT NOT NULL,
ADD COLUMN     "type2" TEXT;
