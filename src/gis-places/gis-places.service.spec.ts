import { Test, TestingModule } from '@nestjs/testing';
import { GisPlacesService } from './gis-places.service';

describe('GisPlacesService', () => {
  let service: GisPlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GisPlacesService],
    }).compile();

    service = module.get<GisPlacesService>(GisPlacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
