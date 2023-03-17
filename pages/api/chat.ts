const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const chatUrl = "https://api.openai.com/v1/completions";

export default async function handler(req, res) {
  console.log("req body:", req.body);
  // const messages = [req.body];
  // const messages = {role: 'user', content: req.body}
  const chatGPT = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: req.body },
      { role: "assistant", content: "ChatGPT response here..." },
    ],
  });
  return res.status(200).json(chatGPT.data.choices[0].message);
}
