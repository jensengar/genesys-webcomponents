import { storiesOf } from '@storybook/polymer';
import {action} from '@storybook/addon-actions';
import { withReadme  } from 'storybook-readme';
import { withKnobs, text, select } from '@storybook/addon-knobs/polymer';

import README from 'MD/genesys-pagination/README.md';

storiesOf('Genesys Components', module)
.addDecorator(withKnobs)
.add(
    'Genesys Pagination',
    withReadme(README, () => {
      const el = document.createElement('genesys-pagination'); 
      el.first = text('first', 'Blop');
      el.last = text('last', 'Blop');
      el.middle = text('middle', 'Blop');
      el.addEventListener('custom', e => action('custom')(e.detail));
      document.getElementsByTagName('html')[0].className = 'genesys-' + select('theme', ['dark', 'default'], 'default') + '-theme';
      return el;
    })
);
