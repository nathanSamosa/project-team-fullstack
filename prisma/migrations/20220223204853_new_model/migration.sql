/*
  Warnings:

  - You are about to drop the column `type1` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `type2` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `typePrimary` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "type1",
DROP COLUMN "type2",
ADD COLUMN     "typePrimary" TEXT NOT NULL,
ADD COLUMN     "typeSecondary" TEXT;
