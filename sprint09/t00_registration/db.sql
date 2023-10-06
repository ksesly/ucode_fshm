CREATE DATABASE ucode_web;
CREATE USER 'kslipko'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web.* TO 'kslipko'@'localhost';


CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    UNIQUE KEY unique_email (email)
);
