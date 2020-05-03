const { codegen } = require('swagger-axios-codegen')

codegen({
  methodNameMode: 'operationId',
  source: require('./openapi.json'),
  useStaticMethod: true,
  outputDir: './src/api'
})
