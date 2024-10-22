"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const sql = require("mssql");
const sqlConfig = require("./config");
dotenv.config();
class SSMSModel {
    Create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tableName, columns, values }) {
            try {
                const pool = yield sql.connect(sqlConfig);
                yield pool.request().query(`INSERT INTO ${tableName}  
        ${columns ? `(${columns})` : ""} 
        VALUES (${values})`);
                const response = yield pool
                    .request()
                    .query(`SELECT * FROM ${tableName} WHERE ${"1=1"}`);
                return response.recordset[response.recordset.length - 1];
            }
            catch (error) {
                console.log("Cannot create", error);
            }
        });
    }
    Read(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tableName, columns, filter }) {
            try {
                const pool = yield sql.connect(sqlConfig);
                let result = yield pool.request().query(`SELECT ${columns} 
        FROM ${tableName} 
       ${filter}`);
                return result.recordset;
            }
            catch (error) {
                console.log("Cannot read", error);
            }
        });
    }
    Update(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tableName, columnsAndValues, filter }) {
            try {
                const pool = yield sql.connect(sqlConfig);
                yield pool.request().query(`UPDATE ${tableName}
      SET ${columnsAndValues} ${filter}
      `);
                const response = yield pool
                    .request()
                    .query(`SELECT * FROM ${tableName} ${filter}`);
                return response.recordset[0];
            }
            catch (error) {
                console.log("Cannot update", error);
            }
        });
    }
    Delete(_a) {
        return __awaiter(this, arguments, void 0, function* ({ tableName, filter }) {
            try {
                const pool = sql.connect(sqlConfig);
                yield pool.request().query(`DELETE FROM ${tableName} ${filter}`);
                return { message: "Delete successfully" };
            }
            catch (error) {
                console.log("Cannot delete", error);
            }
        });
    }
}
module.exports = SSMSModel;
