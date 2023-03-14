type props = {
  text: string;
};
export default function ChatGPTResponse(props: props) {
  const { text } = props;
  return <p>{text}</p>;
}
