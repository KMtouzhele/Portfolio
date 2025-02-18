import Image from "next/image";

export default function PhotosSection() {
    return (
        <section id="photos" className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Harman Phoenix 200</h2>
            <div className="mb-16 columns-1 sm:columns-2 gap-2">
                <Image src="/photos/phoenix2.jpg" alt="Image 1" width={800} height={600} className="mb-2 w-full h-auto" />
                <Image src="/photos/phoenix1.jpg" alt="Image 2" width={800} height={600} className="mb-2 w-full h-auto" />
                <Image src="/photos/phoenix5.jpg" alt="Image 3" width={800} height={600} className="mb-2 w-full h-auto" />
                <Image src="/photos/phoenix3.jpg" alt="Image 4" width={800} height={600} className="mb-2 w-full h-auto" />
                <Image src="/photos/phoenix6.jpg" alt="Image 5" width={800} height={600} className="mb-2 w-full h-auto" />
                <Image src="/photos/phoenix4.jpg" alt="Image 6" width={800} height={600} className="mb-2 w-full h-auto" />
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Harman Ilford HP5</h2>
            <div className="mb-16 columns-1 sm:columns-2 gap-2">
                <Image src="/photos/ilford5.jpg" alt="Image 1" width={800} height={600} className="mb-2 w-full h-auto" />
                <Image src="/photos/ilford2.jpg" alt="Image 2" width={800} height={600} className="mb-2 w-full h-auto" />
                <Image src="/photos/ilford4.jpg" alt="Image 3" width={800} height={600} className="mb-2 w-full h-auto" />
                <Image src="/photos/ilford3.jpg" alt="Image 4" width={800} height={600} className="mb-2 w-full h-auto" />
                <Image src="/photos/ilford6.jpg" alt="Image 5" width={800} height={600} className="mb-2 w-full h-auto" />
                <Image src="/photos/ilford1.jpg" alt="Image 6" width={800} height={600} className="mb-2 w-full h-auto" />
            </div>
        </section>
    );
}
