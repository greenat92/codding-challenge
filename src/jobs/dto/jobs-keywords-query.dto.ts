import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Max, Min, MinLength } from 'class-validator';

export class JobsKeyWordsQueryDto {
  @ApiProperty({ description: 'limit is string' })
  @IsString()
  limit: string;

  @ApiProperty({
    description: 'term is string ... like software engineer.. architect... ',
  })
  @MinLength(1)
  @IsString()
  term: string;
}
