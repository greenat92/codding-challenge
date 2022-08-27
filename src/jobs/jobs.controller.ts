import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JobDetailsQueryDto } from './dto/job-details-query.dto';
import { JobSearchQueryDto } from './dto/job-search-query.dto';
import { JobsKeyWordsQueryDto } from './dto/jobs-keywords-query.dto';
import { JobsService } from './jobs.service';

@ApiTags('jobs')
@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  // todo add search query dto for jobs search api
  @Get('search')
  search(@Query() jobSearchQueryDto: JobSearchQueryDto) {
    return this.jobsService.search(jobSearchQueryDto);
  }

  @Get('autocomplete')
  jobsKeyWordsAutoComplete(
    @Query() jobsKeyWordsQueryDto: JobsKeyWordsQueryDto,
  ) {
    return this.jobsService.jobsKeyWordsAutoComplete(jobsKeyWordsQueryDto);
  }

  @Get(':id')
  getJobDetails(
    @Param('id') id: string,
    @Query() jobDetailsQueryDto: JobDetailsQueryDto,
  ) {
    return this.jobsService.jobDetails(id, jobDetailsQueryDto);
  }
}
