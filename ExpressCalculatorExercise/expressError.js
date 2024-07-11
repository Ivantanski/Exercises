/** ExpressError extends the normal JS error so we can easily
 *  add a status when we make an instance of it.
 *
 *  The error-handling middleware will return this.
 */

class ExpressError extends Error {
  constructor(message, status = 500) {
    super(message);  // Call the parent class constructor with the message argument
    this.status = status;  // Assign the status property
    console.error(this.stack);  // Log the stack trace for debugging purposes
  }
}

module.exports = ExpressError;
