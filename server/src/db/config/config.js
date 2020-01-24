import 'dotenv/config';
module.exports={
    development:{
        username: process.env.DB_USER,
        password: process.env.DB_USER_PASSWORD,
        database: process.env.DB_NAME,
        host: "127.0.0.1",
        dialect: "postgres",
        seederStorage:"json",
        migrationStorage:"json"
    },
    test:{

    },
    production:{

    },
};