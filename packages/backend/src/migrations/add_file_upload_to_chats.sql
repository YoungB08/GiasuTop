-- Migration: add file attachment columns to chat tables
-- Run this once against your existing database

ALTER TABLE chat_messages
  ADD COLUMN IF NOT EXISTS file_url TEXT NULL,
  ADD COLUMN IF NOT EXISTS file_name VARCHAR(255) NULL,
  ADD COLUMN IF NOT EXISTS file_type VARCHAR(120) NULL;

ALTER TABLE direct_messages
  ADD COLUMN IF NOT EXISTS file_url TEXT NULL,
  ADD COLUMN IF NOT EXISTS file_name VARCHAR(255) NULL,
  ADD COLUMN IF NOT EXISTS file_type VARCHAR(120) NULL;

-- Create uploads/chat directory is handled by the backend on startup
