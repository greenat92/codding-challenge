import { Test, TestingModule } from '@nestjs/testing';
import { GisPlacesController } from './gis-places.controller';
import { GisPlacesService } from './gis-places.service';

describe('GisPlacesController', () => {
  let controller: GisPlacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GisPlacesController],
      providers: [GisPlacesService],
    }).compile();

    controller = module.get<GisPlacesController>(GisPlacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
