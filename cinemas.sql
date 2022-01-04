-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 24, 2021 at 05:27 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cinemas`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `overview` text DEFAULT NULL,
  `duration` tinyint(4) DEFAULT NULL,
  `age_rate` varchar(5) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `rating` float(3,1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `overview`, `duration`, `age_rate`, `genre`, `rating`, `created_at`, `updated_at`) VALUES
('9etsV9LM3dekoRyY', 'Hawkeye', 'Clint bertemu dengan Kate Bishop dan mereka menjadi rekan dalam menumpas geng jahat.', 120, '17+', 'Fantasi, Aksi, Petualangan', 8.0, '2021-12-18 08:50:58', '2021-12-18 09:11:01'),
('eqHtQe5-PxKvx0F3', 'Spiderman : No Way Home', 'Belum aku tonton:)', 120, 'SU', 'Fantasi, Romantis, Komedi, Aksi, Petualangan', 0.5, '2021-12-18 09:20:05', '2021-12-18 09:44:42'),
('Oq1y3a1vodo2IMzg', 'Shang Chi : The Legend Of Ten Rings', 'Shang Chi akan bertarung dengan bapaknya. Bapaknya akan gugur dalam pertarungan.', 127, '13+', 'Fantasi, Aksi', 9.5, '2021-12-17 15:23:23', '2021-12-18 09:19:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
