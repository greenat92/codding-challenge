import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { LanguageEnum } from '../../common/enmus';

export class JobDetailsQueryDto {
  @ApiProperty({
    description: 'language code is a string value it, en, fr, de',
    default: 'en',
    enum: LanguageEnum,
  })
  @IsNotEmpty()
  @IsEnum(LanguageEnum)
  language: LanguageEnum;
}
