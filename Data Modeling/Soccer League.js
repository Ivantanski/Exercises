const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');

  // Example SQL queries

  // Inserting a new team into the Teams table
  const team = {
    team_id: 1,
    team_name: 'Team A',
    city: 'City A',
    country: 'Country A',
    coach_name: 'Coach A'
  };
  connection.query('INSERT INTO Teams SET ?', team, (err, result) => {
    if (err) throw err;
    console.log('Team inserted:', result);
  });

  // Selecting all players from the Players table
  connection.query('SELECT * FROM Players', (err, results) => {
    if (err) throw err;
    console.log('Players:', results);
  });

  // Updating player information in the Players table
  const playerIdToUpdate = 1;
  const updatedPlayerInfo = { position: 'Forward' };
  connection.query('UPDATE Players SET ? WHERE player_id = ?', [updatedPlayerInfo, playerIdToUpdate], (err, result) => {
    if (err) throw err;
    console.log('Player updated:', result);
  });

  // Deleting a team from the Teams table
  const teamIdToDelete = 2;
  connection.query('DELETE FROM Teams WHERE team_id = ?', teamIdToDelete, (err, result) => {
    if (err) throw err;
    console.log('Team deleted:', result);
  });

  // Closing the connection
  connection.end((err) => {
    if (err) throw err;
    console.log('Disconnected from MySQL database');
  });
});
