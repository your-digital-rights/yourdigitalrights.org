import React, { useState } from 'react';
import Image from "next/image";

const ImageWithFallback = (props) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...rest}
            src={imgSrc}
            alt={rest.alt || ""}
            sizes={rest.sizes || "24px"}
            onError={() => {
                if (imgSrc !== fallbackSrc) {
                    setImgSrc(fallbackSrc);
                }
            }}
        />
    );
};

export default ImageWithFallback;
