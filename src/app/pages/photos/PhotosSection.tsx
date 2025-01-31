
export default function PhotosSection() {
    return (
        <section id="photos" className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Harman Phoenix 200</h2>
            <div className="mb-16 columns-1 lg:columns-2 gap-2">
                <img src="/photos/phoenix2.jpg" alt="Image 1" className="mb-2 w-full" />
                <img src="/photos/phoenix1.jpg" alt="Image 2" className="mb-2 w-full" />
                <img src="/photos/phoenix5.jpg" alt="Image 3" className="mb-2 w-full" />
                <img src="/photos/phoenix3.jpg" alt="Image 4" className="mb-2 w-full" />
                <img src="/photos/phoenix6.jpg" alt="Image 2" className="mb-2 w-full" />
                <img src="/photos/phoenix4.jpg" alt="Image 2" className="mb-2 w-full" />
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Harman Ilford HP5</h2>
            <div className="mb-16 columns-1 lg:columns-2 gap-2">
                <img src="/photos/ilford5.jpg" alt="Image 1" className="mb-2 w-full" />
                <img src="/photos/ilford2.jpg" alt="Image 2" className="mb-2 w-full" />
                <img src="/photos/ilford4.jpg" alt="Image 3" className="mb-2 w-full" />
                <img src="/photos/ilford3.jpg" alt="Image 4" className="mb-2 w-full" />
                <img src="/photos/ilford6.jpg" alt="Image 2" className="mb-2 w-full" />
                <img src="/photos/ilford1.jpg" alt="Image 2" className="mb-2 w-full" />
            </div>
        </section>
    );
};