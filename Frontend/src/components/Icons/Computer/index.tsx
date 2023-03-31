import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

export default function Computer(props: SvgIconProps): JSX.Element {
	return (
		<SvgIcon {...props}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 592 592">
				<defs />
				<path d="M392 456h16v16h-16z" />
				<path d="M584 472h-8V256c0-18-14-32-32-32h-64V120c0-35-29-64-64-64H64C29 56 0 85 0 120v256c0 35 29 64 64 64h78l-12 48H56a24 24 0 100 48h504c18 0 32-14 32-32v-24c0-4-4-8-8-8zm-40-232c9 0 16 7 16 16v216h-88l-6 2-13 14H347l-13-14-6-2h-88V256c0-9 7-16 16-16h288zm-320 16v104H72c-9 0-16-7-16-16V128c0-9 7-16 16-16h336c8 0 16 7 16 16v96H256c-18 0-32 14-32 32zM64 424c-26 0-48-22-48-48V120c0-26 22-48 48-48h352c26 0 48 22 48 48v104h-24v-96c0-18-15-32-32-32H72c-18 0-32 14-32 32v216c0 18 14 32 32 32h152v48H64zm-8 96a8 8 0 010-16h152c0 6 2 11 4 16H56zm152-40v8h-62l12-48h66v32h-8c-4 0-8 4-8 8zm368 24c0 9-7 16-16 16H240c-9 0-16-7-16-16v-16h101l13 14 6 2h112l6-2 13-14h101v16z" />
				<path d="M536 256H264c-4 0-8 4-8 8v168c0 4 4 8 8 8h272c4 0 8-4 8-8V264c0-4-4-8-8-8zm-8 168H272V272h256v152zM96 136c-9 0-16 7-16 16v48h16v-48h120v-16H96zM232 136h16v16h-16z" />
				<path d="M304 288c-9 0-16 7-16 16v40h16v-40h56v-16h-56zM376 288h16v16h-16z" />
			</svg>
		</SvgIcon>
	);
}
