import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.MYSQL_HOST || "localhost",
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "tracktruck",
};

let pool: mysql.Pool | null = null;
let initialized = false;

async function ensureDatabase() {
  const connection = await mysql.createConnection({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    multipleStatements: true,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\``);
  await connection.end();
}

export async function getPool() {
  if (!pool) {
    await ensureDatabase();
    pool = mysql.createPool({
      ...dbConfig,
      waitForConnections: true,
      connectionLimit: 10,
      namedPlaceholders: true,
    });
  }

  if (!initialized) {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT,
        fullname VARCHAR(120) NOT NULL,
        email VARCHAR(180) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        contact VARCHAR(20) NOT NULL,
        role ENUM('driver', 'owner', 'admin') NOT NULL DEFAULT 'driver',
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS trips (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT,
        driver_id INT UNSIGNED NOT NULL,
        vehicle ENUM('Truck1', 'Truck2') NOT NULL,
        trip_date DATE NOT NULL,
        from_location VARCHAR(255) NULL,
        to_location VARCHAR(255) NULL,
        deposit DECIMAL(10, 2) NOT NULL DEFAULT 0,
        cost DECIMAL(10, 2) NOT NULL DEFAULT 0,
        comments TEXT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        INDEX trips_driver_id_idx (driver_id),
        CONSTRAINT trips_driver_id_fk FOREIGN KEY (driver_id)
          REFERENCES users(id)
          ON DELETE CASCADE
      );
    `);

    initialized = true;
  }

  return pool;
}

