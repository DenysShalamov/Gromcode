const getUsersBlogs = async userName => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    if (!response.ok) {
      return null;
    }
    const { blog } = await response.json();
    return blog;
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
};

const asyncUsers = (...users) => {
  const promises = users.map(user => getUsersBlogs(user));
  return Promise.all(promises);
};

asyncUsers('facebook', 'twitter', 'linkedin').then(result => console.log(result));
