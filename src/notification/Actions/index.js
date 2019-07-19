import ExampleAction from './ExampleAction';

import { EXAMPLE_ACTION } from './Names';

export default context => ({
  [EXAMPLE_ACTION]: notification => ExampleAction(context, notification),
});
