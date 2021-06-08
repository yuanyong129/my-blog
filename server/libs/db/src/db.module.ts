import { Global, Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { DbService } from './db.service'
import { Menu } from './models/menu.model'
import { User } from './models/user.model'
import { Role } from './models/role.model'
import { Post } from './models/post.model'
import { Type } from './models/type.model'
import { Param } from './models/param.model'

const models = TypegooseModule.forFeature([User, Menu, Role, Post, Type, Param])

@Global() // 标记为全局可见
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/myblog', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
