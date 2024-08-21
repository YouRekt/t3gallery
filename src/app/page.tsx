import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main>
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
    </main>
  );
}
