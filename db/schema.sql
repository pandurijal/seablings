-- Seablings submissions schema
-- Run once in the Neon SQL editor (https://console.neon.tech) before deploying.

CREATE TABLE IF NOT EXISTS submissions (
  id          SERIAL PRIMARY KEY,
  name        TEXT        NOT NULL,
  email       TEXT        NOT NULL,
  country     TEXT,
  category    TEXT        NOT NULL DEFAULT 'general',
  message     TEXT        NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS submissions_created_at_idx ON submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS submissions_email_idx      ON submissions (email);
