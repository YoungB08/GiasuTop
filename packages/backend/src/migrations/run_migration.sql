ALTER TABLE chat_messages ADD COLUMN file_url TEXT NULL;
ALTER TABLE chat_messages ADD COLUMN file_name VARCHAR(255) NULL;
ALTER TABLE chat_messages ADD COLUMN file_type VARCHAR(120) NULL;
ALTER TABLE direct_messages ADD COLUMN file_url TEXT NULL;
ALTER TABLE direct_messages ADD COLUMN file_name VARCHAR(255) NULL;
ALTER TABLE direct_messages ADD COLUMN file_type VARCHAR(120) NULL;
