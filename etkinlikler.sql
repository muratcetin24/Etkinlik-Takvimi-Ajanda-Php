# Host: Localhost  (Version 5.0.83-community-nt)
# Date: 2021-11-18 10:40:23
# Generator: MySQL-Front 6.1  (Build 1.26)


#
# Structure for table "etkinlikler"
#

DROP TABLE IF EXISTS `etkinlikler`;
CREATE TABLE `etkinlikler` (
  `id` int(11) NOT NULL auto_increment,
  `title` varchar(255) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime default NULL,
  `allDay` varchar(255) NOT NULL default 'false',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin5;

#
# Data for table "etkinlikler"
#

