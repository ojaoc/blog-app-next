import Link from "next/link";

export default function home() {
    return (
        <>
            <Link href="/about">About</Link>
            <br></br>
            <Link href="/info">Info</Link>
        </>
    );
}
