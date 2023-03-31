import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

export default function Media(props: SvgIconProps): JSX.Element {
	return (
		<SvgIcon {...props}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<defs />
				<path d="M478 262v-12a7 7 0 10-15 0v12a7 7 0 1015 0zM313 229a73 73 0 10-146 0 73 73 0 00146 0zm-131 0a58 58 0 11117 0 58 58 0 01-117 0z" />
				<path d="M272 217l-38-23c-9-5-21 2-21 13v45c0 11 12 18 21 12l38-23c9-5 9-19 0-24zm-44 33v-42l35 21zM315 378c4 0 8-4 8-8h64a22 22 0 000-43h-64a7 7 0 10-15 0H93a22 22 0 000 43h215c0 4 3 8 7 8zm8-36h64a7 7 0 010 13h-64zM93 355a7 7 0 010-13h215v13z" />
				<path d="M41 441h430c23 0 41-19 41-41V112c0-22-18-41-41-41H274a7 7 0 100 15h197c14 0 26 12 26 26v288c0 14-12 26-26 26H41c-14 0-26-12-26-26V112c0-14 12-26 26-26h198a7 7 0 100-15H41C18 71 0 90 0 112v288c0 22 18 41 41 41z" />
				<path d="M443 246c4 0 7-3 7-7V112c0-4-4-8-8-8H41c-5 0-8 4-8 8v288c0 4 3 8 8 8h401c4 0 8-4 8-8V274a7 7 0 10-15 0v119H48V119h387v120c0 4 4 7 8 7z" />
			</svg>
		</SvgIcon>
	);
}
