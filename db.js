import mysql from "mysql"

export const db = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_bdclube-user",
    password: "Ca*qBXp$&9bHq9R",
    database: "freedb_bdclube"
});