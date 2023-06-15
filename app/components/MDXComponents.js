const MDXComponents = {
  h1: (props) => (
    <h1 className="mt-2 text-4xl font-bold tracking-tight" {...props} />
  ),
  h2: (props) => (
    <h2
      className="mt-10 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h4: (props) => (
    <h3 className="mt-8 text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props) => (
    <p className="leading-8 [&:not(:first-child)]:mt-4" {...props} />
  ),
  ul: (props) => <ul className="my-6 ml-6 list-disc" {...props} />,
  ol: (props) => <ol className="my-6 ml-6 list-decimal" {...props} />,
  li: (props) => <li className="mt-2" {...props} />,
  a: (props) => (
    <a className="font-medium underline underline-offset-4" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-4 border-l-2 pl-6 italic [&>*]:text-muted-foreground"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-4 md:my-8" {...props} />,
  table: (props) => (
    <div className="overflow-x-auto">
      <table className="table-auto" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-gray-100" {...props} />,
  th: (props) => (
    <th
      className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props) => <td className="border px-4 py-2" {...props} />,
  tr: (props) => <tr className="m-0 border-t p-0 even:bg-muted" {...props} />,
  pre: (props) => (
    <pre className="p-5 rounded-lg border bg-code-gray py-4" {...props} />
  ),
  code: (props) => (
    <code className="relative py-[0.2rem] text-sm code" {...props} />
  ),
};

export default MDXComponents;
