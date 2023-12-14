USE purawdhika_branch;

-- 01. Try to create table with output look like image below:
CREATE TABLE Branches (
  id INT PRIMARY KEY AUTO_INCREMENT,
  branch_name VARCHAR(255),
  pic VARCHAR(255),
  address VARCHAR(500),
  city VARCHAR(500),
  province VARCHAR(255)
);

INSERT INTO Branches (
  branch_name,
  pic,
  address,
  city,
  province
) VALUES 
('BSD', 'THOMAS', 'GREEN OFFICE PARK 9', 'BSD', 'TANGERANG'),
('JKT', 'BUDI', 'MSIG TOWER', 'JAKARTA SELATAN', 'JAKARTA'),
('BTM', 'ANGEL', 'NONGSA', 'BATAM', 'KEP. RIAU');

SELECT * FROM Branches;

-- 02. Change PIC name into Dono if city is BSD
UPDATE Branches SET pic='DONO' WHERE city='BSD';

-- 03. Add another branch with branch name BLI, pic is Tono, address is Gianyar, city is Gianyar, province is Bali;
INSERT INTO Branches (
  branch_name,
  pic,
  address,
  city,
  province
) VALUES 
('BLI', 'TONO', 'GIANYAR', 'GIANYAR', 'BALI');