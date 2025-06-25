CREATE DATABASE donor_db;


USE donor_db;


CREATE TABLE donors (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    nid BIGINT NOT NULL,
    dob DATE NOT NULL,
    email VARCHAR(50) NOT NULL,
    gender ENUM('male', 'female', 'other') NOT NULL,
    contact VARCHAR(15) NOT NULL,
    address VARCHAR(100) NOT NULL,
    blood_type ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') NOT NULL,
    height INT NOT NULL,
    weight INT NOT NULL,
    donated_before ENUM('yes', 'no') NOT NULL,
    allergies TEXT,
    disease_history TEXT,
    anemia ENUM('yes', 'no') NOT NULL,
    cardiac_patient ENUM('yes', 'no') NOT NULL,
    under_medication ENUM('yes', 'no') NOT NULL,
    password VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
