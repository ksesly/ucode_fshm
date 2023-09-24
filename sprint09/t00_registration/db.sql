CREATE DATABASE db;
CREATE USER 'kslipko'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON db.* TO 'kslipko'@'localhost';

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    UNIQUE KEY email_prefix (email(191))
);
