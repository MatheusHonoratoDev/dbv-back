import mysql2 from "mysql2";

export const db = mysql2.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_bdclube-user",
    password: "Ca*qBXp$&9bHq9R",
    database: "freedb_bdclube"
});
