import React from 'react';

type Props = { title: string; description: string };

export default function ScienceSection(props: Props) {
  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
          {props.title}
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          {props.description}
        </p>
      </div>
    </section>
  );
}
