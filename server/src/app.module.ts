import { DbModule } from '@libs/db'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { MenusModule } from './menus/menus.module'
import { RolesModule } from './roles/roles.module'
import { AuthModule } from './auth/auth.module'
import { CommonModule } from '@libs/common'
import { PostModule } from './post/post.module'
import { TypesModule } from './types/types.module'
import { ParamsModule } from './params/params.module'

@Module({
  imports: [
    UsersModule,
    DbModule,
    MenusModule,
    RolesModule,
    AuthModule,
    CommonModule,
    PostModule,
    TypesModule,
    ParamsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
