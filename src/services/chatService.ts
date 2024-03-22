import OpenAI from "openai";

export const sendMessage = async (openai: OpenAI) => {
    // return openai.chat.completions.create({ messages: [...messages, { role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: input }] }).then((response) => {
    //     return response.choices[0].message.content;
    // }
    const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Who won the world series in 2020?"},
            {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
            ],
        model: "gpt-3.5-turbo",
      });

    
      console.log("response",completion.choices[0]);
  }
