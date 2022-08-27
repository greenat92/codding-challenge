import { Controller, Get, Query, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlacesQueryDto } from './dto/query-gis-place.dto';
import { GisPlacesService } from './gis-places.service';

@ApiTags('gis-places')
@ApiResponse({
  status: HttpStatus.BAD_REQUEST,
  description: 'if you missed to send required data.',
})
@Controller('places')
export class GisPlacesController {
  constructor(private readonly gisPlacesService: GisPlacesService) {}

  @Get('regions')
  async findAllRegions() {
    return await this.gisPlacesService.findAllRegions();
  }

  @Get('autocomplete')
  async findOne(@Query() queryPlacesDto: PlacesQueryDto) {
    return await this.gisPlacesService.autoComplete(queryPlacesDto);
  }
}
