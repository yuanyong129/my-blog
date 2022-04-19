import { User } from '@libs/db/models/user.model'
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger'
import { ReturnModelType } from '@typegoose/typegoose'
import { InjectModel } from 'nestjs-typegoose'
import { JwtService } from '@nestjs/jwt'
import { Role } from '@libs/db/models/role.model'
import { Menu } from '@libs/db/models/menu.model'
import { AuthService } from './auth.service'
import { ResponseType } from 'src/types/global'

export class LoginDto {
  @ApiProperty({ description: '用户名' })
  username: string
  @ApiProperty({ description: '密码' })
  password: string
}

@Controller('auth')
@ApiTags('授权')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private authService: AuthService,
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
    @InjectModel(Role) private readonly roleModel: ReturnModelType<typeof Role>,
    @InjectModel(Menu) private readonly menuModel: ReturnModelType<typeof Menu>,
  ) {}

  @Post('register')
  @ApiOperation({ summary: '注册' })
  async register(@Body() dto: User) {
    const res = await this.userModel.findOne({ username: dto.username })
    if (res) {
      return { state: 501, message: '用户名已存在!' }
    } else {
      await this.userModel.create(dto)
      return { state: 200, message: '注册成功!' }
    }
  }

  @Post('login')
  @ApiOperation({ summary: '登录' })
  @UseGuards(AuthGuard('local'))
  async login(
    @Body() dto: LoginDto,
    @Req() req,
  ): Promise<ResponseType<string>> {
    return {
      code: 200,
      data: this.jwtService.sign(String(req.user._id)),
      msg: '登录成功！',
    }
  }

  @Get('user')
  @ApiOperation({ summary: '获取用户信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getUser(@Req() req) {
    return req.user
  }

  @Get('menu')
  @ApiOperation({ summary: '获取权限菜单' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getMenu(@Req() { user }) {
    if (user.roleId) {
      const { menuId } = await this.roleModel.findOne({
        _id: String(user.roleId),
      })
      const menuList = await this.menuModel.find({ pid: '0' }).populate({
        path: 'children',
        populate: {
          path: 'children',
        },
      })
      const data = this.authService.createPremissonMenu(menuList, menuId)
      return {
        state: 200,
        data,
      }
    } else {
      return {
        state: 200,
        data: [],
      }
    }
  }
}
