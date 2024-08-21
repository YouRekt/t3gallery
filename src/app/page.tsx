import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
	const images = await db.query.images.findMany({
		orderBy: (model, { desc }) => desc(model.id),
	});

	return (
		<div className="flex flex-wrap gap-4">
			{[...images, ...images, ...images].map((image, index) => (
				<div key={image.id + "-" + index} className="flex w-48 flex-col">
					{/* <Image
              src={image.url}
              width={1920}
              height={1080}
              alt={`Image ${image.id}`}
            /> */}
					<img src={image.url} alt={`Image ${image.id}`} />
					<div>{image.name}</div>
				</div>
			))}
		</div>
	);
}

export default function HomePage() {
	return (
		<main>
			<SignedOut>
				<div className="h-full w-full text-2xl text-center">
					Please Sign In to see the gallery
				</div>
			</SignedOut>
			<SignedIn>
				<Images />
			</SignedIn>
		</main>
	);
}
