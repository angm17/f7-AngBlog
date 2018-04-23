const routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
    options: {
      reloadCurrent: true
    }
  },
  // post page
  {
    path: '/post/:id',
    componentUrl: './pages/post.html',
    name: 'post',
    options: {
      reloadCurrent: true
    }
  },
  //add post page
  {
    path: '/addPost',
    componentUrl: './pages/addPost.html'
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './index.html',
  },
];
