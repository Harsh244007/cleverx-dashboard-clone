import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"
type FooterImageType = {
    src:string | StaticImport;
}
const FooterImage=({src}:FooterImageType)=>{
    return <Image className="hover:scale-125" src={src} width={20} height={20} alt={"FooterIcon"}/>
}
export default FooterImage
