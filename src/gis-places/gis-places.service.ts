import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Logger } from 'src/logger/logger';
import { loggers } from 'winston';
import { placesApiUrl } from './api';
import { PlacesQueryDto } from './dto/query-gis-place.dto';

@Injectable()
export class GisPlacesService {
  async findAllRegions() {
    return `This action returns all regions list`;
  }

  async autoComplete(placesQueryDto: PlacesQueryDto) {
    const queryUrl = placesApiUrl(placesQueryDto);
    try {
      const reponse = await axios.get(queryUrl, {
        headers: {
          'Accept-Language': 'en',
        },
      });
      return reponse.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
