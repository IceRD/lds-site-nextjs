import React from 'react';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			swiper: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
		}
	}
}
