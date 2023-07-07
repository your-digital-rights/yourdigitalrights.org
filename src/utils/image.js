import React, { useState } from 'react';
import Image from "next/legacy/image";

const ImageWithFallback = (props) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...rest}
            unoptimized
            src={imgSrc}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export default ImageWithFallback;