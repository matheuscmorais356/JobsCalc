const Database = require('./config')


const initDb = {
    async init() {
        // Iniciando a conexão com o banco de dados
        const db = await Database()

        // Executa os comandos sql no banco de dados
        await db.exec(`CREATE TABLE profile (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            monthly_budget INT,
            days_per_week INT,
            hours_per_day INT ,
            vacation_per_year INT,
            value_hour INT
            );`
        )
        await db.exec(`CREATE TABLE jobs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            daily_hours INT,
            total_hours INT,
            created_at DATETIME
            );`
        )

        await db.run(`INSERT INTO profile (
            name, 
            avatar, 
            monthly_budget, 
            days_per_week, 
            hours_per_day, 
            vacation_per_year,
            value_hour
            ) VALUES(
                "Matheus",
                "https://scontent.fcgh4-1.fna.fbcdn.net/v/t1.6435-9/40748408_1114369718728487_9145968995239723008_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pc6Tny3x1PMAX8ONv8a&_nc_ht=scontent.fcgh4-1.fna&oh=2be38e267a270d5fbe803185bc510786&oe=609198CA",
                3000,
                5,
                8,
                4,
                70
            );`
        )

        await db.run(`INSERT INTO jobs(
            name,
            daily_hours,
            total_hours,
            created_at
            ) VALUES(
                "Pizzaria Guloso",
                2,
                1,
                1617514376018
            );`
        )
        await db.run(`INSERT INTO jobs(
            name,
            daily_hours,
            total_hours,
            created_at
            ) VALUES(
                "OneTwo Projects",
                3,
                47,
                1617514376018
            );`
        )

        // Encerrando a conexão com o banco de dados
        await db.close()
    }
}

initDb.init()