import { Document, HookNextFunction, model, Model } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { DayOfWeek } from 'company/enum/dayOfWeek.enum';
import {
  ImageFirebase,
  imageFirebaseSchema,
  Location,
  locationSchema,
} from 'common/schemas';

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
    trim: true,
    unique: true,
  })
  companyName: string;

  @Prop({
    type: String,
  })
  descriptioin: string;

  @Prop({
    type: [locationSchema],
    required: true,
  })
  locations: Location[];

  @Prop({
    type: imageFirebaseSchema,
    required: true,
  })
  avatar: ImageFirebase;

  @Prop({
    type: [imageFirebaseSchema],
  })
  images: ImageFirebase[];

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
