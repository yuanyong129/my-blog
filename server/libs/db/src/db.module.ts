import { Global, Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { DbService } from './db.service'
import { Menu } from './models/menu.model'
import { User } from './models/user.model'
import { Role } from './models/role.model'

const models = TypegooseModule.forFeature([User, Menu, Role])

@Global() // 标记为全局可见
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/test', {
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
