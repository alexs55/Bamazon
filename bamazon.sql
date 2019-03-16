ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Rayquazayuna8703';


DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE items (
id INT NOT NULL AUTO_INCREMENT,
itemid VARCHAR(255) NULL,
item VARCHAR(255) NULL,
department VARCHAR(255) NULL,
price DECIMAL(10,2) NULL,
quantity DECIMAL(10) NULL,
PRIMARY KEY (id)
);

INSERT INTO items(itemid, item, department, price, quantity)
VALUES("BAM232","Tide Pods 24pk", "Home Goods", 18.99, 3),("BAM233","Bindle Paperwhite", "Tech", 199.99, 4),("BAM234","Bamazon Ice Tv","Tech", 49.99, 5),
("BAM235","Oreos 10pk (Why?)","Life & Fitness", 15.99, 10),("BAM236","Amazing Useless Product That You Will Buy Because It Is Cheap", "Treasure Deals",2.99, 7),("BAM237", "100 Power Ballads: Karaoke Set", "Music & Media", 19.99, 8),
("BAM238","Larry Notter & The Haunted Smarthphone", "Books", 18.99, 7),("BAM239", "Shrek 2.3", "Music & Media", 7.99, 9),("BAM240", "A Pencil", "Office Supplies", .99, 0),("BAM241", "MySQL for Dummies", "Books", 24.99, 3);

SELECT * FROM items

