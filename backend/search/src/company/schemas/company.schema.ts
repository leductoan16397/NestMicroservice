import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

// const dayOfWeek = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
// ];
enum DayOfWeek {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

@Schema({ _id: false })
class WorkTime extends Document {
  @Prop({
    type: String,
    enum: DayOfWeek,
  })
  from: string;

  @Prop({
    type: String,
    enum: DayOfWeek,
  })
  to: string;
}

@Schema({ _id: false })
class CompanySize extends Document {
  @Prop({
    type: Number,
    required: true,
    min: 1,
  })
  min: number;

  @Prop({
    type: Number,
    required: true,
  })
  max: number;
}

@Schema({ _id: false })
class StartNumber extends Document {
  @Prop({
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100,
  })
  one: number;

  @Prop({
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100,
  })
  two: number;

  @Prop({
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100,
  })
  three: number;

  @Prop({
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100,
  })
  four: number;

  @Prop({
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100,
  })
  five: number;
}

@Schema({
  timestamps: true,
  collection: 'companies',
})
export class CompanyModel extends Document {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
  })
  descriptioin: string;

  @Prop({
    type: String,
    required: true,
  })
  location: string;

  @Prop({
    type: String,
    default: '',
  })
  avatar: string;

  @Prop({
    type: [String],
    default: [],
  })
  images: string[];

  @Prop({
    type: WorkTime,
    required: true,
  })
  workTime: WorkTime;

  @Prop({
    type: CompanySize,
    required: true,
  })
  companySize: CompanySize;

  @Prop({
    type: Boolean,
    default: false,
  })
  ot: boolean;

  @Prop({
    type: String,
    required: true,
  })
  originCountry: string;

  @Prop({
    type: Number,
    default: 0,
    min: 0,
  })
  totalReview: number;

  @Prop({
    type: StartNumber,
  })
  overallStart: StartNumber;

  @Prop({
    type: StartNumber,
  })
  salary: StartNumber;

  @Prop({
    type: StartNumber,
  })
  training: StartNumber;

  @Prop({
    type: StartNumber,
  })
  managermentCare: StartNumber;

  @Prop({
    type: StartNumber,
  })
  culture: StartNumber;

  @Prop({
    type: StartNumber,
  })
  office: StartNumber;
}

export const CompanySchema = SchemaFactory.createForClass(CompanyModel);
