import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsString, MinLength } from 'class-validator';

export class PlacesQueryDto {
  @ApiProperty({ description: 'row is string' })
  @IsString()
  rows: string;

  @ApiProperty({
    description: 'subTypes is array of strings like city, region ....',
  })
  @IsArray()
  @ArrayMinSize(1)
  subTypes: string[];

  @ApiProperty({ description: 'term is string ... like zurich.. zur... ' })
  @MinLength(1)
  @IsString()
  term: string;
}
