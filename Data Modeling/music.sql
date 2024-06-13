-- Create the music database if it doesn't exist
CREATE DATABASE IF NOT EXISTS music;

-- Switch to the music database
\c music;

-- Drop the songs table if it exists
DROP TABLE IF EXISTS songs;

-- Create the songs table with more descriptive column names
CREATE TABLE IF NOT EXISTS songs (
    song_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    duration_seconds INTEGER NOT NULL,
    release_date DATE NOT NULL,
    artists VARCHAR(255)[] NOT NULL,
    album VARCHAR(255) NOT NULL,
    producers VARCHAR(255)[] NOT NULL
);

-- Insert sample data into the songs table
INSERT INTO songs
    (title, duration_seconds, release_date, artists, album, producers)
VALUES
    ('MMMBop', 238, '1997-04-15', ARRAY['Hanson'], 'Middle of Nowhere', ARRAY['Dust Brothers', 'Stephen Lironi']),
    ('Bohemian Rhapsody', 355, '1975-10-31', ARRAY['Queen'], 'A Night at the Opera', ARRAY['Roy Thomas Baker']),
    ('One Sweet Day', 282, '1995-11-14', ARRAY['Mariah Carey', 'Boyz II Men'], 'Daydream', ARRAY['Walter Afanasieff']),
    ('Shallow', 216, '2018-09-27', ARRAY['Lady Gaga', 'Bradley Cooper'], 'A Star Is Born', ARRAY['Benjamin Rice']),
    ('How You Remind Me', 223, '2001-08-21', ARRAY['Nickelback'], 'Silver Side Up', ARRAY['Rick Parashar']),
    ('New York State of Mind', 276, '2009-10-20', ARRAY['Jay Z', 'Alicia Keys'], 'The Blueprint 3', ARRAY['Al Shux']),
    ('Dark Horse', 215, '2013-12-17', ARRAY['Katy Perry', 'Juicy J'], 'Prism', ARRAY['Max Martin', 'Cirkut']),
    ('Moves Like Jagger', 201, '2011-06-21', ARRAY['Maroon 5', 'Christina Aguilera'], 'Hands All Over', ARRAY['Shellback', 'Benny Blanco']),
    ('Complicated', 244, '2002-05-14', ARRAY['Avril Lavigne'], 'Let Go', ARRAY['The Matrix']),
    ('Say My Name', 240, '1999-11-07', ARRAY['Destiny''s Child'], 'The Writing''s on the Wall', ARRAY['Darkchild']);
