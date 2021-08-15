import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class ImageFirebase extends Document {
  @Prop({
    type: String,
    default: '',
  })
  url: string;

  @Prop({
    type: String,
    default: '',
  })
  uid: string;

  @Prop({
    type: String,
    default: '',
  })
  name: string;
}
export const imageFirebaseSchema = SchemaFactory.createForClass(ImageFirebase);

@Schema({ _id: false })
export class Location extends Document {
  @Prop({
    type: String,
    default: '',
  })
  city: string;

  @Prop({
    type: String,
    default: '',
  })
  district: string;

  @Prop({
    type: String,
    default: '',
  })
  ward: string;

  @Prop({
    type: String,
    default: '',
  })
  address: string;
}
export const locationSchema = SchemaFactory.createForClass(Location);
