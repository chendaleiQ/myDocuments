import request from './request'

export async function getBanners() {
  return await request.get('/api/banner')
  //   console.log(resp.data)
}
