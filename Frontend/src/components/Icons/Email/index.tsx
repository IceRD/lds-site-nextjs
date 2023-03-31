import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

export default function Email(props: SvgIconProps): JSX.Element {
	return (
		<SvgIcon {...props}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<defs />
				<path d="M137 83a10 10 0 100 20 10 10 0 100-20z" />
				<path d="M472 83H182a10 10 0 100 20h292l-28 28H315a10 10 0 100 20h111L286 290a43 43 0 01-60 0L38 103h55a10 10 0 100-20H40c-22 0-40 18-40 40v266c0 22 18 40 40 40h432c22 0 40-18 40-40V123c0-22-18-40-40-40zM20 389V123l2-8 139 139L21 394l-1-5zm452 20H40l-5-1 140-140 37 37a63 63 0 0088 0l37-37 140 140-5 1zm20-20l-1 5-140-140 139-139 2 8v266z" />
				<path d="M273 131a10 10 0 100 20 10 10 0 100-20z" />
			</svg>
		</SvgIcon>
	);
}
