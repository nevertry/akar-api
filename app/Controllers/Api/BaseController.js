'use strict'

class BaseController {

  /**
   * Send success response
   * @param  {object|string|null}   data - A generic container for any other information about the error
   * @param  {string|null}   message - response message
   * @param  {int}   code - A numeric code corresponding to the error, if applicable
   * @return {object}   Response object
   */
  sendSuccess (data = {}, message = null, code = 0) {
    let response = (data && Object.keys(data).length) ? data : null

    return {
      err: code,
      msg: message,
      data: response,
    }
  }

  /**
   * Send fail response
   * @param  {object}   data - object of result data
   * @param  {string|null}   message - response message
   * @param  {int}   code - A numeric code corresponding to the error, if applicable
   * @param  {object}   error - error response
   * @return {object}   Response object
   */
  sendFail (data = {}, message = null, code = 5000) {
    let response = (Object.keys(data).length) ? data : null

    return {
      err: code,
      msg: message,
      data: response
    }
  }

  /**
   * Send error response
   * @param  {object}   data - object of result data
   * @param  {string|null}   message - response message
   * @param  {int}   code - A numeric code corresponding to the error, if applicable
   * @param  {object}   error - error response
   * @return {object}   Response object
   */
  sendError (data = {}, message = null, code = 9000, error = {}) {
    let response = (Object.keys(data).length) ? data : null
    let debug = true // use App config
    let trace = debug ? ((Object.keys(error).length) ? error : null) : null

    return {
      err: code,
      msg: message,
      data: response,
      trace: trace,
    }
  }

}

module.exports = BaseController
