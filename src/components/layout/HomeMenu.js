import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

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

            <SectionHeader subHeader={'check out'} mainHeader={'Menu'} />

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