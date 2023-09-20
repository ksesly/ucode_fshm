CREATE DATABASE ucode_web;
CREATE USER 'kslipko'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web.* TO 'kslipko'@'localhost';