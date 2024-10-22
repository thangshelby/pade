import {
  CreateTableType,
  ReadTableType,
  UpdateTableType,
  DeleteTableType,
} from "../type";
const dotenv = require("dotenv");
const sql = require("mssql");
const sqlConfig = require("./config");

dotenv.config();

class SSMSModel {
  async Create({ tableName, columns, values }: CreateTableType) {
    try {
      const pool = await sql.connect(sqlConfig);
      await pool.request().query(`INSERT INTO ${tableName}  
        ${columns ? `(${columns})` : ""} 
        VALUES (${values})`);

      const response = await pool
        .request()
        .query(`SELECT * FROM ${tableName} WHERE ${"1=1"}`);
      return response.recordset[response.recordset.length - 1];
    } catch (error) {
      console.log("Cannot create", error);
    }
  }

  async Read({ tableName, columns, filter }: ReadTableType) {
    try {
      const pool = await sql.connect(sqlConfig);

      let result = await pool.request().query(`SELECT ${columns} 
        FROM ${tableName} 
       ${filter}`);

      return result.recordset;
    } catch (error) {
      console.log("Cannot read", error);
    }
  }
  async Update({ tableName, columnsAndValues, filter }: UpdateTableType) {
    try {
      const pool = await sql.connect(sqlConfig);
      await pool.request().query(`UPDATE ${tableName}
      SET ${columnsAndValues} ${filter}
      `);
      const response = await pool
        .request()
        .query(`SELECT * FROM ${tableName} ${filter}`);
      return response.recordset[0];
    } catch (error) {
      console.log("Cannot update", error);
    }
  }
  async Delete({ tableName, filter }: DeleteTableType) {
    try {
      const pool = sql.connect(sqlConfig);
      await pool.request().query(`DELETE FROM ${tableName} ${filter}`);
      return { message: "Delete successfully" };
    } catch (error) {
      console.log("Cannot delete", error);
    }
  }
  // async GetIdFromName(tableName, filter, values) {
  //   try {
  //     return await pool.then(async (pool: any) => {
  //       let result = await pool
  //         .request()
  //         .query(`SELECT * FROM ${tableName} ${filter}`);
  //       if (result.recordset.length === 0) {
  //         await pool
  //           .request()
  //           .query(`INSERT INTO ${tableName} VALUES (${values})`);
  //         let result = await pool
  //           .request()
  //           .query(`SELECT * FROM ${tableName} ${filter}`);
  //         return result.recordset[0].ID;
  //       } else {
  //         return result.recordset[0].ID;
  //       }
  //     });
  //   } catch (error) {
  //     console.log("Cannot get id", error);
  //   }
  // }
}

module.exports = SSMSModel;
