import { type StaticImageData } from "next/image";

type ImgProps = {
	file: StaticImageData;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Img({ alt = "", file, ...rest }: ImgProps) {
	return (
		<img
			src={file.src}
			width={file.width}
			height={file.height}
			alt={alt}
			{...rest}
		/>
	);
}
