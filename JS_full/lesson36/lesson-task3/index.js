const fetchUser = async user => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}`);
    if (!response.ok) {
      return null;
    }
    const { blog } = await response.json();
    return blog;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

const getUsersBlogs = users => {
  const promises = users.map(user => fetchUser(user));
  return Promise.all(promises);
};

getUsersBlogs(['google', 'facebook', 'reactjs']).then(result => console.log(result));
