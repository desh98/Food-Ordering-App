import Image from "next/image";
import MenuItem from "../menu/MenuItem";

export default function HomeMenu() {
    return (
        <section className="mt-12">
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute -left-10 -top-[140px] text-left -z-10">
                    <Image src={'/sallad1.png'} width={140} height={200} objectFit={'contain'} alt={'sallad'}/>
                </div>
                <div className="absolute -top-[160px] -right-10 -z-10">
                    <Image src={'/sallad2.png'} width={140} height={189} objectFit={'contain'} alt={'sallad'}/>
                </div>
            </div>

            <div className="text-center mb-4">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">Check out</h3>
                <h2 className="text-primary font-bold text-4xl">Menu</h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>

        </section>
    );
}