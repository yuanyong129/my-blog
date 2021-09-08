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

export const TypeCategory = [
  {
    title: '分类',
    typeId: 0,
    remark: '分类'
  },
  {
    title: '标签',
    typeId: 1,
    remark: '标签'
  }
]

export class PARAM_OPTIONS {
  static CATEGORY_ID = 0
  static TAG_ID = 1
}