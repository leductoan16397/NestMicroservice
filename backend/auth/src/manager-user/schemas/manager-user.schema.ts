import { HookNextFunction, Document, Query, SchemaTypes } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import validator from 'validator';
import { hashSync } from 'bcrypt-nodejs';

@Schema({
  timestamps: true,
  collection: 'managerusers',
})
export class ManagerUserModel extends Document {
  @Prop({
    type: String,
    minlength: 6,
    maxlength: 255,
    default: 'manager',
  })
  fullName: string;

  @Prop({
    type: String,
    lowercase: true,
    validate: validator.isEmail,
    maxlength: 255,
    minlength: 6,
    unique: true,
    immutable: true,
    required: [true, 'EMAIL_IS_BLANK'],
  })
  email: string;

  @Prop({
    type: String,
    minlength: 5,
    maxlength: 1024,
    required: [true, 'PASSWORD_IS_BLANK'],
  })
  password: string;

  @Prop({
    type: [String],
    default: ['user'],
    enum: ['manager', 'recuiter', 'user', 'admin'],
  })
  roles: string[];

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'Company',
    required: true,
  })
  company: string;
}

export const ManagerUserSchema = SchemaFactory.createForClass(ManagerUserModel);

ManagerUserSchema.pre<ManagerUserModel>(
  ['save', 'updateOne'],
  async function (next: HookNextFunction) {
    if (!this.isModified('password')) {
      return next();
    }

    const hashed = hashSync(this['password']);
    this['password'] = hashed;
    return next();
  },
);

ManagerUserSchema.pre<Query<ManagerUserModel, ManagerUserModel>>(
  'findOneAndUpdate',
  async function (next: HookNextFunction) {
    const update = this.getUpdate();
    if (update['password']) {
      const hashed = hashSync(update['password']);
      update['password'] = hashed;
    }
    return next();
  },
);
