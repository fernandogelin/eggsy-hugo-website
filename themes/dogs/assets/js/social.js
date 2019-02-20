document.addEventListener('DOMContentLoaded', function(event) {
  const userFeed = new Instafeed({
    get: 'user',
    userId: '482817452',
    accessToken: '482817452.33e856b.baac8a33d8394a698c107b21a4b24259'
  });
  return setTimeout((() => userFeed.run()), 1000);
});
