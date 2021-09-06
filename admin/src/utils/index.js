/**
 * 设置表单类型
 * @param {'ADD', 'UPD', 'GET'} type 
 * @param { string } title 标题 
 * @returns 
 */
export function setFormOptions(type, title) {
  switch (type) {
    case 'ADD':
      return {
        title: title ? title : '添加数据',
        type: 'ADD',
        disabled: false
      }
    case 'UPD':
      return {
        title: title ? title : '修改数据',
        type: 'UPD',
        disabled: false
      }
    case 'GET':
      return {
        title: title ? title : '查看数据',
        type: 'GET',
        disabled: true
      }
    default:
      return {}
  }
}

export class ParamOptions {
  static CATEGORY_ID = '61358ec4fa0e96542c489c95'
  static TAG_ID = '61358ecefa0e96542c489c96'
}