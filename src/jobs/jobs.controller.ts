import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JobsKeyWordsQueryDto } from './dto/jobs-keywords-query.dto';
import { JobsService } from './jobs.service';

@ApiTags('jobs')
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  // todo add search query dto for jobs search api
  @Get('search')
  search() {
    return this.jobsService.search();
  }

  @Get('autocomplete')
  jobsKeyWordsAutoComplete(
    @Query() jobsKeyWordsQueryDto: JobsKeyWordsQueryDto,
  ) {
    return this.jobsService.jobsKeyWordsAutoComplete(jobsKeyWordsQueryDto);
  }

  @Get(':id')
  getJobDetails(@Param('id') id: string) {
    return this.jobsService.jobDetails(id);
  }
}
