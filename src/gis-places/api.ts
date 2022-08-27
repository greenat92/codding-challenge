import { PlacesQueryDto } from './dto/query-gis-place.dto';

export const placesApiUrl = (placesQueryDto: PlacesQueryDto): string =>
  `https://metadata-api.jobs.ch/api/v1/meta/gis/type-ahead?rows=${placesQueryDto.rows}&subTypes%5B%5D=${placesQueryDto.subTypes[0]}&term=${placesQueryDto.term}`;
