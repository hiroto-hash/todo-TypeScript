---- drop ----
DROP TABLE IF EXISTS `test_table`;

---- create ----
create table IF not exists `test_table`
(
 `id`               INT(20) AUTO_INCREMENT,
 `name`             VARCHAR(20) NOT NULL,
 `created_at`       Datetime DEFAULT NULL,
 `updated_at`       Datetime DEFAULT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- data --
INSERT INTO `test_table` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'テスト', '2020-12-06 10:26:18', '2020-12-06 10:26:26');