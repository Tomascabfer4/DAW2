import Image from "next/image";

export default function Home() {
    return (
        <div>
            <h1 className="text-4xl">
                BLOG
            </h1>

            <div className="flex gap-4 flex-wrap items-baseline">
                {/* <img src="/foto1.avif" alt="foto1" className="w-40" /> */}
                <Image src={"/foto1.avif"} width={100} height={100} alt="foto1" />
                <Image src={"/foto2.avif"} width={100} height={100} alt="foto2" />

                {/* <img src={"/paisaje1.jpg"} alt="paisaje1" className="w-40" /> */}

                <Image src={"/paisaje1.jpg"} width={500} height={500} alt="paisaje1" />
                <Image src={"/paisaje2.jpg"} width={500} height={500} alt="paisaje2" />
            </div>
        </div>
    )
}