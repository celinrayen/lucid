import React from 'react';
import createClass from 'create-react-class';
import { Banner, Icon } from '../../../index';

const CustomIcon = createClass({
	render() {
		return (
			<Icon size={18} viewBox='0 0 22 22'>
				<path
					fill='#FFFFFF'
					d='M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm2.29,17q-0.85.34-1.35,0.51a3.57,3.57,0,0,1-1.18.18,2.34,2.34,0,0,1-1.6-.5A1.62,1.62,0,0,1,8.59,16a4.62,4.62,0,0,1,0-.61c0-.21.07-0.44,0.14-0.71l0.71-2.5c0.06-.24.12-0.47,0.16-0.68a3,3,0,0,0,.06-0.59,0.91,0.91,0,0,0-.2-0.67A1.12,1.12,0,0,0,8.75,10a2,2,0,0,0-.56.08l-0.49.16,0.19-.77Q8.57,9.2,9.21,9a3.93,3.93,0,0,1,1.2-.2A2.3,2.3,0,0,1,12,9.29a1.64,1.64,0,0,1,.55,1.28q0,0.16,0,.57a3.84,3.84,0,0,1-.14.76l-0.7,2.5c-0.06.2-.11,0.43-0.16,0.69a3.62,3.62,0,0,0-.07.58,0.84,0.84,0,0,0,.22.68,1.25,1.25,0,0,0,.77.18A2.23,2.23,0,0,0,13,16.44a3.31,3.31,0,0,0,.47-0.16ZM13.16,6.92A1.68,1.68,0,0,1,12,7.38a1.7,1.7,0,0,1-1.19-.46,1.46,1.46,0,0,1-.5-1.11,1.48,1.48,0,0,1,.5-1.11A1.69,1.69,0,0,1,12,4.23a1.67,1.67,0,0,1,1.19.46A1.5,1.5,0,0,1,13.16,6.92Z'
				/>
			</Icon>
		);
	},
});

export default createClass({
	render() {
		return (
			<div>
				<div>
					<Banner style={{ marginBottom: 8 }} isSmall={true}>
						Default
					</Banner>
					<Banner
						isCloseable={false}
						style={{ marginBottom: 8 }}
						isSmall={true}
					>
						Default -- No Close {String.fromCharCode(0x00d7)}
					</Banner>
				</div>
				<div>
					<Banner kind='success' style={{ marginBottom: 8 }} isSmall={true}>
						Success
					</Banner>
					<Banner
						kind='success'
						isCloseable={false}
						isSmall={true}
						style={{ marginBottom: 8 }}
					>
						Success -- No Close {String.fromCharCode(0x00d7)}
					</Banner>
				</div>

				<div>
					<Banner kind='warning' style={{ marginBottom: 8 }} isSmall={true}>
						Warning
					</Banner>
					<Banner
						kind='warning'
						isCloseable={false}
						isSmall={true}
						style={{ marginBottom: 8 }}
					>
						Warning -- No Close {String.fromCharCode(0x00d7)}
					</Banner>
				</div>

				<div>
					<Banner kind='danger' style={{ marginBottom: 8 }} isSmall={true}>
						Danger
					</Banner>
					<Banner
						kind='danger'
						isCloseable={false}
						style={{ marginBottom: 8 }}
						isSmall={true}
					>
						Danger -- No Close {String.fromCharCode(0x00d7)}
					</Banner>
				</div>

				<div>
					<Banner kind='info' style={{ marginBottom: 8 }} isSmall={true}>
						Info
					</Banner>
					<Banner
						kind='info'
						isCloseable={false}
						style={{ marginBottom: 8 }}
						isSmall={true}
					>
						Info -- No Close {String.fromCharCode(0x00d7)}
					</Banner>
				</div>

				<div>
					<Banner
						style={{ marginBottom: 8 }}
						icon={<CustomIcon />}
						kind='danger'
						isSmall={true}
					>
						Has Custom Icon
					</Banner>
				</div>
			</div>
		);
	},
});
