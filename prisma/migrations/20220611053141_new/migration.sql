-- DropForeignKey
ALTER TABLE `CartItem` DROP FOREIGN KEY `CartItem_cartId_fkey`;

-- AddForeignKey
ALTER TABLE `CartItem` ADD CONSTRAINT `CartItem_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `Cart`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
