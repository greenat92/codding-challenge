import { JobSearchQueryDto } from './dto/job-search-query.dto';
import { JobsKeyWordsQueryDto } from './dto/jobs-keywords-query.dto';

const JOBS_CH_BASE_URL = 'https://www.jobs.ch/api/v1/public';

export const jobsKeyWordsApiUrl = (
  jobsKeyWordsQueryDto: JobsKeyWordsQueryDto,
): string =>
  `${JOBS_CH_BASE_URL}/meta/typeahead?limit=${jobsKeyWordsQueryDto.limit}&query=${jobsKeyWordsQueryDto.term}`;

export const jobsSearchResutlApiUrl = (
  jobSearchQueryDto: JobSearchQueryDto,
): string =>
  `${JOBS_CH_BASE_URL}/search?&location=${jobSearchQueryDto.location}&query=${jobSearchQueryDto.term}&rows=${jobSearchQueryDto.rows}`;
