import request from './request'

// 获取博客数据
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {

  return await request.get('/api/blog', {
    params: {
      page, limit, categoryId
    }
  })
  //   console.log(resp.data)
}

// 获取博客分类
export async function getBlogCategories() {
  return await request.get('/api/blogtype')
  //   console.log(resp.data)
}

export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`)
}
export async function postComment(commentInfo) {
  return await request.post(`/api/comment`, commentInfo)
}

export async function getComments(page = 1, limit = 10, blogid = -1, keyword) {
  return await request.get(`/api/comment`, {
    params: {
      page, limit, blogid, keyword
    }
  })
}
