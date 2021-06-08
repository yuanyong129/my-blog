import { Param } from './param.model'
import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, Prop, Ref } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true, // 自动添加创建时间以及修改时间自动
  },
})
export class Post {
  _id?: string
  @ApiProperty({
    description: '帖子名称',
    example: '震惊？！狮子竟然可以飞！！',
  })
  @Prop()
  title: string

  @ApiProperty({
    description: '作者',
    example: '空澄',
    default: '空澄',
  })
  @Prop()
  author: string

  @ApiProperty({
    description: '帖子内容',
    example: '一头非洲的狮子竟然飞到了欧洲！',
  })
  @Prop()
  content: string

  @ApiProperty({
    description: '帖子类型',
    example: '超自然',
  })
  @Prop({
    ref: 'Param',
  })
  type: Ref<Param>

  @ApiProperty({
    description: '帖子标签',
    example: '超自然',
  })
  @Prop({
    ref: 'Param',
  })
  tags?: Ref<Param>[]
}
