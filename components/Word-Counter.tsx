"use client";

import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Textarea } from "./ui/textarea";

function WordCounterComponent() {
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
  };

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;
  const charCount = text.length;

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center justify-center flex flex-col">
          <CardTitle>Text Analysis</CardTitle>
          <CardDescription>
            Enter text and see the word and character count.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Textarea for input text */}
          <Textarea
            id="text-input"
            placeholder="Enter your text here..."
            className="h-32 resize-none"
            value={text}
            onChange={handleTextChange}
          />
          {/* Display word and character count */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              <span id="word-count">{wordCount}</span> words,{" "}
              <span id="char-count">{charCount}</span> characters
            </div>
            {/* Button to clear the input text */}
            <Button onClick={clearText}>Clear</Button>
          </div>
        </CardContent>
        <CardFooter>
          <div className="font-bold text-gray-700 flex justify-center text-center">
            Created By Hassaan Arain
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
export default WordCounterComponent;
