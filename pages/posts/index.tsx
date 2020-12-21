import Link from 'next/link';

const posts = () => {
  return (
    <>
      <p className="font-sans md:font-serif">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet
        eros non justo malesuada auctor. Quisque tincidunt risus rhoncus orci
        laoreet, eget porttitor orci laoreet. Phasellus blandit ipsum ac
        ultrices facilisis. Quisque at diam vestibulum nulla congue commodo
        tempor ac massa. Aliquam erat volutpat. Cras pretium luctus arcu quis
        ullamcorper. Suspendisse rutrum convallis nisi vel volutpat. Praesent
        libero nulla, fringilla sed dolor et, blandit convallis neque. Proin
        maximus est velit, eget mollis ante molestie sed. Integer gravida
        convallis eros, et maximus tortor convallis blandit. Integer convallis
        egestas ante, a lacinia purus porta vehicula. Morbi efficitur posuere
        ipsum vel maximus. Ut viverra risus at dolor hendrerit, vestibulum
        eleifend orci bibendum. Aenean in sapien tortor. Nam ac urna aliquam,
        pharetra erat a, sollicitudin diam. Morbi bibendum aliquet eros, nec
        sodales sapien accumsan ut.
      </p>
      <Link href="/">Back</Link>
    </>
  );
};

export default posts;
