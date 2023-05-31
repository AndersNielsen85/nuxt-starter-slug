export default defineEventHandler((event) => {
  if (event.context.params.path === '404notfound') {
    // Fake an error by not returning data.
    return null;
  }
  return {
    path: '/api/' + event.context.params.path,
    query: getQuery(event),
  };
});
