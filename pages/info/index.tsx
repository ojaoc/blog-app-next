import Link from "next/link";

export default function info() {
    return (
        <>
            <Link href="/">Back</Link>
            <br></br>
            <Link href="/about">About</Link>
            <br></br>
            <Link href="/info/contacts">Contacts</Link>
        </>
    );
}
