import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class JobSearchQueryDto {
  @ApiProperty({ description: 'rows is string', default: 20 })
  @IsString()
  rows: string;

  @ApiProperty({ description: 'location is string', default: 'Zurich' })
  @IsString()
  location: string;

//   @ApiProperty({
//     description: 'employmentTypeIds is array of emolyment types like employee freelancer ....',
//     required: false
//   })
//   @IsArray()
//   @IsOptional()
//   employmentTypeIds?: string[];

//   @ApiProperty({
//     description: 'languageSkills is array of strings en de, fr, it ....',
//     required: false
//   })
//   @IsArray()
//   @IsOptional()
//   languageSkills?: string[];

//   @ApiProperty({
//     description: 'regionIds is array of strings en 1, 2, etc ....', required: false
//   })
//   @IsArray()
//   @IsOptional()
//   regionIds?: string[];

  @ApiProperty({
    description: 'term is string ... like software engineer.. architect... ',
    default: 'software engineer'
  })
  @MinLength(1)
  @IsString()
  term: string;

//   @ApiProperty({ description: 'product is string ... like zurich.. zur... ', default: 'sponsored' })
//   @MinLength(1)
//   @IsString()
//   product: string;
}
