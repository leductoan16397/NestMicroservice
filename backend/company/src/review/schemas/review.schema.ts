import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CompanyModel } from 'company/schemas/company.schema';
import { Document, SchemaTypes } from 'mongoose';
import { UserModel } from 'user/schemas/user.schema';

@Schema({
  timestamps: true,
  collection: 'reviews',
})
export class ReviewModel extends Document {
  @Prop({
    type: String,
    requried: true,
  })
  title: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  ot: boolean;

  @Prop({
    type: String,
    required: true,
  })
  like: string;

  @Prop({
    type: String,
    required: true,
  })
  improve: string;

  @Prop({
    type: Number,
    min: 0,
    max: 5,
    default: 1,
  })
  overallStart: number;

  @Prop({
    type: Number,
    min: 0,
    max: 5,
    default: 1,
  })
  salaryStart: number;

  @Prop({
    type: Number,
    min: 0,
    max: 5,
    default: 1,
  })
  trainingStart: number;

  @Prop({
    type: Number,
    min: 0,
    max: 5,
    default: 1,
  })
  managermentCareStart: number;

  @Prop({
    type: Number,
    min: 0,
    max: 5,
    default: 1,
  })
  cultureAndFunStart: number;

  @Prop({
    type: Number,
    min: 0,
    max: 5,
    default: 1,
  })
  officeStart: number;

  @Prop({
    type: Boolean,
    default: true,
  })
  recommented: boolean;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'User',
  })
  author: UserModel;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'Company',
  })
  company: CompanyModel;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
