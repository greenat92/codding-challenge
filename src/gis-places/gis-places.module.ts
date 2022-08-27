import { Module } from '@nestjs/common';
import { GisPlacesService } from './gis-places.service';
import { GisPlacesController } from './gis-places.controller';

@Module({
  controllers: [GisPlacesController],
  providers: [GisPlacesService],
})
export class GisPlacesModule {}
