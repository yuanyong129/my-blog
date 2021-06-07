import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './local.strategy'
import { JwtStrategy } from './jwt.strategy'
import { AuthService } from './auth.service'

@Module({
  imports: [PassportModule],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy, AuthService],
})
export class AuthModule {}
