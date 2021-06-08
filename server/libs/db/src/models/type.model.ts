import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, Prop } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true, // 自动添加创建时间以及修改时间自动
  },
})
export class Type {
  _id?: string
  @ApiProperty({
    description: '类型名称',
    example: '博客分类',
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
