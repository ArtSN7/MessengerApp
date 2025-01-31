-- Messages

CREATE TABLE Messages (
    id          INTEGER  PRIMARY KEY AUTOINCREMENT,
    senderId    INTEGER  NOT NULL,
    recipientId INTEGER  NOT NULL,
    content     TEXT     NOT NULL,
    timestamp   DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (senderId) REFERENCES Users (id),
    FOREIGN KEY (recipientId) REFERENCES Users (id)
);


-- Users

CREATE TABLE Users (
    id              INTEGER       PRIMARY KEY AUTOINCREMENT,
    username        VARCHAR (255) NOT NULL UNIQUE,
    password        VARCHAR (255) NOT NULL,
    first_name      VARCHAR (255) DEFAULT 'New User',
    last_name       VARCHAR (255) DEFAULT 'New User',
    profile_picture VARCHAR (255) DEFAULT ''
);