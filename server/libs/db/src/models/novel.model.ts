import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, Prop, Ref } from '@typegoose/typegoose'
// import { Param } from './param.model'

@modelOptions({
  schemaOptions: {
    timestamps: true, // 自动添加创建时间以及修改时间自动
  },
})
// 小说类
export class Novel {
  @Prop()
  _id?: string

  @ApiProperty({ description: '小说标题' })
  @Prop()
  title: string

  @ApiProperty({ description: '小说封面' })
  @Prop()
  cover: string

  @Prop({
    ref: 'Chapter',
  })
  chapters: Ref<Chapter>[]
}

@modelOptions({
  schemaOptions: {
    timestamps: true, // 自动添加创建时间以及修改时间自动
  },
})
// 章节类
export class Chapter {
  @Prop()
  title: string

  @Prop()
  content: string
}
