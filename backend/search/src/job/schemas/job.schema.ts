import { Document, SchemaTypes } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { UserModel } from 'user/schemas/user.schema';
import { CompanyModel } from 'company/schemas/company.schema';

@Schema({
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  collection: 'jobs',
})
export class JobModel extends Document {
  @Prop({
    type: Date,
  })
  createdAt: Date;

  @Prop({
    type: Date,
  })
  updatedAt: Date;

  @Prop({
    type: String,
    minlength: 6,
    maxlength: 255,
    required: [true, 'NAME_IS_BLANK'],
  })
  name: string;

  @Prop({
    type: String,
    required: [true, 'EMAIL_IS_BLANK'],
  })
  location: string;

  @Prop({
    type: Date,
    min: Date.now,
    required: [true, 'PASSWORD_IS_BLANK'],
  })
  endTime: Date;

  @Prop({
    type: [String],
  })
  title: string[];

  @Prop({
    type: String,
  })
  reason: string;

  @Prop({
    type: String,
  })
  jobDescription: string;

  @Prop({
    type: String,
    required: true,
  })
  skill: string;

  @Prop({
    type: [SchemaTypes.ObjectId],
    ref: 'User',
    default: false,
  })
  apply: UserModel[];

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'CompanyModel',
    required: [true, 'company is required'],
  })
  company: CompanyModel;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'UserModel',
    default: false,
    required: [true, 'author is required'],
  })
  author: UserModel;
}

export const JobSchema = SchemaFactory.createForClass(JobModel);
