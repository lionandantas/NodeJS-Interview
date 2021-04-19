import { Module } from '@nestjs/common';
import { CustomersModule } from './modules/customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesModule } from './modules/cities/cities.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CustomersModule,
    CitiesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
