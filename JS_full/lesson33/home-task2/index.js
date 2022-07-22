const serverUrl = 'api.github.com/repos/USERID/REPOID/commits?per_page=100';
const entryObj = { days: 7, userId: 'userId', repoId: 'repoId' };
const getMostActiveDevs = Obj => {
  fetch('api.github.com/repos')
    .then(response => response.json())
    .then(result => console.log(result));
};

getMostActiveDevs(entryObj);
