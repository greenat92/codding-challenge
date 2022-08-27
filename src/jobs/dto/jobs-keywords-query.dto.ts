import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class JobsKeyWordsQueryDto {
  @ApiProperty({ description: 'row is number' })
  @IsNumber()
  @Max(5)
  @Min(5)
  limit: number;

  @ApiProperty({
    description: 'term is string ... like software engineer.. architect... ',
  })
  @MinLength(3)
  @IsString()
  term: string;
}
