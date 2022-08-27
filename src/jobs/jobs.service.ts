import { Injectable } from '@nestjs/common';
import { JobsKeyWordsQueryDto } from './dto/jobs-keywords-query.dto';

@Injectable()
export class JobsService {
  search() {
    return `This action returns all jobs`;
  }

  jobsKeyWordsAutoComplete(jobsKeyWordsQueryDto: JobsKeyWordsQueryDto) {
    return `This action returns all jobs`;
  }

  jobDetails(id: string) {
    return `This action returns job details ${id}`;
  }
}
