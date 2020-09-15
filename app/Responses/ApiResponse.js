'use strict'

/**
 * Send success response
 * @param  {string|null}   message - response message
 * @param  {int}   statusCode - http response status code
 * @param  {object|string|null}   data - http response status code
 * @return {object}   Response object
 */
const sendSuccess = (data = {}, message = null, statusCode = 200) => {
  let response = (data && Object.keys(data).length) ? data : null

  return {
    success: true,
    code: (!statusCode) ? 200 : statusCode,
    message: (message == null || !message) ? 'Request successfully processed!' : message,
    data: response
  }
}

/**
 * Send error response
 * @param  {string|null}   message - response message
 * @param  {int}   statusCode - http response status code
 * @param  {object}   data - object of result data
 * @param  {object}   error - error response
 * @return {object}   Response object
 */
const sendError = (data = {}, message = null, statusCode = 500, error = {}) => {
  let response = (Object.keys(data).length) ? data : null
  let trace = (Object.keys(error).length) ? error : null

  return {
    success: false,
    code: (!statusCode) ? 500 : statusCode,
    message: (message == null || !message) ? 'Whoops! something when wrong' : message,
    trace: trace,
    data: response
  }
}
