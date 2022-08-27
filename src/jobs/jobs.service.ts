import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { jobsKeyWordsApiUrl } from './api';
import { JobsKeyWordsQueryDto } from './dto/jobs-keywords-query.dto';

@Injectable()
export class JobsService {
  async search() {
    return `This action returns all jobs`;
  }

  async jobsKeyWordsAutoComplete(jobsKeyWordsQueryDto: JobsKeyWordsQueryDto) {
    const queryUrl = jobsKeyWordsApiUrl(jobsKeyWordsQueryDto);
    try {
      const reponse = await axios.get(queryUrl);
      return reponse.data;
    } catch (err) {
      return err;
    }
  }

  async jobDetails(id: string) {
    return `This action returns job details ${id}`;
  }
}
