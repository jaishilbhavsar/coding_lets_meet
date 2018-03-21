-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2018 at 09:47 AM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lets_meet`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_tbl`
--

CREATE TABLE `category_tbl` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_tbl`
--

INSERT INTO `category_tbl` (`cat_id`, `cat_name`) VALUES
(1, 'Tech'),
(2, 'business'),
(3, 'Family'),
(4, 'Writing'),
(5, 'Social'),
(6, 'Food & Drink'),
(7, 'Learning'),
(8, 'Photography');

-- --------------------------------------------------------

--
-- Table structure for table `comment_tbl`
--

CREATE TABLE `comment_tbl` (
  `com_id` int(11) NOT NULL,
  `com_date` date NOT NULL,
  `com_des` varchar(300) NOT NULL,
  `fk_post_id` int(11) NOT NULL,
  `com_fk_user_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comment_tbl`
--

INSERT INTO `comment_tbl` (`com_id`, `com_date`, `com_des`, `fk_post_id`, `com_fk_user_id`) VALUES
(1, '2017-12-16', 'hello', 1, 'zeel91297@gmail.com'),
(3, '2017-12-03', 'hello', 2, 'jansaribhargavi1@gmail.com'),
(4, '2017-12-05', 'hiii', 2, 'zeel91297@gmail.com'),
(5, '2018-01-13', 'hello', 1, 'zeel91297@gmail.com'),
(6, '2018-01-13', 'hello', 1, 'zeel91297@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `communities_tbl`
--

CREATE TABLE `communities_tbl` (
  `comm_id` int(11) NOT NULL,
  `comm_name` varchar(20) NOT NULL,
  `comm_des` varchar(300) NOT NULL,
  `comm_pic` varchar(500) DEFAULT NULL,
  `comm_date` date NOT NULL,
  `comm_rating` int(11) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `comm_fk_cat_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `communities_tbl`
--

INSERT INTO `communities_tbl` (`comm_id`, `comm_name`, `comm_des`, `comm_pic`, `comm_date`, `comm_rating`, `created_by`, `comm_fk_cat_id`) VALUES
(1, 'ionic_community', 'People are going to learn about ionic.', 'comm.jpg', '2017-12-16', 3, 'zeel91297@gmail.com', 1),
(2, 'TMCC', 'In this participants get more knowledge about his/her career.', 'education.jpg', '2018-12-07', 4, 'jansaribhargavi1@gmail.com', 2),
(3, 'FERSA', 'In this there are many people who are faculties and also students.', 'fersa.jpg', '2017-12-13', 2, 'jaishilbhavsar@yahoo.in', 3),
(4, 'git_community', 'This community is for how to work on github.', 'git_comm.png', '2017-12-23', 4, 'jaishilbhavsar@yahoo.in', 1),
(5, 'ionic_community', 'people are going to learn about ionic.', 'comm.jpg', '2017-12-16', 2, 'jaishilbhavsar@yahoo.in', 1),
(6, 'sfsa', 'nvkjfd', '', '2017-12-29', 3, 'jansaribhargavi1@gmail.com', 2),
(7, 'dcvdx', 'dvfdfg', 'gfg', '2018-04-06', 0, 'jaishilbhavsar@yahoo.in', 3),
(8, 'dfs', 'dfg', 'community-1520426678467.jpg', '2018-04-06', 0, 'jaishilbhavsar@yahoo.in', 3),
(9, 'zzzz', 'dddd', 'community-1520427214551.jpg', '2018-03-07', 0, 'jaishilbhavsar@yahoo.in', 3);

-- --------------------------------------------------------

--
-- Table structure for table `comm_member_tbl`
--

CREATE TABLE `comm_member_tbl` (
  `join_id` int(11) NOT NULL,
  `fk_user_id` varchar(50) NOT NULL,
  `fk_comm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comm_member_tbl`
--

INSERT INTO `comm_member_tbl` (`join_id`, `fk_user_id`, `fk_comm_id`) VALUES
(3, 'zeel91297@gmail.com', 1),
(4, 'jansaribhargavi1@gmail.com', 1),
(5, 'jaishilbhavsar@yahoo.in', 2),
(6, 'jaishilbhavsar@yahoo.in', 3),
(7, 'jansaribhargavi1@gmail.com', 4),
(8, 'jansaribhargavi1@gmail.com', 3),
(15, 'jaishilbhavsar@yahoo.in', 4),
(17, 'jaishilbhavsar@yahoo.in', 1);

-- --------------------------------------------------------

--
-- Table structure for table `event_tbl`
--

CREATE TABLE `event_tbl` (
  `event_id` int(11) NOT NULL,
  `event_name` varchar(100) NOT NULL,
  `event_des` varchar(500) NOT NULL,
  `event_pic` varchar(500) NOT NULL,
  `event_s_time` time NOT NULL,
  `event_e_time` time NOT NULL,
  `event_date` date NOT NULL,
  `event_loc` varchar(100) NOT NULL,
  `fk_user_id` varchar(50) NOT NULL,
  `fk_comm_id` int(11) NOT NULL,
  `event_verify` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_tbl`
--

INSERT INTO `event_tbl` (`event_id`, `event_name`, `event_des`, `event_pic`, `event_s_time`, `event_e_time`, `event_date`, `event_loc`, `fk_user_id`, `fk_comm_id`, `event_verify`) VALUES
(1, 'workshopfor c and ++', 'this event shows importance of c and c++', 'assets\\img\\events\\c-and-c++-training-in-acte.jpg', '07:30:00', '11:30:00', '2018-04-17', 'Navrangpura', 'zeel91297@gmail.com', 1, 'true'),
(2, 'Genesis 17', '', 'assets/img/events/poster (1)_1-2017121513.jpg', '00:00:00', '00:00:00', '2018-03-21', 'Sri Ramakrishna Engineering College,Coimbatore, Tamil Nadu', 'zeel91297@gmail.com', 1, 'true'),
(3, 'International Workshop on Android Application Development IWAAD 17', 'Android is an open source mobile OS led by Google. This workshop introduces about Android, the fastest growing mobile OS. The job opportunities in this stream are not only restricted to the manufacturing, repairing and maintenance of mobile handsets but also it provides a lot of career opportunities in mobile application development for software professionals.', 'assets\\img\\events\\iwaad1.jpg', '00:00:00', '00:00:00', '2018-05-01', 'Coimbatore Institute of Technology,\r\nAuditorium,Civil Aerodrome\r\nCoimbatore-641004\r\nTamilnadu, India', 'zeel91297@gmail.com', 1, 'true'),
(4, 'Workshop on IoT for Beginners', 'Understanding IoT & its Working Methodologies\r\nThe Arduino Platform\r\nReading data from Sensors\r\nLED Programming & Interface of Sensors\r\nReading Environment Values on Android SmartPhone\r\nHow to connect your Arduino kit to your Android Phone', 'assets\\img\\events\\Eventlogo.gif', '00:00:00', '00:00:00', '2018-04-26', 'Kongu Engineering College, Erode, Tamil Nadu', 'zeel91297@gmail.com', 1, 'true'),
(5, 'Embedded Systems Programming Workshop', 'Embedded systems programming is the programming of an embedded system in some device using the permitted programming interfaces.\r\n\r\nHow do I learn embedded systems programming?\r\n\r\nJoin One Day Practical Sessions on Embedded Programming at IITM Research Park, Chennai. Hosted by EnggForum\r\n\r\nSession will highlight :\r\n\r\nEmbedded C Programming .\r\nMP LAB IDE HITECH C-Compiler .\r\nEmbedded Systems Example Programs .\r\nAddressing modules & more\r\nScope & Job Opportunities .', 'assets\\img\\events\\EMBED_EFO-2017111602.gif', '00:00:00', '00:00:00', '2018-04-09', 'Chennai, Tamil Nadu', 'jaishilbhavsar@yahoo.in', 2, 'true'),
(6, 'lkdnlks', 'lkdnsdcskakddckdnskcn', 'undefined-1520268766271.jpg', '16:52:00', '16:52:00', '2018-03-05', 'sdncdskcnskdsndkadmsdcmdscmksld', 'jaishilbhavsar@yahoo.in', 6, 'true'),
(7, 'got', 'scbdskjcndaslcnsdjcn', 'image-1520268946068.jpg', '16:55:00', '16:55:00', '2018-03-07', 'scndslcnmskdlckndssd', 'jaishilbhavsar@yahoo.in', 2, 'true'),
(8, 'jbdj', 'skdcbsjdblksndckjdsbc', 'image-1520419208389.jpg', '10:39:00', '10:39:00', '2018-03-09', 'klsdckjscblkdlbasdb', 'jaishilbhavsar@yahoo.in', 2, 'true');

-- --------------------------------------------------------

--
-- Table structure for table `feedback_tbl`
--

CREATE TABLE `feedback_tbl` (
  `feed_id` int(11) NOT NULL,
  `feed_des` varchar(200) NOT NULL,
  `feed_fk_event_id` int(11) NOT NULL,
  `feed_fk_user_id` varchar(50) NOT NULL,
  `feed_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback_tbl`
--

INSERT INTO `feedback_tbl` (`feed_id`, `feed_des`, `feed_fk_event_id`, `feed_fk_user_id`, `feed_date`) VALUES
(1, 'It was a very good experience.', 1, 'zeel91297@gmail.com', '2018-01-15'),
(2, 'Please do such events. I would love to be part of it.', 1, 'jansaribhargavi1@gmail.com', '2018-01-09'),
(4, 'good experience', 1, 'jaishilbhavsar@yahoo.in', '2018-01-28'),
(6, 'hello', 1, 'jaishilbhavsar@yahoo.in', '2018-02-02');

-- --------------------------------------------------------

--
-- Table structure for table `follower_tbl`
--

CREATE TABLE `follower_tbl` (
  `follow_id` int(11) NOT NULL,
  `fk_user_id` varchar(50) NOT NULL,
  `fk_us_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `follower_tbl`
--

INSERT INTO `follower_tbl` (`follow_id`, `fk_user_id`, `fk_us_id`) VALUES
(1, 'zeel91297@gmail.com', 'jansaribhargavi1@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `like_tbl`
--

CREATE TABLE `like_tbl` (
  `like_id` int(11) NOT NULL,
  `like_fk_post_id` int(11) NOT NULL,
  `like_fk_user_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `like_tbl`
--

INSERT INTO `like_tbl` (`like_id`, `like_fk_post_id`, `like_fk_user_id`) VALUES
(1, 2, 'zeel91297@gmail.com'),
(3, 2, 'jansaribhargavi1@gmail.com'),
(5, 1, 'jaishilbhavsar@yahoo.in'),
(9, 6, 'jaishilbhavsar@yahoo.in'),
(11, 2, 'jaishilbhavsar@yahoo.in');

-- --------------------------------------------------------

--
-- Table structure for table `polls_tbl`
--

CREATE TABLE `polls_tbl` (
  `poll_id` int(11) NOT NULL,
  `poll_title` varchar(100) NOT NULL,
  `option_1` varchar(50) NOT NULL,
  `option_2` varchar(50) NOT NULL,
  `option_3` varchar(50) NOT NULL,
  `option_4` varchar(50) NOT NULL,
  `fk_user_id` varchar(50) NOT NULL,
  `fk_comm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `polls_tbl`
--

INSERT INTO `polls_tbl` (`poll_id`, `poll_title`, `option_1`, `option_2`, `option_3`, `option_4`, `fk_user_id`, `fk_comm_id`) VALUES
(1, 'Who is better?', 'Jon', 'Tyrion', 'Tywin', 'Jaime', 'zeel91297@gmail.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `post_tbl`
--

CREATE TABLE `post_tbl` (
  `post_id` int(11) NOT NULL,
  `post_title` varchar(200) NOT NULL,
  `post_des` varchar(1500) NOT NULL,
  `post_pic` varchar(500) NOT NULL,
  `post_date` date NOT NULL,
  `post_fk_user_id` varchar(50) NOT NULL,
  `fk_comm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post_tbl`
--

INSERT INTO `post_tbl` (`post_id`, `post_title`, `post_des`, `post_pic`, `post_date`, `post_fk_user_id`, `fk_comm_id`) VALUES
(1, 'hello1', 'hiii', 'szldcmdzl', '2017-12-01', 'jansaribhargavi1@gmail.com', 2),
(2, 'Ionic Apps Featured in Apple’s Best of 2017', 'Every year, Apple chooses a number of top apps and developers to feature in their Best of 2017 List, and this year the Ionic Developer community is crushing it. Some of the Ionic apps that have made it into the chosen few are:\r\n\r\nSworkit by Nexercise is one of the top-rated health and fitness apps ever. It has a rating of 5 stars by nearly 25,000 users and boasts about 2.5 million monthly actives. It’s hard to believe that Ryan Hanna built the app in just ten weeks. Well done Ryan!\r\nPacifica Labs With a 4.5 star rating by nearly 2,000 users, and with over 1 million downloads, it’s easy to see why this therapy app that supports and helps users manage their anxiety and stress made this year’s cut.\r\n\r\nThere may be other Ionic apps in the Best of 2017 List, so if we missed one let us know in the comments and we’ll give it a shout out! We are very proud of each and every developer that has chosen Ionic as their app platform and congratulate this year’s winners', 'assets\\img\\posts\\appstore-feature.jpg', '2018-01-01', 'zeel91297@gmail.com', 1),
(3, 'Announcing Ionic DevApp', 'At Ionic, we’re always looking for ways to enable developers to build amazing apps faster and easier than ever before. Today we’re announcing something totally new to bring a nice improvement to your mobile development workflow: Ionic DevApp.\r\n\r\nDevApp is a 100% free mobile app for iOS and Android that makes it easy to test apps directly on your devices. DevApp offers a realtime view of changes as you’re making them, with a rich library of pre-installed native plugins to test every feature of your app.\r\n\r\nIt’s basically ionic serve with native support, running on all your devices.', 'assets\\img\\posts\\devapp-image.jpg', '2017-12-09', 'jaishilbhavsar@yahoo.in', 1),
(4, 'heyy', 'hiii', 'szldcmdzl', '2017-11-29', 'zeel91297@gmail.com', 2),
(5, 'heyy', 'hiii', 'szldcmdzl', '2018-01-14', 'zeel91297@gmail.com', 2),
(6, 'Game of Thrones', 'abcdefghijk', 'post-1520593425379.jpg', '2018-03-09', 'jaishilbhavsar@yahoo.in', 3);

-- --------------------------------------------------------

--
-- Table structure for table `ratings_tbl`
--

CREATE TABLE `ratings_tbl` (
  `rate_id` int(11) NOT NULL,
  `rate_value` int(11) NOT NULL,
  `rate_fk_comm_id` int(11) NOT NULL,
  `rate_fk_user_id` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rsvp_tbl`
--

CREATE TABLE `rsvp_tbl` (
  `RSVP_id` int(11) NOT NULL,
  `rsvp_fk_user_id` varchar(50) NOT NULL,
  `fk_event_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rsvp_tbl`
--

INSERT INTO `rsvp_tbl` (`RSVP_id`, `rsvp_fk_user_id`, `fk_event_id`) VALUES
(3, 'jansaribhargavi1@gmail.com', 1),
(19, 'jaishilbhavsar@yahoo.in', 6),
(20, 'jaishilbhavsar@yahoo.in', 7),
(34, 'jaishilbhavsar@yahoo.in', 4),
(35, 'zeel91297@gmail.com', 7),
(39, 'zeel91297@gmail.com', 4);

-- --------------------------------------------------------

--
-- Table structure for table `story_tbl`
--

CREATE TABLE `story_tbl` (
  `story_id` int(11) NOT NULL,
  `story_pic` varchar(500) NOT NULL,
  `story_title` varchar(100) NOT NULL,
  `story_time` datetime NOT NULL,
  `fk_user_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `story_tbl`
--

INSERT INTO `story_tbl` (`story_id`, `story_pic`, `story_title`, `story_time`, `fk_user_id`) VALUES
(1, 'abcde', 'hello / hey  world', '2017-12-13 00:00:00', 'zeel91297@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE `user_tbl` (
  `user_id` varchar(30) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_pass` varchar(10) NOT NULL,
  `user_pic` varchar(500) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `user_mob_no` varchar(15) NOT NULL,
  `user_bdate` date NOT NULL,
  `token` varchar(10) NOT NULL,
  `verify` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`user_id`, `user_name`, `user_pass`, `user_pic`, `gender`, `user_mob_no`, `user_bdate`, `token`, `verify`) VALUES
('jaishilbhavsar@yahoo.in', 'Jaishil Bhavsar', 'jaishil', '', 'Male', '9722875064', '1998-07-10', '', 'true'),
('jansaribhargavi1@gmail.com', 'Bhargavi Jansari', '12345', '', 'Female', '7405497844', '1998-04-17', '', 'true'),
('zeel91297@gmail.com', 'zeel', '12234', 'assets\\img\\users\\minion.jpg', 'Female', '8460816553', '2017-12-08', '', 'true');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_tbl`
--
ALTER TABLE `category_tbl`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `comment_tbl`
--
ALTER TABLE `comment_tbl`
  ADD PRIMARY KEY (`com_id`);

--
-- Indexes for table `communities_tbl`
--
ALTER TABLE `communities_tbl`
  ADD PRIMARY KEY (`comm_id`);

--
-- Indexes for table `comm_member_tbl`
--
ALTER TABLE `comm_member_tbl`
  ADD PRIMARY KEY (`join_id`);

--
-- Indexes for table `event_tbl`
--
ALTER TABLE `event_tbl`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `feedback_tbl`
--
ALTER TABLE `feedback_tbl`
  ADD PRIMARY KEY (`feed_id`);

--
-- Indexes for table `follower_tbl`
--
ALTER TABLE `follower_tbl`
  ADD PRIMARY KEY (`follow_id`);

--
-- Indexes for table `like_tbl`
--
ALTER TABLE `like_tbl`
  ADD PRIMARY KEY (`like_id`);

--
-- Indexes for table `polls_tbl`
--
ALTER TABLE `polls_tbl`
  ADD PRIMARY KEY (`poll_id`);

--
-- Indexes for table `post_tbl`
--
ALTER TABLE `post_tbl`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `ratings_tbl`
--
ALTER TABLE `ratings_tbl`
  ADD PRIMARY KEY (`rate_id`);

--
-- Indexes for table `rsvp_tbl`
--
ALTER TABLE `rsvp_tbl`
  ADD PRIMARY KEY (`RSVP_id`);

--
-- Indexes for table `story_tbl`
--
ALTER TABLE `story_tbl`
  ADD PRIMARY KEY (`story_id`);

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_mob_no` (`user_mob_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_tbl`
--
ALTER TABLE `category_tbl`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `comment_tbl`
--
ALTER TABLE `comment_tbl`
  MODIFY `com_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `communities_tbl`
--
ALTER TABLE `communities_tbl`
  MODIFY `comm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `comm_member_tbl`
--
ALTER TABLE `comm_member_tbl`
  MODIFY `join_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `event_tbl`
--
ALTER TABLE `event_tbl`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `feedback_tbl`
--
ALTER TABLE `feedback_tbl`
  MODIFY `feed_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `follower_tbl`
--
ALTER TABLE `follower_tbl`
  MODIFY `follow_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `like_tbl`
--
ALTER TABLE `like_tbl`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `polls_tbl`
--
ALTER TABLE `polls_tbl`
  MODIFY `poll_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `post_tbl`
--
ALTER TABLE `post_tbl`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `ratings_tbl`
--
ALTER TABLE `ratings_tbl`
  MODIFY `rate_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `rsvp_tbl`
--
ALTER TABLE `rsvp_tbl`
  MODIFY `RSVP_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `story_tbl`
--
ALTER TABLE `story_tbl`
  MODIFY `story_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
