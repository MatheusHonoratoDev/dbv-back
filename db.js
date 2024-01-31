const mysql2 = require('mysql2/promise');

// Configurações do banco de dados
const dbConfig = {
    host: "sql.freedb.tech",
    user: "freedb_bdclube-user",
    password: "Ca*qBXp$&9bHq9R",
    database: "freedb_bdclube",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql2.createPool(dbConfig);

async function executeQuery(sql, values) {
    let connection;
    try {
        connection = await pool.getConnection();

        const [rows, fields] = await connection.execute(sql, values);

        return rows;
    } catch (error) {
        throw error;
    } finally {
        if (connection) {
            connection.release();
        }
    }
}

async function exemplo() {
    try {
        const resultado = await executeQuery("SELECT * FROM sua_tabela");
        console.log(resultado);
    } catch (erro) {
        console.error("Erro ao executar a consulta:", erro);
    }
}

exemplo();
