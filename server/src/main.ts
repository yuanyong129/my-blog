import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/frame') // 设置url全局前缀
  app.enableCors() // 允许跨域
  const options = new DocumentBuilder() // 接口文档设置
    .setTitle('nestjs基础框架接口')
    .setDescription('常用接口')
    .setVersion('v1.0.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('/api-docs', app, document) // 设置文档地址以及启动文档
  await app.listen(3000) // 设置监听端口
}
bootstrap()
