import request from '@/util/require'
export const getBloggerInfo = (data) => {
  return request({
    url: 'huang/info',
    method: 'POST',
    data
  })
}
