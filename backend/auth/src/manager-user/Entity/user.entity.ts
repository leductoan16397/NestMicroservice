import { Exclude, Expose, Transform } from 'class-transformer';
import { Types } from 'mongoose';

export class AdminUserEntity {
  fullName: string;
  email: string;
  roles: string[];

  @Exclude()
  password: string;
  _id: Types.ObjectId;

  @Expose()
  get id(): string {
    return this._id.toString();
  }

  @Transform(({ value }) => value.toString())
  company: string;

  constructor(partial: Partial<AdminUserEntity>) {
    Object.assign(this, partial);
  }
}
