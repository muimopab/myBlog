-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2021-01-26 11:25:51
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- 表的结构 `blog_articles`
--

CREATE TABLE `blog_articles` (
  `articleId` int(11) NOT NULL COMMENT '文章id',
  `articleTitle` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `articleContent` varchar(10000) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '文章内容',
  `articleAuthorId` int(11) DEFAULT NULL COMMENT '文章作者id',
  `articleType` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '技术类' COMMENT '文章类型',
  `articleTypeCode` int(100) NOT NULL DEFAULT '1' COMMENT '文章类型编码',
  `createDate` bigint(20) NOT NULL COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `blog_articles`
--

INSERT INTO `blog_articles` (`articleId`, `articleTitle`, `articleContent`, `articleAuthorId`, `articleType`, `articleTypeCode`, `createDate`) VALUES
(1, '????', '<p>这是内容</p>\n', NULL, '1', 1, 0),
(2, '这是标题123', '<p>这是内容123</p>\n', NULL, '1', 1, 0),
(3, '这是标题1234', '<p>这是内容1234</p>\n', NULL, '1', 1, 0),
(4, '这是标题1234', '<p>这是内容1234</p>\n', NULL, '1', 1, 1611571283910),
(5, '标题123', '1', 2147483647, '技术类', 0, 0),
(6, '这是标题', '<p>这是内容</p>\n', NULL, '技术类', 1, 1611626760776),
(7, '这是标题', '<p>这是内容</p>\n', NULL, '技术类', 1, 1611627583414),
(8, '这是标题', '<p>这是内容</p>\n', NULL, '技术类', 1, 1611628315403),
(9, '这是标题', '<p>这是内容</p>\n', NULL, '技术类', 1, 1611628662303),
(10, '这是标题', '<p>这是内容</p>\n', NULL, '技术类', 1, 1611628737894),
(11, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611628924611),
(12, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611629180608),
(13, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611629233535),
(14, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611631329875),
(15, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611631351962),
(16, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611632019930),
(17, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611632112793),
(18, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611632198792),
(19, '123', '', NULL, '技术类', 1, 1611632262471),
(20, '123', '', NULL, '技术类', 1, 1611632448828),
(21, '123', '', NULL, '技术类', 1, 1611632491652),
(22, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611632611250),
(23, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611632622801),
(24, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611632666562),
(25, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611632800623),
(26, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611633305089),
(27, '23', '<p>123</p>\n', NULL, '技术类', 1, 1611633375249),
(28, '123', '<p>123</p>\n', NULL, '技术类', 1, 1611633529494),
(29, 'qweqweq', '<p>qwewq</p>\n', NULL, '技术类', 1, 1611644943046),
(30, 'qwewq', '<p>qweqwe</p>\n', NULL, '技术类', 1, 1611645319977),
(31, 'qweqwew', '<p>qweqwe</p>\n', NULL, '技术类', 1, 1611645639068),
(32, 'qweqwe', '<p>qweqwe</p>\n', NULL, '技术类', 1, 1611646310548),
(33, 'qweqwe', '<p>qweqwe</p>\n', NULL, '技术类', 1, 1611646325067),
(34, 'qweqwe', '<p>qweqwe</p>\n', NULL, '技术类', 1, 1611646333267),
(35, '', '', NULL, '技术类', 1, 1611646432193),
(36, 'qwewq', '', NULL, '技术类', 1, 1611646481330),
(37, 'qweq', '<p>qwew</p>\n', NULL, '技术类', 1, 1611646584848),
(38, 'qweqwe', '<p>qweqwe</p>\n', NULL, '技术类', 1, 1611648048581),
(39, 'qweq', '<p>qweqwe</p>\n', NULL, '技术类', 1, 1611648139859),
(40, 'qweqw', '', NULL, '技术类', 1, 1611648193571),
(41, '123', '', NULL, '技术类', 1, 1611648277810),
(42, '12', '<p>123</p>\n', NULL, '技术类', 1, 1611648317050),
(43, 'qweqw', '<p>qew</p>\n', NULL, '技术类', 1, 1611648403568),
(44, 'qwe', '', NULL, '技术类', 1, 1611648445207),
(45, 'qwe', '', NULL, '技术类', 1, 1611648513886),
(46, 'qwew', '', NULL, '技术类', 1, 1611648589397),
(47, 'qweq', '<p>qweq</p>\n', NULL, '技术类', 1, 1611648838466),
(48, 'qweq', '', NULL, '技术类', 1, 1611648904209),
(49, 'qweqw', '<p>qweq</p>\n', NULL, '技术类', 1, 1611648960792),
(50, 'qweqw', '<p>qweq</p>\n', NULL, '技术类', 1, 1611649952355),
(51, 'qweqw', '<p>qwe</p>\n', NULL, '技术类', 1, 1611649995682),
(52, 'qwe', '<p>qweqwe</p>\n', NULL, '技术类', 1, 1611650014842),
(53, 'qwe', '<p>qweq</p>\n', NULL, '技术类', 1, 1611650118065),
(54, 'qwee', '<p>qweq</p>\n', NULL, '技术类', 1, 1611650172544),
(55, 'qwe', '<p>qwe</p>\n', NULL, '技术类', 1, 1611650554602),
(56, 'qwe', '', NULL, '技术类', 1, 1611650626690),
(57, 'qwe', '<p>qwe</p>\n', NULL, '技术类', 1, 1611650650154),
(58, 'qwe', '', NULL, '技术类', 1, 1611650669777),
(59, 'qwe', '<p>qwe</p>\n', NULL, '技术类', 1, 1611650707000),
(60, 'qwe', '', NULL, '技术类', 1, 1611650743232),
(61, 'qwe', '<p>qwe</p>\n', NULL, '技术类', 1, 1611650787751);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_articles`
--
ALTER TABLE `blog_articles`
  ADD PRIMARY KEY (`articleId`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `blog_articles`
--
ALTER TABLE `blog_articles`
  MODIFY `articleId` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章id', AUTO_INCREMENT=62;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
