import { useTypewriter, Cursor } from "react-simple-typewriter";
function Text() {
  const [txt] = useTypewriter({
    words: ["Nermine Bouzidi"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  const [txt2] = useTypewriter({
    words: ["Web Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 180,
  });
  return (
    <>
      <h1>Hello I'm</h1>
      <h1>
        <span>{txt}</span>
        <span>
          <Cursor />
        </span>
      </h1>
      <h1>
        <span>{txt2}</span>
        <span>
          <Cursor />
        </span>
      </h1>
    </>
  );
}
export default Text;
