import { JobsKeyWordsQueryDto } from "./dto/jobs-keywords-query.dto";


export const jobsKeyWordsApiUrl = (jobsKeyWordsQueryDto: JobsKeyWordsQueryDto): string =>
  `https://www.jobs.ch/api/v1/public/meta/typeahead?limit=${jobsKeyWordsQueryDto.limit}&query=${jobsKeyWordsQueryDto.term}`;
