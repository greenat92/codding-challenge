import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { jobsKeyWordsApiUrl, jobsSearchResutlApiUrl } from './api';
import { JobSearchQueryDto } from './dto/job-search-query-dto';
import { JobsKeyWordsQueryDto } from './dto/jobs-keywords-query.dto';

@Injectable()
export class JobsService {
  async search(jobSearchQueryDto: JobSearchQueryDto) {
    const queryUrl = jobsSearchResutlApiUrl(jobSearchQueryDto);
    try {
      const reponse = await axios.get(queryUrl);
      return reponse.data;
    } catch (err) {
      return err;
    }
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
