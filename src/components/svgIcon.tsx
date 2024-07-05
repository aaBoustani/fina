import React from 'react';

interface SvgIconProps {
    svgFilename: string;
    width?: string;
    height?: string;
}

/**
 * SvgIcon component.
 * @prop svgFilename: The name of the SVG file in the public/icons directory.
 * @prop width: The width of the SVG icon.
 * @prop height: The height of the SVG icon.
 * 
 * @example
 * <SvgIcon svgFilename="icon.svg" width="48px" height="48px" />
 */
export default function SvgIcon({ svgFilename, width = '48px', height = '48px' }: SvgIconProps): JSX.Element {
    if (!svgFilename) {
        return <></>;
    }
    const SvgComponent = require(`/public/icons/${svgFilename}`).default;

    return (
        <div style={{ width, height }}>
            <SvgComponent width={width} height={height} />
        </div>
    );
};