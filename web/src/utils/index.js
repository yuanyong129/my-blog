export const FORMTYPE = {
  ADD: 'ADD',
  UPD: 'UPD',
  GET: 'GET'
}

export const PUBSUB = {
  OPENDRAWER: 'OPEN DRAWER',
  CLOSEDRAWER: 'CLOSE DRAWER'
}

export const setFormOptions = type => {
  switch (type) {
    case FORMTYPE.ADD:
      return {
        title: '添加数据',
        type: 'ADD',
        disabled: false
      }
    case FORMTYPE.UPD:
      return {
        title: '修改数据',
        type: 'UPD',
        disabled: false
      }
    case FORMTYPE.GET:
      return {
        title: '查看数据',
        type: 'GET',
        disabled: true
      }
    default:
      return {
        title: '添加数据',
        type: 'ADD',
        disabled: false
      }
  }
}