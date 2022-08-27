import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { LanguageEnum } from '../common/enmus';
import { jobsKeyWordsApiUrl, jobsSearchResutlApiUrl } from './api';
import { JobDetailsQueryDto } from './dto/job-details-query.dto';
import { JobSearchQueryDto } from './dto/job-search-query.dto';
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

  async jobDetails(id: string, jobDetailsQueryDto: JobDetailsQueryDto) {
    let jobDetails =  {
      title: '',
      location: '',
      publishDate: '',
      workload: '',
      languages: [],
      contractType: '',
      jobDetails: ''
    };
    let url = `https://www.jobs.ch/en/vacancies/detail/${id}/`
    if (jobDetailsQueryDto.language === LanguageEnum.ENGLISH) {
      url = `https://www.jobs.ch/${jobDetailsQueryDto.language}/vacancies/detail/${id}/`;
      // todo: call screpper service to get the details from the html page
      return jobDetails;
    } else if (jobDetailsQueryDto.language === LanguageEnum.GERMAN) {
      url = `https://www.jobs.ch/${jobDetailsQueryDto.language}/stellenangebote/detail/${id}/`;
      // todo: call screpper service to get the details from the html page
      return jobDetails;
    } else if (jobDetailsQueryDto.language === LanguageEnum.FRENCH) {
      url = `https://www.jobs.ch/${jobDetailsQueryDto.language}/offres-emplois/detail/${id}/`;
      // todo: call screpper service to get the details from the html page
      return jobDetails;
    } else if (jobDetailsQueryDto.language === LanguageEnum.ITALIAN) {
      url =  `https://www.jobs.ch/${jobDetailsQueryDto.language}/posti-vacanti/detail/${id}/`;
      // todo: call screpper service to get the details from the html page
      return jobDetails;
    }
    // todo: call screpper service to get the details from the html page
    return jobDetails;
  }
}
