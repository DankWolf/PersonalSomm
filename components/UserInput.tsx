import { useState } from "react";
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
      // const response = await openai.createCompletion({
      //   model: "text-davinci-003",
      //   prompt: "what wine would you pair with chicken?",
      //   temperature: 0.7,
      //   max_tokens: 7,
      // });
      // console.log("response from ChatGPT:", response);
      const chatData = await fetch(chatUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: {
          // @ts-ignore
          model: "text-davinci-003",
          prompt: `${query}`,
          max_tokens: 100,
          temperature: 0,
        },
      });
      console.log("response from chatGPT:", chatData);
      // .then((res) => res.json());
      // .then((returnData)) => {
      //   return returnData;
      // })
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
      {/* <ChatGPTResponse text={chatResponse} /> */}
    </>
  );
};

export default UserInput;
