import { getImage } from "~/server/db/queries";

export default async function FullPageImageView(props: { id: number }) {
	const image = await getImage(props.id);

	return (
		<div className="flex w-full h-full min-w-0">
			<div className="flex-shrink flex justify-center items-center">
				<img
					src={image.url}
					className="flex-shrink object-contain max-h-full max-w-full"
				/>
			</div>

			<div className="w-48 flex flex-col flex-shrink-0 border-l">
				<div className="text-xl font-bold">{image.name}</div>
			</div>
		</div>
	);
}