'use strict'

const Base = use('App/Controllers/Api/BaseController')
const AdminUserRepository = use('App/Repositories/AdminUserRepository')

class UserController extends Base {
  constructor () {
    super()
    this.AdminUserRepository = new AdminUserRepository
  }

  async list ({ request, response }) {
    try {
      // uncomment for error handling test
      // throw new Error('duh')

      let result = await this.AdminUserRepository.getAll()

      return this.sendSuccess(result, 'OK', int)
    }
    catch (err) {
      return this.sendFail('placeholder')
    }

  }
}

module.exports = UserController
