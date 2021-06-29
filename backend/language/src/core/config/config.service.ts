export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};
    this.envConfig.encrypt_jwt_secret = process.env.ENCRYPT_JWT_SECRET;
    this.envConfig.jwt_sercret = process.env.JWT_SECRET;
    this.envConfig.jwt_expiration = process.env.JWT_EXPIRATION;

    this.envConfig.mongo_host = process.env.MONGO_HOST || 'mongo';
    this.envConfig.mongo_port = process.env.MONGO_PORT || 27017;
    this.envConfig.database = process.env.MONGO_DATABASE || 'nest_microservice';

    this.envConfig.mongo_root_user = process.env.MONGO_ROOT_USER || 'admin';
    this.envConfig.mongo_root_user_password =
      process.env.MONGO_ROOT_PASSWORD || 'leductoan';

    this.envConfig.mongo_user = process.env.MONGO_USER || 'toan';
    this.envConfig.mongo_user_password =
      process.env.MONGO_PASSWORD || 'toan123';

    this.envConfig.redis_host = process.env.REDIS_HOST || 'redis';
    this.envConfig.redis_port = process.env.REDIS_PORT || 6379;
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
