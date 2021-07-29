import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  AddManagerUser,
  Role,
  UpdateManagerUser,
} from './interface/manager-user.interface';
import { ManagerUserModel } from './schemas/manager-user.schema';
import { compareSync } from 'bcrypt-nodejs';
import { JwtPayload } from 'auth/interfaces/jwt-payload.interface';

@Injectable()
export class ManagerUserService {
  constructor(
    @InjectModel(ManagerUserModel.name)
    private readonly managerUserModel: Model<ManagerUserModel>,
  ) {}

  async addManager(input: AddManagerUser): Promise<ManagerUserModel> {
    return this.addNewUser(input, Role.Manager);
  }

  async addRecuiter(input: AddManagerUser): Promise<ManagerUserModel> {
    return this.addNewUser(input, Role.Recuiter);
  }

  private async addNewUser(
    input: AddManagerUser,
    role: Role,
  ): Promise<ManagerUserModel> {
    const managerUser = new this.managerUserModel({
      ...input,
      roles: [role],
    });
    await managerUser.save();
    return managerUser;
  }

  async deleteUser(id: string): Promise<void> {
    await this.managerUserModel.findByIdAndDelete(id);
  }

  async updateUser(
    id: string,
    input: Partial<UpdateManagerUser>,
  ): Promise<ManagerUserModel> {
    const newUser = await this.managerUserModel.findByIdAndUpdate(id, input, {
      new: true,
    });
    return newUser;
  }

  async findUserByEmail(email: string): Promise<ManagerUserModel> {
    const user = await this.managerUserModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('Wrong email or password.');
    }
    return user;
  }

  async checkPassword(attemptPass: string, user: ManagerUserModel) {
    const match = compareSync(attemptPass, user.password);
    if (!match) {
      throw new NotFoundException('Wrong email or password.');
    }
    return match;
  }

  async validateUser(jwtPayload: JwtPayload): Promise<ManagerUserModel> {
    const user = await this.managerUserModel.findById(jwtPayload.userId);
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }

  async findUerById(id: string): Promise<ManagerUserModel> {
    const user = await this.managerUserModel.findById(id);
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }

  async changePassword(email: string, password: string): Promise<void> {
    const user = await this.managerUserModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    user.password = password;
    user.save;
  }
}
