-- Create Teams Table
CREATE TABLE Teams (
    team_id INT PRIMARY KEY,
    team_name VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255),
    coach_name VARCHAR(255)
);

-- Create Players Table
CREATE TABLE Players (
    player_id INT PRIMARY KEY,
    player_name VARCHAR(255),
    team_id INT,
    position VARCHAR(50),
    dob DATE,
    nationality VARCHAR(100),
    FOREIGN KEY (team_id) REFERENCES Teams(team_id)
);

-- Create Games Table
CREATE TABLE Games (
    game_id INT PRIMARY KEY,
    date_time DATETIME,
    venue VARCHAR(255),
    home_team_id INT,
    away_team_id INT,
    referee_id INT,
    FOREIGN KEY (home_team_id) REFERENCES Teams(team_id),
    FOREIGN KEY (away_team_id) REFERENCES Teams(team_id),
    FOREIGN KEY (referee_id) REFERENCES Referees(referee_id)
);

-- Create Goals Table
CREATE TABLE Goals (
    goal_id INT PRIMARY KEY,
    game_id INT,
    player_id INT,
    minute_scored INT,
    is_penalty BOOLEAN,
    FOREIGN KEY (game_id) REFERENCES Games(game_id),
    FOREIGN KEY (player_id) REFERENCES Players(player_id)
);

-- Create Referees Table
CREATE TABLE Referees (
    referee_id INT PRIMARY KEY,
    referee_name VARCHAR(255),
    country VARCHAR(255),
    experience_years INT
);

-- Create Matches Table
CREATE TABLE Matches (
    match_id INT PRIMARY KEY,
    game_id INT,
    home_team_goals INT,
    away_team_goals INT,
    winner_team_id INT,
    FOREIGN KEY (game_id) REFERENCES Games(game_id),
    FOREIGN KEY (winner_team_id) REFERENCES Teams(team_id)
);

-- Create Seasons Table
CREATE TABLE Seasons (
    season_id INT PRIMARY KEY,
    season_name VARCHAR(255),
    start_date DATE,
    end_date DATE
);
