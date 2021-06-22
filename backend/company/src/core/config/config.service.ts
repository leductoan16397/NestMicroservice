export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};
    this.envConfig.mongo_host = process.env.MONGO_HOST || 'mongo';
    this.envConfig.mongo_port = process.env.MONGO_PORT || 27017;
    this.envConfig.redis_host = process.env.REDIS_HOST || 'redis';
    this.envConfig.redis_port = process.env.REDIS_PORT || 6379;
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}