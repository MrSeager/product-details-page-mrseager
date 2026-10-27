//Components
import Link from "next/link";

interface CsLinkProps {
    name: string;
    linkHref: string;
}

export default function CsLink({ name, linkHref }: CsLinkProps) {
    return(
        <Link
            href={linkHref}
            className="duration-300 outline-none hover:scale-105 focus:scale-105"
        >
            {name}
        </Link>
    );
}