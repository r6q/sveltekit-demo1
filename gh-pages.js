import {publish} from 'gh-pages';

publish(
    'docs',
    {
      branch: 'gh-pages',
      repo: 'https://github.com/r6q/sveltekit-demo1.git',
      user: {
        name: 'r6q',
        email: '17678057+r6q@users.noreply.github.com',
      },
      dotfiles: true,
    },
    (err) => {
      if (err) {
        console.log('Failed to deploy:', err);
      } else {
        console.log('Deploy Complete!');
      }
    },
);
