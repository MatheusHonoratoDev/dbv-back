import mysql2 from "mysql2";

export const db = mysql2.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_bdclube-user",
    password: "Ca*qBXp$&9bHq9R",
    database: "freedb_bdclube"
});

db.on('error', (err) => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.log('Conexão com o banco de dados perdida. Tentando reconectar...');
        db.connect();
    } else {
        throw err;
    }
});
