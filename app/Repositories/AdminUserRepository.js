'use strict'

const ModelUser = use('App/Models/User')

class AdminUserRepository {
  getAllFuncs(toCheck) {
    var props = [];
    var obj = toCheck;
    do {
        props = props.concat(Object.getOwnPropertyNames(obj));
    } while (obj = Object.getPrototypeOf(obj));

    return props.sort().filter(function(e, i, arr) {
       if (e!=arr[i+1] && typeof toCheck[e] == 'function') return true;
    });
}

  async getAll () {
    let data = await ModelUser.all()

    let formattedData = data.toJSON()

    return formattedData
  }
}

module.exports = AdminUserRepository
