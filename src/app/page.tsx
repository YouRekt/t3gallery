import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/db/queries";

export const dynamic = "force-dynamic";

async function Images() {
	const images = await getMyImages();

	return (
		<div className="flex flex-wrap gap-4 justify-center">
			{images.map((image) => (
				<div key={image.id} className="flex w-48 h-48 flex-col">
					<Link href={`/img/${image.id}`}>
						<Image
							src={image.url}
							alt={image.name}
							width={192}
							height={192}
							style={{ objectFit: "contain" }}
						/>
					</Link>
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
