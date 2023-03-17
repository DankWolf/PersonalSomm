import { useState } from "react";
import ChatGPTResponse from "./ChatGPTResponse";
// import ChatGPTResponse from "./ChatGPTResponse";
// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

const UserInput = () => {
  const [flavor, setFlavor] = useState("");
  const [chatResponse, setChatResponse] = useState(
    "Please submit a request to see what wine you want to pair"
  );

  const chatUrl = "https://api.openai.com/v1/completions";

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("event object:", event);
    const flavor = (document.getElementById("flavor") as HTMLInputElement)
      .value;
    const query = `What wine pairs with ${flavor}?`;

    //now querry chat GPT to get the potential wine pairing.
    async function request() {
      const data = await fetch("/api/chat", {
        method: "POST",
        body: `What wine pairs with ${flavor}?`,
      }).then((res) => res.json());
      setChatResponse(data.content);
    }

    request();
    setFlavor("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          This is the label
          <input
            name="flavor"
            id="flavor"
            placeholder="Flavor or protein"
            type="text"
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ChatGPTResponse text={chatResponse} />
    </>
  );
};

export default UserInput;
