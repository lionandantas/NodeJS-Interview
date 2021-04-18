import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'interview',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
            cli: {
                "migrationsDir": "./src/database/migrations"
            },
            synchronize: true,
        }),
    },
];