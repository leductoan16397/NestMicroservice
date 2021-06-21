import { Document, SchemaTypes } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  collection: 'refreshtokens',
})
export class RefresTokenModel extends Document {
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  })
  userId: string;

  @Prop({
    required: true,
  })
  refreshToken: string;

  @Prop({
    required: true,
  })
  ip: string;

  @Prop({
    required: true,
  })
  browser: string;

  @Prop({
    required: true,
  })
  country: string;
}

export const RefreshTokenSchema =
  SchemaFactory.createForClass(RefresTokenModel);
