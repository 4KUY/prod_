declare module '*scss' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*svg' {
    import React from 'react'
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare module '*png' {
    const PNG: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
    export default PNG;
}
declare module '*jpg' {
    const JPG: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
    export default JPG;
}
declare module '*jpeg' {
    const JPEG: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
    export default JPEG;
}
declare const __IS_DEV__: boolean;