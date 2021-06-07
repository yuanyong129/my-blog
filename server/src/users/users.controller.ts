import { User } from '@libs/db/models/user.model'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import {
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger'
import { UsersService } from './users.service'

// 重置密码dto
class restPasswordDto {
  @ApiProperty({ description: 'id', example: 'id' })
  _id: string
  @ApiProperty({ description: 'password', example: '123456' })
  password: string
  @ApiProperty({ description: 'resetPassword', example: '123456' })
  resetPassword: string
}

@ApiTags('用户中心')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @ApiQuery({
    name: 'name',
    description: '用户名称',
    required: false,
  })
  @ApiQuery({
    name: 'page',
    description: '页码',
  })
  @ApiQuery({
    name: 'size',
    description: '数量',
  })
  @Get()
  @ApiOperation({ summary: '查询所有用户' })
  async getAllUsers(@Query() { name, page, size }) {
    const data = await this.usersService.getAllUsers(
      name,
      parseInt(page),
      parseInt(size),
    )
    return {
      state: 200,
      message: '查询成功',
      data,
    }
  }

  @Post()
  @ApiOperation({ summary: '添加用户' })
  async addUser(@Body() user: User) {
    const res = await this.usersService.addUser(user)
    switch (res) {
      case 200:
        return {
          state: 200,
          message: '添加成功',
        }
      case 501:
        return {
          state: 501,
          message: '已存在用户名',
        }
    }
  }

  @Put()
  @ApiOperation({ summary: '修改用户' })
  updUser(@Body() user: User) {
    this.usersService.updUser(user._id, user)
    return {
      state: 200,
      message: '修改成功',
    }
  }

  @Put('/resetPass')
  @ApiOperation({ summary: '修改用户密码' })
  updUserPass(@Body() passDto: restPasswordDto) {
    if (passDto.password === passDto.resetPassword) {
      this.usersService.updUserPass(passDto._id, passDto.password)
      return {
        state: 200,
        message: '修改成功',
      }
    } else {
      return {
        state: 501,
        message: '两次密码输入不一致',
      }
    }
  }

  @Delete(':id')
  @ApiParam({
    description: '用户id',
    name: 'id',
  })
  @ApiOperation({ summary: '删除用户' })
  delUser(@Param('id') id: string) {
    this.usersService.delUser(id)
    return {
      state: 200,
      message: '删除成功',
    }
  }
}
