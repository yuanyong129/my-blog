import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt' // 从passport引入策略
import { PassportStrategy } from '@nestjs/passport'
import { InjectModel } from 'nestjs-typegoose'
import { User } from '@libs/db/models/user.model'
import { ReturnModelType } from '@typegoose/typegoose'

// jwt策略
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'dbakhgakjdghkjhjghfdjghfjd',
    } as StrategyOptions)
  }

  async validate(id: string) {
    return await this.userModel.findById(id)
  }
}
