import { Document, SchemaTypes } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  collection: 'adminrefreshtokens',
})
export class AdminRefresTokenModel extends Document {
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
}

export const AdminRefreshTokenSchema = SchemaFactory.createForClass(
  AdminRefresTokenModel,
);
