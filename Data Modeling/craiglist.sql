CREATE TABLE Region (
    region_id INT PRIMARY KEY AUTO_INCREMENT,
    region_name VARCHAR(255) NOT NULL
);

CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    preferred_region_id INT,
    FOREIGN KEY (preferred_region_id) REFERENCES Region(region_id)
);

CREATE TABLE Category (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE Post (
    post_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    user_id INT,
    location VARCHAR(255),
    region_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (region_id) REFERENCES Region(region_id)
);

CREATE TABLE PostCategory (
    post_id INT,
    category_id INT,
    PRIMARY KEY (post_id, category_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id),
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

+---------------+     +-------------+     +-------------+     +--------------+
|    Region     |     |    User     |     |   Category  |     |     Post     |
+---------------+     +-------------+     +-------------+     +--------------+
| region_id     |<---+| user_id     |     | category_id |<--+ | post_id      |
| region_name   |     | username    |     | category_name|   | | title        |
+---------------+     | email       |     +-------------+   | | text         |
                      | password    |                       | | user_id      |
                      | preferred_region_id                 | | location     |
                      +-------------+                       | | region_id    |
                                                            +--------------+
                              |                              
                              |                              
                              |                              
                              |                              
                              |                             
                              v                              
                                                         
                      +----------------+
                      | PostCategory   |
                      +----------------+
                      | post_id        |
                      | category_id    |
                      +----------------+

