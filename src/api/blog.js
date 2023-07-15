import request from '@/util/require'

// 获取博客列表
export const getblogList = ({ size = 4, page = 0 }) => {
  return request({
    url: 'blog/getblog',
    params: {
      size,
      page
    }
  })
}

export const getblogContent = ({ id }) => {
  return request({
    url: 'blog/getblogContent',
    params: {
      id
    }
  })
}
