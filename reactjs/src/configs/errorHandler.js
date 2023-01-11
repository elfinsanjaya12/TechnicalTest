export default function errorHandler(error) {
  if (error) {
    if (error.response) {
      return Promise.reject(error);
    }
  }
}
