import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { LoggerModule } from './logger/logger.module';
import { GisPlacesModule } from './gis-places/gis-places.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [ConfigModule, LoggerModule, GisPlacesModule, JobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
