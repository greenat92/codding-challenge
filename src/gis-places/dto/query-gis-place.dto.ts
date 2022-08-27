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

export class PlacesQueryDto {
  @ApiProperty({ description: 'row is number' })
  @IsString()
  //   @Max(5)
  //   @Min(5)
  rows: string;

  @ApiProperty({
    description: 'subTypes is array of strings like city, region ....',
  })
  @IsArray()
  @ArrayMinSize(1)
  subTypes: string[];

  @ApiProperty({ description: 'term is string ... like zurich.. zur... ' })
  @MinLength(3)
  @IsString()
  term: string;
}
