-- Insert Users
INSERT INTO Users (id, username, password, first_name, last_name, profile_picture) VALUES
(1, 'alice123', 'password1', 'Alice', 'Johnson', 'https://randomuser.me/api/portraits'),
(2, 'bob456', 'password2', 'Bob', 'Smith', 'https://randomuser.me/api/portraits');

-- Insert Messages
INSERT INTO Messages (id, content, timestamp, senderId, recipientId) VALUES
(1, 'Hey Bob, how are you?', '2024-01-01 10:00:00', 1, 2),
(2, 'Hey Alice! I am good, how about you?', '2024-01-01 10:05:00', 2, 1),
(3, 'I am doing great! Thanks for asking.', '2024-01-01 10:10:00', 1, 2),
(4, 'That is awesome! What are you up to?', '2024-01-01 10:15:00', 2, 1);
