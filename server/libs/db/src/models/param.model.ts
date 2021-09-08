import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, Prop, Ref } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true, // 自动添加创建时间以及修改时间自动
  },
})
export class Param {
  _id?: string

  @ApiProperty({ description: '类型id', example: 0 })
  @Prop()
  typeId: number

  @ApiProperty({
    description: '参数名称',
    example: '技术',
  })
  @Prop()
  title: string

  @ApiProperty({
    description: '备注',
    example: '博客的分类',
  })
  @Prop()
  remark: string
}
