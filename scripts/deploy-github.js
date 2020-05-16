const ghpages = require('gh-pages');


ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/jonocosa/amigosdosolar.git',
    },
    () => {
        console.log('Deploy completed! ')
    }
)