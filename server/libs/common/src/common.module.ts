import { Global, Module } from '@nestjs/common'
import { CommonService } from './common.service'
import { JwtModule } from '@nestjs/jwt'

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: 'dbakhgakjdghkjhjghfdjghfjd',
    }),
  ],
  providers: [CommonService],
  exports: [CommonService, JwtModule],
})
export class CommonModule {}
