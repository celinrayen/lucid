import { storiesOf } from '@storybook/react';
import { exampleStory } from '../../.storybook/lucid-docs-addon';

import ButtonWithIcon from '../../src/components/ButtonWithIcon/ButtonWithIcon';
import WithDefaultsExample from './ButtonWithIcon/WithDefaults';
import withDefaultsCode from '!!raw-loader!./ButtonWithIcon/WithDefaults';

storiesOf('ButtonWithIcon', module).add(
	'with defaults',
	exampleStory({
		component: ButtonWithIcon,
		example: WithDefaultsExample,
		code: withDefaultsCode,
		path: ['ButtonWithIcon'],
		options: { showAddonPanel: true },
	})
);

/*
 * This is the same as calling the `exampleStory` function above:

import { withDescription, withProps, withCode } from '../../.storybook/lucid-docs-addon';

storiesOf('ButtonWithIcon', module)
	.add('with defaults',
		withDescription(ButtonWithIcon)(
			withProps(ButtonWithIcon)(
				withCode(withDefaultsCode)(
					WithDefaultsExample
				)
			)
		)
	);

*/
