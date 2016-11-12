'use strict';

module.exports.createTables = `
  CREATE TABLE IF NOT EXISTS clip (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    type TEXT NOT NULL,
    timestamp INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS image_clip (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clip_id INTEGER NOT NULL UNIQUE,
    image BLOB NOT NULL,
    FOREIGN KEY(clip_id) REFERENCES clip(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS starred_clip (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clip_id INTEGER NOT NULL UNIQUE,
    FOREIGN KEY(clip_id) REFERENCES clip(id) ON DELETE CASCADE
  );

  PRAGMA foreign_keys = ON;
`;

module.exports.getAllClips = `
  SELECT C.id, S.id AS starred_clip_id, C.type, C.timestamp, C.text, I.image
  FROM clip C
  LEFT JOIN starred_clip S
    ON C.id = S.clip_id
  LEFT JOIN image_clip I
    ON C.id = I.clip_id
  ORDER BY C.timestamp DESC;
`;

module.exports.getLastInsertedClip = `
  SELECT * FROM clip
  WHERE id = (
    SELECT last_insert_rowid()
  );
`;

module.exports.getLastStarredClip = `
  SELECT * FROM starred_clip
  WHERE id = (
    SELECT last_insert_rowid()
  );
`;

module.exports.findClip = `
  SELECT * FROM clip WHERE text = $1;
`;

module.exports.insertClip = `
  INSERT INTO clip (text, type, timestamp) VALUES ($1, $2, $3);
`;

module.exports.insertImage = `
  INSERT INTO image_clip (clip_id, image) VALUES($1, $2);
`;

module.exports.updateClip = `
  UPDATE clip SET timestamp = $1 WHERE id = $2;
`;

module.exports.updateImage = `
  UPDATE image_clip SET image = $1 WHERE clip_id = $2;
`;

module.exports.starClip = `
  INSERT INTO starred_clip (clip_id) VALUES($1);
`;

module.exports.deleteClip = `
  DELETE FROM clip WHERE id = $1;
`;

module.exports.unstarClip = `
  DELETE FROM starred_clip WHERE id = $1;
`;