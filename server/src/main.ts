import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/blog') // 设置url全局前缀
  app.enableCors() // 允许跨域
  const options = new DocumentBuilder() // 接口文档设置
    .setTitle('我的个人博客接口')
    .setDescription('我的个人博客')
    .setVersion('v1.0.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/api-docs', app, document) // 设置文档地址以及启动文档
  await app.listen(3080) // 设置监听端口
}
bootstrap()
