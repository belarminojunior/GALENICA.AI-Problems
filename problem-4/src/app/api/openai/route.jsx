import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const body = await req.json();
  const { query } = body;

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  try {
    const prompt = `Provide two highly rated movies and two highly rated TV shows based on the input: "${query}". Format the response as:
Movies:
1. <Title> - <Description> (<Year>)
2. <Title> - <Description> (<Year>)
TV Shows:
1. <Title> - <Description> (<Year>)
2. <Title> - <Description> (<Year>)`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
    });

    const text = completion.choices[0].message.content;

    const moviesMatch = text.match(/Movies:\n1\. (.+)\n2\. (.+)/);
    const tvShowsMatch = text.match(/TV Shows:\n1\. (.+)\n2\. (.+)/);

    return NextResponse.json({
      movies: moviesMatch ? [moviesMatch[1], moviesMatch[2]] : [],
      tvShows: tvShowsMatch ? [tvShowsMatch[1], tvShowsMatch[2]] : [],
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
