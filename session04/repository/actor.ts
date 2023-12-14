import mysql from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

export default class ActorRepository {
  _db: Connection;

  constructor() {
    this._db = mysql.createConnection({
      host: "localhost",
      port: 3306,
      password: "root",
      user: "root",
      database: "sakila",
    });
  }

  getAll() {
    const query = `SELECT * FROM actor;`;
    const dbPoint = this._db;
    return new Promise((resolve, reject) => {
      dbPoint.query(query, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }
}
