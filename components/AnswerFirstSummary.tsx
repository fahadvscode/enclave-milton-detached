export function AnswerFirstSummary({ text, heading }: { text: string; heading: string }) {
  return (
    <div>
      <h2 className="max-w-[22ch] text-3xl md:text-4xl">{heading}</h2>
      <p className="prose-measure mt-5 text-[1.125rem] leading-[1.7]">{text}</p>
    </div>
  );
}
